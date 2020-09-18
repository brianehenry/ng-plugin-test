import { Component, ViewChild, ElementRef } from '@angular/core';
import { PluginService } from './plugin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-plugin-test';

  @ViewChild('container', { static: true }) containerElement: ElementRef;

  constructor(
    private pluginService: PluginService
  ) { }

  ngOnInit(): void {
    this.pluginService.LoadPlugins().subscribe({
      complete: () => {
        this.pluginService.LoadPluginComponent()
          .then(({ host }) => this.containerElement.nativeElement.appendChild(host));
      }
    });
  }
}
