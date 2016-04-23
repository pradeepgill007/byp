import 'es6-shim';
import {bootstrap}    from 'angular2/platform/browser';
import {App, IonicApp, Platform,Page,NavParams,ViewController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES,Location,ROUTER_PROVIDERS,ROUTER_BINDINGS} from 'angular2/router';

import {Search} from './pages/search/search';
import {login} from './pages/login/login';
import {vendorService} from './pages/vendor_services/service';

import {myProfileUser} from './pages/my_profile/user/my_profile';
import {myProfileVendor} from './pages/my_profile/vendor/my_profile';

@App({
    templateUrl: 'build/app.html',
    config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})


class MyApp {
    rootPage:any = Search;
    pages:Array<{title: string, component: any}>

    constructor(private app:IonicApp, private platform:Platform) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            {title: 'Search', component: Search},
            {title: 'Login', component: login},
            {title: 'vendorService', component: vendorService},
            {title: 'User profile', component: myProfileUser},
            {title: 'Vendor profile', component: myProfileVendor}
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        let nav = this.app.getComponent('nav');
        nav.setRoot(page.component);
    }
}
