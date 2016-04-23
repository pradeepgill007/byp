import {Page,NavController} from 'ionic-angular';

import {userEditProfile} from '../../edit_profile/user/edit_profile';

@Page({
    templateUrl:"build/pages/my_profile/user/index.html"
})

export class myProfileUser{
    constructor(private nav: NavController){}
    userEditProfile(){
        this.nav.push(userEditProfile);
    }
}

