import {Page,NavController} from 'ionic-angular';

import {vendorEditProfile} from "../../edit_profile/vendor/edit_profile"

@Page({
    templateUrl:"build/pages/my_profile/vendor/index.html"
})

export class myProfileVendor{
    constructor(private nav: NavController){}
    vendorEditProfile(){
        this.nav.push(vendorEditProfile);
    }
}

