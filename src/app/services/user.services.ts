import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'jalali-moment';


@Injectable()
export class MyApi {
    //baseUrl = "https://zoi.ir/api/shop/product/";
    baseUrl = 'http://cplanner-group1.herokuapp.com/';
    authUrl = this.baseUrl + 'account/';
    taskUrl = this.baseUrl + 'task/';
    settingUrl = this.baseUrl + 'account/student-info/';
    chartsUrl = this.baseUrl + 'chart/';
    
    constructor(private httpClient:HttpClient){
        //this.BaseUrl = window['apiUrl'];
    }

    getToken(){
        return localStorage.getItem('token');
    }
    loggedIn(): boolean{
        let enterDate = localStorage.getItem('added');
        let nowDate = moment();
        let enterDateObject = moment(enterDate);
        //console.log(nowDate);
        //console.log(enterDateObject);
        let enterDateWithExp  = enterDateObject.add(1,'days');

        let diffDate = enterDateWithExp.diff(nowDate, 'seconds');


        return (!!localStorage.getItem('token')) && (diffDate>=0) ;
    }
    

    // sign in:
    login(user:any): Observable<any> {
        //console.log(user);
        return this.httpClient.post(this.authUrl + 'login/', user).pipe(
            map((response:any)=>{
                //console.log(response);
                const user = response;
                if(user){
                    console.log(moment());
                    console.log(moment().format());
                    localStorage.setItem('added',moment().format());
                    localStorage.setItem('token',user.tokens.access);
                    localStorage.setItem('refresh',user.tokens.refresh);
                }
            })
        )
    }
    logout(): Observable<any> {
        //console.log(user);
        let refresh = localStorage.getItem('refresh');
        let enterDate = localStorage.getItem('added');
        let nowDate = moment();
        let enterDateObject = moment(enterDate);
        //console.log(nowDate);
        //console.log(enterDateObject);
        let enterDateWithExp  = enterDateObject.add(1,'days');

        let diffDate = enterDateWithExp.diff(nowDate, 'seconds');
        if(diffDate>=0){
            console.log(diffDate);
            //console.log(refresh);
            const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
            return this.httpClient.post(this.authUrl + 'logout/',{refresh: refresh }, { headers: headers }).pipe(
                map((response:any)=>{
                    //console.log(response);
                    localStorage.removeItem('token');
                    localStorage.removeItem('refresh');
                    localStorage.removeItem('added');
                })
            )
        }
        
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
        return this.httpClient.get(this.taskUrl + 'add/',{ headers: headers })   
    }
    editTask(items): Observable<any>{
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.post(this.taskUrl + 'edit/', items,{ headers: headers })   
    }
    dragTask(item): Observable<any>{
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.post(this.taskUrl + 'dragdrop/', item,{ headers: headers })   
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

    addUniversityInfo(item): Observable<any>{
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.post(this.chartsUrl, item, { headers: headers })   
    }

    // CHART:
    getChart(): Observable<any> {    
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.get(this.chartsUrl, { headers: headers });
    }
    deleteChart(items): Observable<any>{
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.post(this.chartsUrl + 'delete/', items,{ headers: headers })   
    }
    addChart(): Observable<any>{
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.get(this.chartsUrl + 'add/',{ headers: headers })   
    }
    editChart(items): Observable<any>{
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.post(this.chartsUrl + 'edit/', items,{ headers: headers })   
    }
    dragChart(item): Observable<any>{
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.post(this.chartsUrl + 'dragdrop/', item,{ headers: headers })   
    }





    //COURSE SELECTION:
    getTimeTable(): Observable<any> {    
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.get(this.chartsUrl + 'timetable/', { headers: headers });
    }
    postTimeTable(timetable): Observable<any>{
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.post(this.chartsUrl + 'timetable/', timetable,{ headers: headers })   
    }

}



