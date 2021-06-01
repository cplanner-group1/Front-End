import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class MyApi {
    //baseUrl = "https://zoi.ir/api/shop/product/";
    baseUrl = 'http://cplanner-group1.herokuapp.com/';
    authUrl = this.baseUrl + 'account/';
    taskUrl = this.baseUrl + 'task/';
    settingUrl = this.baseUrl + 'account/student-info/';
    
    constructor(private httpClient:HttpClient){
        //this.BaseUrl = window['apiUrl'];
    }

    getToken(){
        return localStorage.getItem('token');
    }
    loggedIn(): boolean{
        return !!localStorage.getItem('token');
    }
    

    // sign in:
    login(user:any): Observable<any> {
        //console.log(user);
        return this.httpClient.post(this.authUrl + 'login/', user).pipe(
            map((response:any)=>{
                //console.log(response);
                const user = response;
                if(user){
                    localStorage.setItem('token',user.tokens.access);
                    localStorage.setItem('refresh',user.tokens.refresh);
                }
            })
        )
    }
    logout(): Observable<any> {
        //console.log(user);
        let refresh = localStorage.getItem('refresh');
        console.log(refresh);
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.post(this.authUrl + 'logout/',{refresh: refresh }, { headers: headers }).pipe(
            map((response:any)=>{
                //console.log(response);
                localStorage.removeItem('token');
                localStorage.removeItem('refresh');
            })
        )
    }

    //http://cplanner-group1.herokuapp.com/account/register/
    register(user:any){
        return this.httpClient.post(this.authUrl + 'register/', user).pipe(
            map((response:any)=>{
                console.log(response);
                
            })
        )
    }



    // TASK MANAGER:
    getTask(): Observable<any> {    
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.get(this.taskUrl, { headers: headers });
    }
    deleteTask(items): Observable<any>{
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.post(this.taskUrl + 'delete/', items,{ headers: headers })   
    }
    addTask(): Observable<any>{
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.post(this.taskUrl, {},{ headers: headers })   
    }
    editTask(items): Observable<any>{
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.post(this.taskUrl + 'delete/', items,{ headers: headers })   
    }
    dragTask(item): Observable<any>{
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.post(this.taskUrl + 'delete/', item,{ headers: headers })   
    }

    //SETTINGS:

    getSettings(): Observable<any> {    
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.get(this.settingUrl, { headers: headers });
    }

    addSettings(item): Observable<any>{
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.post(this.settingUrl, item, { headers: headers })   
    }

}
