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
var persona_info_1 = require('../vendor/persona_info');
var vendorSignUp = (function () {
    function vendorSignUp(nav) {
        this.nav = nav;
        this.email = '';
        this.password = '';
        this.confirm_password = '';
    }
    vendorSignUp.prototype.vendorSignUp = function () {
        if (!this.email && !this.password) {
            alert("All fields are required");
        }
        else if (!this.email) {
            alert("Email field is required");
        }
        else if (!this.validateEmail(this.email)) {
            alert("Please enter a valid emailId");
        }
        else if (!this.password) {
            alert("Password field is required");
        }
        else if (!this.confirm_password) {
            alert("confirm password field is required");
        }
        else if (this.password != this.confirm_password) {
            alert("password not match with confirm password");
        }
        else {
            alert("Success");
            this.nav.push(persona_info_1.personalInfo);
        }
    };
    vendorSignUp.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    vendorSignUp = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/sign_up/vendor/index.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController])
    ], vendorSignUp);
    return vendorSignUp;
})();
exports.vendorSignUp = vendorSignUp;
