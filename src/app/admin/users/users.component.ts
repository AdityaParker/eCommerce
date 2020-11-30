
import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { HttpClientService } from 'src/app/service/http-client.service';
import {ActivatedRoute,Router} from '@angular/router'
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userList:user[]=[];
  selectedUser:user;
  action:string;

  constructor(private dataService:HttpClientService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.dataService.getUsers()
    .subscribe(response=>this.handleResponse(response))

    this.activatedRoute.queryParams.subscribe(params=>{
      this.action=params['action'];
    });
    
  }

  //funciton to handle response form API
  handleResponse(response){


   let data=response.results;
    for(let item in data){
  const {name:{first},location:{city},email,picture:{medium}}=data[item];
  let usr=new user();
  usr.id=+item;
  usr.name=first;
  usr.location=city;
  usr.email=email;
  usr.image=medium;

  this.userList.push(usr);

}

console.log(this.userList[0]);

    
  }

  //add user
  addUser(){
    console.log("inside addUser()");
    
    this.selectedUser=new user();
    this.router.navigate(['admin', 'users'], { queryParams: { action: 'add' } });
  }

}
