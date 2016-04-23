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
var search_detail_service_1 = require('../services/search_detail_service');
var user_vendor_1 = require('../user_vendor/user_vendor');
var searchDetail = (function () {
    function searchDetail(searchDetailData, nav, navParams) {
        var _this = this;
        this.searchDetailData = searchDetailData;
        this.nav = nav;
        this.navParams = navParams;
        this.vendor_identity = navParams.get('vendor_identity');
        this.searchDetailData.getVendorDetail(this.vendor_identity).subscribe(function (data) {
            _this.vendorsDetail = data.json().response;
            console.log("Details vendors details:", _this.vendorsDetail);
        }, function (err) { return console.error(err); }, function () { return console.log('getRepos completed'); });
    }
    searchDetail.prototype.goToLogin = function () {
        this.nav.push(user_vendor_1.user_vendor);
    };
    searchDetail = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/search_detail/search_detail.html',
            providers: [search_detail_service_1.searchDetailService]
        }), 
        __metadata('design:paramtypes', [search_detail_service_1.searchDetailService, ionic_angular_1.NavController, ionic_angular_1.NavParams])
    ], searchDetail);
    return searchDetail;
})();
exports.searchDetail = searchDetail;
