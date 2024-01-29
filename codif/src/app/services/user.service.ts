import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user_model';
import {  url_base } from './api_url_service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

 login(body:any){
  return this.http.post('http://localhost/api/auth/login', body)
 }
}
