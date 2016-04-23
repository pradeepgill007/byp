var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('es6-shim');
var ionic_angular_1 = require('ionic-angular');
var ionic_native_1 = require('ionic-native');
var search_1 = require('./pages/search/search');
var login_1 = require('./pages/login/login');
var service_1 = require('./pages/vendor_services/service');
var my_profile_1 = require('./pages/my_profile/user/my_profile');
var my_profile_2 = require('./pages/my_profile/vendor/my_profile');
var MyApp = (function () {
    function MyApp(app, platform) {
        this.app = app;
        this.platform = platform;
        this.rootPage = search_1.Search;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Search', component: search_1.Search },
            { title: 'Login', component: login_1.login },
            { title: 'vendorService', component: service_1.vendorService },
            { title: 'User profile', component: my_profile_1.myProfileUser },
            { title: 'Vendor profile', component: my_profile_2.myProfileVendor }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            ionic_native_1.StatusBar.styleDefault();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        var nav = this.app.getComponent('nav');
        nav.setRoot(page.component);
    };
    MyApp = __decorate([
        ionic_angular_1.App({
            templateUrl: 'build/app.html',
            config: {} // http://ionicframework.com/docs/v2/api/config/Config/
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.IonicApp, ionic_angular_1.Platform])
    ], MyApp);
    return MyApp;
})();
