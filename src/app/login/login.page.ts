import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { NavController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  user = {} as User
  constructor(private router:Router,private afAuth:AngularFireAuth) {

   }
   
  register(){
    this.router.navigate(['/register']);
  }

  ngOnInit() {
  }

 async login(user:User){
   try{

   
   const res = this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
   if(res){
     this.router.navigate(['/home'])
   }
   }
   catch(e){
     console.log(e);
   }
  }


}
