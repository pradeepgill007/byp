import {Page,NavController} from 'ionic-angular';
import {calender} from '../calender/calender';
import {signUp} from '../sign_up/user/user';
import {vendorSignUp} from '../sign_up/vendor/vendor';


@Page({
    templateUrl:'build/pages/login/login.html',
})

export class login{
    public final_user_type;
    public hidden_value;
    public email = '';
    public password = '';
    constructor(private nav: NavController){
        this.final_user_type = localStorage.getItem('user_type');
    }

    login(){
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

    signUp(){
        this.nav.push(signUp);
    }

    vendorSignUp(){
        this.nav.push(vendorSignUp);
    }

}