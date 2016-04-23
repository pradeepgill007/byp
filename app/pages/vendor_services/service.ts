import {Page, NavController} from "ionic-angular";

import {serviceDetail} from "../service_detail/service_detail"

@Page({
    templateUrl:'build/pages/vendor_services/index.html'
})

export class vendorService{
    constructor(private nav:NavController){}
    serviceDetail(){
        this.nav.push(serviceDetail);
    }
}