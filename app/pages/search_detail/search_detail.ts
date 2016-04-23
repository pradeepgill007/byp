import {Page,NavParams,NavController} from 'ionic-angular';
import {searchDetailService} from '../services/search_detail_service';
import {user_vendor} from '../user_vendor/user_vendor';

@Page({
    templateUrl: 'build/pages/search_detail/search_detail.html',
    providers: [searchDetailService]
})
export class searchDetail {
    public vendorsDetail;
    public vendor_identity;
    constructor(private searchDetailData: searchDetailService,
                private nav: NavController, private navParams: NavParams) {
        this.vendor_identity = navParams.get('vendor_identity');
        this.searchDetailData.getVendorDetail(this.vendor_identity).subscribe(
            data => {
                this.vendorsDetail = data.json().response;
                console.log("Details vendors details:",this.vendorsDetail);
            },
            err => console.error(err),
            () => console.log('getRepos completed')
        )
    }
    goToLogin(){
        this.nav.push(user_vendor);
    }
}

