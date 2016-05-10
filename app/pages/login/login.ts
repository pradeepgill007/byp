//import {Injectable} from 'angular2/core';
import {Page,NavController} from 'ionic-angular';
import {calender} from '../calender/calender';
import {signUp} from '../sign_up/user/user';
import {vendorSignUp} from '../sign_up/vendor/vendor';
import {Request} from "angular2/http";
import {Http, HTTP_PROVIDERS, Headers, RequestOptions} from 'angular2/http';

//@Injectable()
@Page({
    templateUrl: 'build/pages/login/login.html',
})

export class login {
    final_user_type:string;
    hidden_value:string;
    email:string = '';
    password:string = '';

    constructor(public http:Http, private nav:NavController) {
        this.final_user_type = localStorage.getItem('user_type');
    }

    login() {
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

        if(!this.email && !this.password){
            alert("All fields are required");
        }
        else if(!this.email){
            alert("Email field is required");
        }
        else if(!this.validateEmail(this.email)){
            alert("Please enter a valid emailId");
        }
        else if(!this.password){
            alert("Password field is required");
        }
        else{
            alert("Login Success");
            this.nav.push(calender);
        }
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    signUp() {
        this.nav.push(signUp);
    }

    vendorSignUp() {
        this.nav.push(vendorSignUp);
    }

}