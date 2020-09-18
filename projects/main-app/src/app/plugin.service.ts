import { Injectable, Injector, ɵrenderComponent as renderComponent } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, concatMapTo, mergeMap, mergeAll } from 'rxjs/operators';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PluginService {
  pluginDefinitions: any[] = [];

  constructor(
    private http: HttpClient,
    private injector: Injector
  ) { }

  public LoadPlugins(): Observable<any> {
    return Observable.create((observer) => {
      this.http.get<Array<string>>('/plugins.json').subscribe((plugins) => {
        let importedPluginsCount = 0;
        for (let plugin of plugins) {
            import(/* webpackIgnore: true */ plugin)
              .then((module) => {
                const pluginDefinition = new module.default();
                this.pluginDefinitions.push(pluginDefinition);
                observer.next(pluginDefinition);
                if (++importedPluginsCount === plugins.length) {
                  observer.complete();
                }
              });
          }
      });
    });
  }

  public LoadPluginComponent(): any {
    var pluginDefinition = this.pluginDefinitions[0];
    return import(/* webpackIgnore: true */ pluginDefinition.ComponentFile)
    .then(module => module.default)
    .then(componentType => {
      const tagName = componentType.ngComponentDef.selections[0];
      const host = document.createElement(tagName);
      const component = renderComponent(componentType, {
        host,
        injector: this.injector
      });
      return {
        component, 
        host
      }
    })
  }
}
