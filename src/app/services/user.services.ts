import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class MyApi {
    //baseUrl = "https://zoi.ir/api/shop/product/";
    baseUrl = 'https://cplanner-group1.herokuapp.com/';
    constructor(private httpClient:HttpClient){
        //this.BaseUrl = window['apiUrl'];
    }

    // sign in:
    login(item): Observable<any> {
        const headers = { 'content-type': 'application/json'}  
        //const body=JSON.stringify(person);
        console.log(item);
        return this.httpClient.post(this.baseUrl + 'account/login', item,{'headers':headers})
    }
    /*
    this._testApi.putBank(bank_api).subscribe
      (result => {
          console.log(result);
        
      }
    );
    */
    /////////// GET API ///////////
    
    

    /////////// PUT API ///////////

}
