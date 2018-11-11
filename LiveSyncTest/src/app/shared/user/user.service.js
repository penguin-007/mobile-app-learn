"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.login = function () {
        return this.http.post("https://api.showsite.xyz/user/login", JSON.stringify({
            email: 'myworkbucket@gmail.com',
            password: 'penguin'
        }), { headers: this.getCommonHeaders() }).pipe(operators_1.map(function (response) { return response.json(); }), operators_1.catchError(this.handleErrors));
    };
    UserService.prototype.userGetData = function (token) {
        var params = new http_1.URLSearchParams();
        params.append("token", token);
        return this.http.get('https://api.showsite.xyz/user', { headers: this.getCommonHeaders(), params: params }).pipe(operators_1.map(function (response) { return response.json(); }), operators_1.catchError(this.handleErrors));
    };
    UserService.prototype.getCommonHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return headers;
    };
    UserService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return rxjs_1.Observable.throw(error);
    };
    UserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF5RTtBQUN6RSw0Q0FBc0Q7QUFDdEQsNkJBQWtDO0FBS2xDO0lBRUUscUJBQ1UsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFFcEIsQ0FBQztJQUVELDJCQUFLLEdBQUw7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ2pCLHFDQUFxQyxFQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ1gsS0FBSyxFQUFFLHdCQUF3QjtZQUMvQixRQUFRLEVBQUUsU0FBUztTQUN0QixDQUFDLEVBQ0YsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FDdkMsQ0FBQyxJQUFJLENBQ0YsZUFBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxFQUNoQyxzQkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDaEMsQ0FBQztJQUNKLENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQVksS0FBSztRQUNmLElBQUksTUFBTSxHQUFHLElBQUksc0JBQWUsRUFBRSxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsK0JBQStCLEVBQy9CLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FDbkQsQ0FBQyxJQUFJLENBQ0osZUFBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxFQUNoQyxzQkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDOUIsQ0FBQztJQUNKLENBQUM7SUFFRCxzQ0FBZ0IsR0FBaEI7UUFDRSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLEtBQWU7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLGlCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUEzQ1UsV0FBVztRQUh2QixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FJZ0IsV0FBSTtPQUhULFdBQVcsQ0E0Q3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQTVDRCxJQTRDQztBQTVDWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UsIFVSTFNlYXJjaFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgdGFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgaHR0cDogSHR0cFxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgbG9naW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgICAgXCJodHRwczovL2FwaS5zaG93c2l0ZS54eXovdXNlci9sb2dpblwiLFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgZW1haWw6ICdteXdvcmtidWNrZXRAZ21haWwuY29tJyxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6ICdwZW5ndWluJ1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHsgaGVhZGVyczogdGhpcy5nZXRDb21tb25IZWFkZXJzKCkgfVxyXG4gICAgKS5waXBlKFxyXG4gICAgICAgIG1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLFxyXG4gICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcnMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdXNlckdldERhdGEodG9rZW4pIHtcclxuICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICBwYXJhbXMuYXBwZW5kKFwidG9rZW5cIiwgdG9rZW4pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxyXG4gICAgICAnaHR0cHM6Ly9hcGkuc2hvd3NpdGUueHl6L3VzZXInLFxyXG4gICAgICB7aGVhZGVyczogdGhpcy5nZXRDb21tb25IZWFkZXJzKCksIHBhcmFtczogcGFyYW1zfVxyXG4gICAgKS5waXBlKFxyXG4gICAgICBtYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKSxcclxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRDb21tb25IZWFkZXJzKCkge1xyXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICB9XHJcbn1cclxuIl19