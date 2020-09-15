(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('plugin', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global.plugin = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var PluginService = /** @class */ (function () {
        function PluginService() {
        }
        PluginService.ɵfac = function PluginService_Factory(t) { return new (t || PluginService)(); };
        PluginService.ɵprov = core.ɵɵdefineInjectable({ token: PluginService, factory: PluginService.ɵfac, providedIn: 'root' });
        return PluginService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(PluginService, [{
            type: core.Injectable,
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
        PluginComponent.ɵcmp = core.ɵɵdefineComponent({ type: PluginComponent, selectors: [["lib-plugin"]], decls: 2, vars: 0, template: function PluginComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "p");
                core.ɵɵtext(1, " plugin works! ");
                core.ɵɵelementEnd();
            } }, encapsulation: 2 });
        return PluginComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(PluginComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-plugin',
                    template: "\n    <p>\n      plugin works!\n    </p>\n  ",
                    styles: []
                }]
        }], function () { return []; }, null); })();

    var PluginModule = /** @class */ (function () {
        function PluginModule() {
        }
        PluginModule.ɵmod = core.ɵɵdefineNgModule({ type: PluginModule });
        PluginModule.ɵinj = core.ɵɵdefineInjector({ factory: function PluginModule_Factory(t) { return new (t || PluginModule)(); }, imports: [[]] });
        return PluginModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(PluginModule, { declarations: [PluginComponent], exports: [PluginComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(PluginModule, [{
            type: core.NgModule,
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

    exports.PluginComponent = PluginComponent;
    exports.PluginModule = PluginModule;
    exports.PluginService = PluginService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=plugin.umd.js.map
