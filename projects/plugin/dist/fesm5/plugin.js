import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

var PluginService = /** @class */ (function () {
    function PluginService() {
    }
    PluginService.ɵfac = function PluginService_Factory(t) { return new (t || PluginService)(); };
    PluginService.ɵprov = ɵɵdefineInjectable({ token: PluginService, factory: PluginService.ɵfac, providedIn: 'root' });
    return PluginService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(PluginService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

var PluginComponent = /** @class */ (function () {
    function PluginComponent() {
    }
    PluginComponent.prototype.ngOnInit = function () {
    };
    PluginComponent.ɵfac = function PluginComponent_Factory(t) { return new (t || PluginComponent)(); };
    PluginComponent.ɵcmp = ɵɵdefineComponent({ type: PluginComponent, selectors: [["lib-plugin"]], decls: 2, vars: 0, template: function PluginComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "p");
            ɵɵtext(1, " plugin works! ");
            ɵɵelementEnd();
        } }, encapsulation: 2 });
    return PluginComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(PluginComponent, [{
        type: Component,
        args: [{
                selector: 'lib-plugin',
                template: "\n    <p>\n      plugin works!\n    </p>\n  ",
                styles: []
            }]
    }], function () { return []; }, null); })();

var PluginModule = /** @class */ (function () {
    function PluginModule() {
    }
    PluginModule.ɵmod = ɵɵdefineNgModule({ type: PluginModule });
    PluginModule.ɵinj = ɵɵdefineInjector({ factory: function PluginModule_Factory(t) { return new (t || PluginModule)(); }, imports: [[]] });
    return PluginModule;
}());
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
var MyPlugin = /** @class */ (function () {
    function MyPlugin() {
        this.Name = "My Plugin";
        this.ComponentFile = "";
    }
    return MyPlugin;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { PluginComponent, PluginModule, PluginService };
//# sourceMappingURL=plugin.js.map
