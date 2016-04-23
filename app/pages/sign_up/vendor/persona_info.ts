import {Page,NavController} from 'ionic-angular';
import {calender} from '../../calender/calender'

@Page({
    templateUrl:'build/pages/sign_up/vendor/personal_info.html'
})

export class personalInfo{
    constructor(private nav:NavController){}
    public name = '';
    public last_name = '';
    public tel = '';
    personalInfo(){
        if(!this.name && !this.tel && !this.last_name){
            alert("All fields are required");
        }
        else if(!this.name){
            alert("Name field is required");
        }
        else if(!this.last_name){
            alert("Last name field is required");
        }
        else if(!this.tel){
            alert("Mobile number field is required");
        }
        else{
            alert("Success");
            this.nav.push(calender);
        }
    }
}