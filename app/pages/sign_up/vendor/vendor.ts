import {Page,NavController} from 'ionic-angular';
import {personalInfo} from '../vendor/persona_info';

@Page({
    templateUrl:'build/pages/sign_up/vendor/index.html'
})

export class vendorSignUp{
    constructor(private nav:NavController){}
    public email = '';
    public password = '';
    public confirm_password = '';

    vendorSignUp(){
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
        else if(!this.confirm_password){
            alert("confirm password field is required");
        }
        else if(this.password != this.confirm_password){
            alert("password not match with confirm password");
        }
        else{
            alert("Success");
            this.nav.push(personalInfo);
        }
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
}