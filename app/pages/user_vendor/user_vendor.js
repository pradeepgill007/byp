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
var login_1 = require('../login/login');
var user_vendor = (function () {
    function user_vendor(nav) {
        this.nav = nav;
    }
    user_vendor.prototype.continueAs = function (user_type) {
        localStorage.setItem("user_type", user_type);
        this.nav.push(login_1.login);
    };
    user_vendor = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/user_vendor/index.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController])
    ], user_vendor);
    return user_vendor;
})();
exports.user_vendor = user_vendor;
