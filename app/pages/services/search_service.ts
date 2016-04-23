import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

@Injectable()
export class searchService{
    constructor(private http: Http) {
    }

    //getVendorList(){
    //    let response = this.http.get('./app/json/search.json');
    //    return response;
    //}

    getVendorList(keywords){
            let response = this.http.get('http://104.131.117.45/api/v1/vendor/search?search_keyword='+keywords);
            return response;
    }
}