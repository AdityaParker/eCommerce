import { Component, Input, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  @Input()
  user:user;
  constructor() { }

  ngOnInit(): void {
  }

}
