import {Page,Modal,NavController,ViewController} from "ionic-angular";

@Page({
    templateUrl: 'build/pages/service_detail/add_service.html'
})
export class ModalsContentPage{
    public viewCtrl;
    constructor(viewCtrl: ViewController) {
        this.viewCtrl = viewCtrl;
    }
    close() {
        this.viewCtrl.dismiss();
    }
}


@Page({
    templateUrl:"build/pages/service_detail/index.html"
})

export class serviceDetail{
    constructor(public nav: NavController){
        this.nav = nav;
    }
    showModal() {
        let modal = Modal.create(ModalsContentPage);
        this.nav.present(modal)
    }
}
