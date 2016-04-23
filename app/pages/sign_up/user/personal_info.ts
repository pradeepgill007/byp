import {Page,NavController} from 'ionic-angular';
import {calender} from '../../calender/calender';

@Page({
    templateUrl:'build/pages/sign_up/user/personal_info.html'
})

export class personalInfo{
    constructor(private nav:NavController){}
    public name = '';
    public tel = '';
    public street1 = '';
    public street2 = '';
    public zip = '';
    public city = '';
    personalInfo(){
        if(!this.name && !this.tel && !this.tel && !this.street1 && !this.zip && !this.city){
            alert("All fields are required");
        }
        else if(!this.name){
            alert("Name field is required");
        }
        else if(!this.tel){
            alert("Mobile number field is required");
        }
        else if(!this.street1){
            alert("street1 field is required");
        }
        else if(!this.zip){
            alert("Zip field is required");
        }
        else if(!this.city){
            alert("City field is required");
        }
        else{
            alert("Success");
            this.nav.push(calender);
        }
    }
}