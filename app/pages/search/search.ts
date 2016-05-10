import {Page,NavController} from 'ionic-angular';
import {searchService} from '../services/search_service';
import {searchDetail} from '../search_detail/search_detail';
import {Pipe, PipeTransform} from 'angular2/core';
import {Headers} from 'angular2/http';
import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Page({
    templateUrl: 'build/pages/search/search.html',
    providers: [searchService]
})
export class Search {
    public vendors;
    public searchKeyword: string = '';

    constructor(private search: searchService, private nav: NavController, private http:Http) {
    }

    getVendorList() {
        this.search.getVendorList(this.searchKeyword).subscribe(
            data => {
                this.vendors = data.json().response;
                console.log("response", this.vendors);
            },
            err => console.error(err),
            () => console.log('getRepos completed')
        )
    }


    ngAfterContentInit() {
        this.getVendorList();
    }

    goToDetail(vendor_identity) {
        console.log("ID", vendor_identity)
        this.nav.push(searchDetail, {vendor_identity: vendor_identity});
    }
}
