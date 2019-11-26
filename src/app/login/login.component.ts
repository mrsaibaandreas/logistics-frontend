import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
@Input()
user1 : string;
@Input()
pass : string;
  user={
  username : "admin",
  password : "admin"
}
login(user1, pass)
{
  if(this.user.username==user1&&this.user.password==pass)
    window.alert("Succesful");
}
  constructor() { }

  ngOnInit() {
  }

}
