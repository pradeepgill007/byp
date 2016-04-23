import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

@Injectable()
export class searchDetailService{
    constructor(private http: Http) {
    }
    //getVendorDetail(){
    //    let response = this.http.get('build/json/search_detail.json');
    //    return response;
    //}

    getVendorDetail(vendro_id){
        let response = this.http.get('http://104.131.117.45/api/v1/vendor/details/'+vendro_id);
        return response;
    }

}