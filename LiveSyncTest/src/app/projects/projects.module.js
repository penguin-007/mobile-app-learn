"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var projects_list_component_1 = require("./projects-list/projects-list.component");
var projects_routing_module_1 = require("./projects-routing.module");
var ProjectsModule = /** @class */ (function () {
    function ProjectsModule() {
    }
    ProjectsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                projects_routing_module_1.ProjectsRoutingModule
            ],
            declarations: [projects_list_component_1.ProjectsListComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], ProjectsModule);
    return ProjectsModule;
}());
exports.ProjectsModule = ProjectsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvamVjdHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSxtRkFBZ0Y7QUFFaEYscUVBQWtFO0FBVWxFO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixjQUFjO1FBUjFCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxpQ0FBd0I7Z0JBQ3hCLCtDQUFxQjthQUN0QjtZQUNELFlBQVksRUFBRSxDQUFDLCtDQUFxQixDQUFDO1lBQ3JDLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzVCLENBQUM7T0FDVyxjQUFjLENBQUk7SUFBRCxxQkFBQztDQUFBLEFBQS9CLElBQStCO0FBQWxCLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUHJvamVjdHNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9wcm9qZWN0cy1saXN0L3Byb2plY3RzLWxpc3QuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IFByb2plY3RzUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3Byb2plY3RzLXJvdXRpbmcubW9kdWxlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgIFByb2plY3RzUm91dGluZ01vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbUHJvamVjdHNMaXN0Q29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2plY3RzTW9kdWxlIHsgfVxyXG4iXX0=