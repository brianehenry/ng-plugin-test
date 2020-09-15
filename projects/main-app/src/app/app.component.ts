import { Component } from '@angular/core';
import { PluginService } from './plugin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-plugin-test';

  constructor(
    private pluginService: PluginService
  ) { }

  ngOnInit(): void {
    this.pluginService.LoadPlugins().subscribe();
  }
}
