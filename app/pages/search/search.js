var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_angular_1 = require('ionic-angular');
var search_service_1 = require('../services/search_service');
var search_detail_1 = require('../search_detail/search_detail');
var http_1 = require('angular2/http');
var Search = (function () {
    function Search(search, nav, http) {
        this.search = search;
        this.nav = nav;
        this.http = http;
        this.searchKeyword = '';
    }
    Search.prototype.getVendorList = function () {
        var _this = this;
        this.search.getVendorList(this.searchKeyword).subscribe(function (data) {
            _this.vendors = data.json().response;
            console.log("response", _this.vendors);
        }, function (err) { return console.error(err); }, function () { return console.log('getRepos completed'); });
    };
    Search.prototype.ngAfterContentInit = function () {
        this.getVendorList();
    };
    Search.prototype.goToDetail = function (vendor_identity) {
        console.log("ID", vendor_identity);
        this.nav.push(search_detail_1.searchDetail, { vendor_identity: vendor_identity });
    };
    Search = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/search/search.html',
            providers: [search_service_1.searchService]
        }), 
        __metadata('design:paramtypes', [search_service_1.searchService, ionic_angular_1.NavController, http_1.Http])
    ], Search);
    return Search;
})();
exports.Search = Search;
