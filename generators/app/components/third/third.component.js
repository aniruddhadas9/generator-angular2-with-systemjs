System.register(['@angular/core', "../../services/app.service", "../../services/global-variable"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, app_service_1, global_variable_1;
    var ThirdComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            },
            function (global_variable_1_1) {
                global_variable_1 = global_variable_1_1;
            }],
        execute: function() {
            ThirdComponent = (function (_super) {
                __extends(ThirdComponent, _super);
                function ThirdComponent(appService) {
                    _super.call(this);
                    this.appService = appService;
                }
                ThirdComponent.prototype.ngOnInit = function () {
                    this.appService.displaySideBar = false;
                };
                ThirdComponent.prototype.updateText = function ($event) {
                    console.log('$event: %o', $event);
                    this.appService.message = '[Third]';
                };
                ThirdComponent = __decorate([
                    core_1.Component({
                        selector: 'third',
                        templateUrl: global_variable_1.GlobalVariable.staticPath + 'app/views/third.component.html',
                    }), 
                    __metadata('design:paramtypes', [app_service_1.AppService])
                ], ThirdComponent);
                return ThirdComponent;
            }(core_1.OnInit));
            exports_1("ThirdComponent", ThirdComponent);
        }
    }
});
//# sourceMappingURL=third.component.js.map