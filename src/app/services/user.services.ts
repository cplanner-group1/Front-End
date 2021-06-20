import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'jalali-moment';


@Injectable()
export class MyApi {
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


        return (!!localStorage.getItem('token')) && (diffDate>=0) && (!!localStorage.getItem('added'));
    }
    

    // sign in:
    login(user:any): Observable<any> {
        //console.log(user);
        return this.httpClient.post(this.authUrl + 'login/', user);/*.pipe(
            map((response:any)=>{
                //console.log(response);
                
            })
        )*/
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
            const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
            return this.httpClient.post(this.authUrl + 'logout/',{refresh: refresh }, { headers: headers }).pipe(
                map((response:any)=>{
                    localStorage.removeItem('token');
                    localStorage.removeItem('refresh');
                    localStorage.removeItem('added');
                })
            )
        }

        
    }

    //http://cplanner-group1.herokuapp.com/account/register/
    register(user:any){
        return this.httpClient.post(this.authUrl + 'register/', user);
        
    }


    getDashboard():Observable<any>{
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.get(this.taskUrl + 'dashboard/', { headers: headers });
    }


    // TASK MANAGER:
    getTask(now): Observable<any> {    
        let params = {};
        params['now'] = now;

        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.get(this.taskUrl, { headers: headers , params});
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
    getCourses(): Observable<any> {    
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.get(this.chartsUrl+ 'ct/', { headers: headers });
    }
    getCoursesOrdered(): Observable<any> {    
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.get(this.chartsUrl+ 'ct/order/alpha/', { headers: headers });
    }
    deleteChart(items): Observable<any>{
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.post(this.chartsUrl + 'ct/delete/', items,{ headers: headers })   
    }
    addChart(): Observable<any>{
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.get(this.chartsUrl + 'ct/add/',{ headers: headers })   
    }
    editChart(items): Observable<any>{
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.post(this.chartsUrl + 'ct/edit/', items,{ headers: headers })   
    }
    dragChart(item): Observable<any>{
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.post(this.chartsUrl + 'ct/dragdrop/', item,{ headers: headers })   
    }
    searchChartUnif(university,field): Observable<any>{
        //let params = new HttpParams().set("amount",amount);//1--> id
        let params = {};
        params['university'] = university;
        params['field'] = field;
        
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.get(this.chartsUrl+ 'search/unif/', { headers: headers , params});
    }
    searchChartTitle(title): Observable<any>{
        //let params = new HttpParams().set("amount",amount);//1--> id
        let params = {};
        params['title'] = title;
        
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.get(this.chartsUrl+ 'search/title/', { headers: headers , params});
    }
    selectChart(id):Observable<any>{
        //let params = new HttpParams().set("amount",amount);//1--> id
        let params = {};
        params['id'] = id;

        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.get(this.chartsUrl+ 'add-chart-ct/', { headers: headers , params});
    }
    publishChart(title):Observable<any>{
        let params = {};
        params['title'] = title;

        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.get(this.chartsUrl+ 'add-ct-chart/', { headers: headers , params});
    }
    /*
    requestDeposit(amount: string):Observable<any>{
        let params1 = new HttpParams().set("amount",amount);//1--> id
        return this.httpClient.get<any>(this.BaseUrl+"market/cash/deposit", {params:params1} );
    }
    */




    //COURSE SELECTION:
    getSemesterCourse():Observable<any>{
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.get(this.chartsUrl + 'sc/', { headers: headers });
    }
    addSemesterCourse(item):Observable<any>{
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.post(this.chartsUrl + 'sc/', item,{ headers: headers })
    }
    editSemesterCourse(item):Observable<any>{
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.post(this.chartsUrl + 'sc/edit/', item,{ headers: headers })
    }
    deleteSemesterCourse(id):Observable<any>{
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.post(this.chartsUrl + 'sc/delete/', id,{ headers: headers })
    }
    dragDropSemesterCourse(id):Observable<any>{
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.post(this.chartsUrl + 'sc/dragdrop/', id,{ headers: headers })
    }

    getTimeTable(): Observable<any> {    
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.get(this.chartsUrl + 'timetable/', { headers: headers });
    }
    postTimeTable(timetable): Observable<any>{
        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.post(this.chartsUrl + 'timetable/', timetable,{ headers: headers });   
    }
    suggestionCourse(text): Observable<any>{
        let params = {};
        params['text'] = text;

        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.get(this.chartsUrl+ 'sc/autocomplete/', { headers: headers , params});
    }
    suggestionPrerequisites(text): Observable<any>{
        let params = {};
        params['text'] = text;

        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.get(this.chartsUrl+ 'course/suggest-pre/', { headers: headers , params});
    }
    suggestionCourseChart(text): Observable<any>{
        let params = {};
        params['text'] = text;

        const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.getToken());
        return this.httpClient.get(this.chartsUrl+ 'course/suggest/', { headers: headers , params});
    }
}



