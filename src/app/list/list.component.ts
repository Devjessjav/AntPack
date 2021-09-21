import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users: any;
  email!: string;
  disabled = false;
  inputType = 'string';

  constructor(private ApiService: ApiService) { }

  ngOnInit() {
    this.getUsers();
  }
  // Llamada de Usuarios desde Api Service
  getUsers() {
    this.ApiService.getUsers().subscribe((data) => {
      console.log('users', data);
      this.users = data;
    });
  }

}
