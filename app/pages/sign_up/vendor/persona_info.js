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
var calender_1 = require('../../calender/calender');
var personalInfo = (function () {
    function personalInfo(nav) {
        this.nav = nav;
        this.name = '';
        this.last_name = '';
        this.tel = '';
    }
    personalInfo.prototype.personalInfo = function () {
        if (!this.name && !this.tel && !this.last_name) {
            alert("All fields are required");
        }
        else if (!this.name) {
            alert("Name field is required");
        }
        else if (!this.last_name) {
            alert("Last name field is required");
        }
        else if (!this.tel) {
            alert("Mobile number field is required");
        }
        else {
            alert("Success");
            this.nav.push(calender_1.calender);
        }
    };
    personalInfo = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/sign_up/vendor/personal_info.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController])
    ], personalInfo);
    return personalInfo;
})();
exports.personalInfo = personalInfo;
