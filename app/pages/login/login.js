var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import {Injectable} from 'angular2/core';
var ionic_angular_1 = require('ionic-angular');
var calender_1 = require('../calender/calender');
var user_1 = require('../sign_up/user/user');
var vendor_1 = require('../sign_up/vendor/vendor');
var http_1 = require('angular2/http');
//@Injectable()
var login = (function () {
    function login(http, nav) {
        this.http = http;
        this.nav = nav;
        this.email = '';
        this.password = '';
        this.final_user_type = localStorage.getItem('user_type');
    }
    login.prototype.login = function () {
        //let body = {
        //    "username":"rahul@headerlabs.com",
        //    "password":"123456",
        //    "device_token":"sadfasdasdkfjsda",
        //    "platform":"Hywords",
        //    "version":"dd",
        //    "grant_type":"password",
        //    "client_id":"test_client",
        //    "client_secret":"test_client",
        //    "user_type":"customer"
        //};
        //console.log("Body :", body);
        //console.log("Body",body);
        //let headers = new Headers({
        //    'Content-Type': 'application/x-www-form-urlencoded'
        //});
        //console.log("headers :",headers);
        //let options = new RequestOptions({headers: headers});
        //console.log("Options :",options);
        //return this.http.post('http://192.168.1.42:3001/heros.json', body, options);
        //let headers = new Headers({'Content-Type': 'application/json'});
        //headers.append('Accept', 'application/json');
        //headers.append('Content-Type', 'application/json');
        //let options = new RequestOptions({headers: headers});
        //this.http.post('http://104.131.117.45/api/v1/login', JSON.stringify(body), options)
        //    .subscribe(data => {
        //            console.log("response", JSON.stringify(data));
        //        },
        //        err => console.error(err),
        //        () => console.log('getRepos completed')
        //    );
        //console.log("inside login function");
        //let body = JSON.stringify({hero: {name: "test123456789"}});
        //let headers = new Headers({'Content-Type': 'application/json'});
        //let options = new RequestOptions({headers: headers});
        //let response = this.http.post('http://192.168.1.42:3001/heros.json', body, options);
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
        else {
            alert("Login Success");
            this.nav.push(calender_1.calender);
        }
    };
    login.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    login.prototype.signUp = function () {
        this.nav.push(user_1.signUp);
    };
    login.prototype.vendorSignUp = function () {
        this.nav.push(vendor_1.vendorSignUp);
    };
    login = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/login/login.html',
        }), 
        __metadata('design:paramtypes', [http_1.Http, ionic_angular_1.NavController])
    ], login);
    return login;
})();
exports.login = login;
