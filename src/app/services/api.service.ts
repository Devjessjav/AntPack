import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUsers!: string;

  constructor(private http: HttpClient) {

   }

   getUsers(){
    this.apiUsers = `${environment.apiUrl}`;
    const usersList = this.http.get(this.apiUsers);
    return usersList;
  }
}
