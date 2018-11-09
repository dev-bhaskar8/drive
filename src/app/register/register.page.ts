import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth"

import { User } from '../models/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user ={}as User;
  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  async register(user: User){
    try{
    this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
    console.log(user);
    }catch(e)
    {
      console.log(e);
    }
  }

}
