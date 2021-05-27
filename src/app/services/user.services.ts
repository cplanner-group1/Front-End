import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class MyApi {
    //baseUrl = "https://zoi.ir/api/shop/product/";
    baseUrl = 'http://cplanner-group1.herokuapp.com/';
    authUrl = this.baseUrl + 'account/';
    
    constructor(private httpClient:HttpClient){
        //this.BaseUrl = window['apiUrl'];
    }

    getToken(){
        return localStorage.getItem('token');
    }
    

    // sign in:
    login(user:any): Observable<any> {
        //const headers = { 'content-type': 'application/json'}  
        //const body=JSON.stringify(person);
        //return this.httpClient.post(this.authUrl + 'login/', user/*,{'headers':headers}*/);
        console.log(user);
        return this.httpClient.post(this.authUrl + 'login/', user).pipe(
            map((response:any)=>{
                //console.log(response);
                const user = response;
                if(user){
                    localStorage.setItem('token',user.tokens.access);
                }
            })
        )
    }

    //http://cplanner-group1.herokuapp.com/account/register/
    register(user:any){
        //console.log(user);

        //let headers = new HttpHeaders({});

        return this.httpClient.post(this.authUrl + 'register/', user).pipe(
            map((response:any)=>{
                console.log(response);
                /*const user = response;
                if(user){
                    localStorage.setItem('token',user.token);
                }*/
            })
        )
    }


    getTask(): Observable<any> {    
        //console.log(this.getToken());
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.get(this.baseUrl + 'task/', { headers: headers });
    }
    /*getTask = (route: string) => {
        return from(
          this._authService.getAccessToken()
          .then(token => {
            const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
            return this.http.get(this.createCompleteRoute(route, this.envUrl.urlAddress), { headers: headers }).toPromise();
          })
        );
    }*/
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
