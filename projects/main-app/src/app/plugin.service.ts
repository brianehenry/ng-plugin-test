import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PluginService {

  constructor(
    private http: HttpClient
  ) { }

  public LoadPlugins(): Observable<Array<string>> {
    return this.http.get<Array<string>>('/plugins.json').pipe(
      tap((plugins) => {
        console.log(plugins);
        for (let plugin of plugins) {
          import(/* webpackIgnore: true */ plugin)
            .then((module) => {
              console.log(module);
            });
        }


      })
    )
  }
}
