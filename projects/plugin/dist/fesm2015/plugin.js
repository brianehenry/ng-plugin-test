import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class PluginService {
    constructor() {
    }
}
PluginService.ɵfac = function PluginService_Factory(t) { return new (t || PluginService)(); };
PluginService.ɵprov = ɵɵdefineInjectable({ token: PluginService, factory: PluginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PluginService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class PluginComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PluginComponent.ɵfac = function PluginComponent_Factory(t) { return new (t || PluginComponent)(); };
PluginComponent.ɵcmp = ɵɵdefineComponent({ type: PluginComponent, selectors: [["lib-plugin"]], decls: 2, vars: 0, template: function PluginComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " plugin works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PluginComponent, [{
        type: Component,
        args: [{
                selector: 'lib-plugin',
                template: `
    <p>
      plugin works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class PluginModule {
}
PluginModule.ɵmod = ɵɵdefineNgModule({ type: PluginModule });
PluginModule.ɵinj = ɵɵdefineInjector({ factory: function PluginModule_Factory(t) { return new (t || PluginModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PluginModule, { declarations: [PluginComponent], exports: [PluginComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PluginModule, [{
        type: NgModule,
        args: [{
                declarations: [PluginComponent],
                imports: [],
                exports: [PluginComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of plugin
 */
class MyPlugin {
    constructor() {
        this.Name = "My Plugin";
        this.ComponentFile = "";
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { PluginComponent, PluginModule, PluginService };
//# sourceMappingURL=plugin.js.map
