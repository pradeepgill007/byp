import {Page,NavController} from 'ionic-angular';
import {login} from '../login/login'


@Page({
    templateUrl:'build/pages/user_vendor/index.html'
})

export class user_vendor{
    constructor(private nav:NavController){}
    continueAs(user_type){
        localStorage.setItem("user_type",user_type);
        this.nav.push(login);
    }
}