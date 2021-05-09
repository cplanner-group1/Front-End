import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class MyApi {
    //baseUrl = "https://zoi.ir/api/shop/product/";
    BaseUrl = 'https://cplanner-group1.herokuapp.com/';
    constructor(private httpClient:HttpClient){
        //this.BaseUrl = window['apiUrl'];
    }


    /////////// GET API ///////////
    
    

    /////////// PUT API ///////////

}
