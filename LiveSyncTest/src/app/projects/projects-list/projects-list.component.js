"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var projects_service_1 = require("~/app/shared/projects/projects.service");
var ProjectsListComponent = /** @class */ (function () {
    function ProjectsListComponent(projectsService) {
        this.projectsService = projectsService;
        this.token = '5602021ae760ac1f3b3307f74f5ff522';
        this.projectsArray = [];
        // todo добавить модель проекта
        this.isLoading = false;
        this.listLoaded = false;
    }
    ProjectsListComponent.prototype.ngOnInit = function () {
        this.isLoading = true;
        this.getProjects(this.token);
    };
    ProjectsListComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    ProjectsListComponent.prototype.getProjects = function (token) {
        var _this = this;
        this.projectsService.getProjects(token).subscribe(function (result) {
            if (result['body'].results !== undefined) {
                // console.log("getProjects", result['body'].results);
                _this.projectsArray = result['body'].results;
                setTimeout(function () {
                    _this.isLoading = false;
                    _this.listLoaded = true;
                }, 500);
            }
        }, function (error) {
            console.error("getProjects", error);
        });
    };
    ProjectsListComponent.prototype.onItemTap = function (args) {
        console.log("Item Tapped at cell index: " + args.index);
    };
    ProjectsListComponent = __decorate([
        core_1.Component({
            selector: 'ns-projects-list',
            templateUrl: './projects-list.component.html',
            styleUrls: ['./projects-list.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [projects_service_1.ProjectsService])
    ], ProjectsListComponent);
    return ProjectsListComponent;
}());
exports.ProjectsListComponent = ProjectsListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9qZWN0cy1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxrREFBb0Q7QUFFcEQsMkVBQXlFO0FBUXpFO0lBVUUsK0JBQ1UsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBVGhDLFVBQUssR0FBRyxrQ0FBa0MsQ0FBQztRQUVyRCxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQiwrQkFBK0I7UUFFL0IsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBSWYsQ0FBQztJQUVMLHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsaURBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELDJDQUFXLEdBQVgsVUFBWSxLQUFLO1FBQWpCLGlCQWFDO1FBWkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUN0RCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLHNEQUFzRDtnQkFDdEQsS0FBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDO2dCQUM1QyxVQUFVLENBQUM7b0JBQ1QsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQ3ZCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNKLE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLHlDQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQXpDVSxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztZQUM1QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FZMkIsa0NBQWU7T0FYL0IscUJBQXFCLENBMkNqQztJQUFELDRCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7QUEzQ1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7IFByb2plY3RzU2VydmljZSB9IGZyb20gJ34vYXBwL3NoYXJlZC9wcm9qZWN0cy9wcm9qZWN0cy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnMtcHJvamVjdHMtbGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2plY3RzLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Byb2plY3RzLWxpc3QuY29tcG9uZW50LmNzcyddLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0c0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwcm90ZWN0ZWQgdG9rZW4gPSAnNTYwMjAyMWFlNzYwYWMxZjNiMzMwN2Y3NGY1ZmY1MjInO1xyXG5cclxuICBwcm9qZWN0c0FycmF5ID0gW107XHJcbiAgLy8gdG9kbyDQtNC+0LHQsNCy0LjRgtGMINC80L7QtNC10LvRjCDQv9GA0L7QtdC60YLQsFxyXG5cclxuICBpc0xvYWRpbmcgPSBmYWxzZTtcclxuICBsaXN0TG9hZGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBwcm9qZWN0c1NlcnZpY2U6IFByb2plY3RzU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5nZXRQcm9qZWN0cyh0aGlzLnRva2VuKTtcclxuICB9XHJcblxyXG4gIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvamVjdHModG9rZW4pIHtcclxuICAgIHRoaXMucHJvamVjdHNTZXJ2aWNlLmdldFByb2plY3RzKHRva2VuKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgaWYgKHJlc3VsdFsnYm9keSddLnJlc3VsdHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZ2V0UHJvamVjdHNcIiwgcmVzdWx0Wydib2R5J10ucmVzdWx0cyk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0c0FycmF5ID0gcmVzdWx0Wydib2R5J10ucmVzdWx0cztcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmxpc3RMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICAgIH1cclxuICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiZ2V0UHJvamVjdHNcIiwgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiSXRlbSBUYXBwZWQgYXQgY2VsbCBpbmRleDogXCIgKyBhcmdzLmluZGV4KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==