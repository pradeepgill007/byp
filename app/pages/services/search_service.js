var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var searchService = (function () {
    function searchService(http) {
        this.http = http;
    }
    //getVendorList(){
    //    let response = this.http.get('./app/json/search.json');
    //    return response;
    //}
    searchService.prototype.getVendorList = function (keywords) {
        var response = this.http.get('http://104.131.117.45/api/v1/vendor/search?search_keyword=' + keywords);
        return response;
    };
    searchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], searchService);
    return searchService;
})();
exports.searchService = searchService;
