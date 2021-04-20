import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'https://api.github.com';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }


 // for all user list 
  getallusers(): Observable<any> {
    return this.httpClient.get(baseURL+'/users');
  }

//serch user api

  searchByName(name:any): Observable<any> {
    return this.httpClient.get(`${baseURL}/search/users?name=${name}`);
  }
}