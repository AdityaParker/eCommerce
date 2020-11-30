import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { user } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  apiURL='https://randomuser.me/api/?results=5'

  constructor(private http:HttpClient) { }
 getUsers(){
   return this.http.get<user[]>(this.apiURL)
 }
}
