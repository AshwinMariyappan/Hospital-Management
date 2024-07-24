import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
emailpass:any={email:'',pass:''};
idpass:any=[];
loaad=false;
 constructor(public rt:Router,public s:ServiceService){
  console.log("construcor")
  this.fetchdata()
 }
 ngOnInit(){
  this.fetchdata();
 }


 fetchdata(){
  this.s.getdata().subscribe(res=>{this.idpass=res;});
  console.log(this.idpass)
 }
  submit(){
    this.loaad=true;
    setTimeout(()=>{this.loaad=false;
      for(let i=0;i<this.idpass.length;i++){
        if(this.idpass[i].email===this.emailpass.email&&this.idpass[i].pass===this.emailpass.pass){
          a=true;
          this.rt.navigate(['home']);
          alert("login successfull");
          break;
        }
        else{
          a=false;
        }
      }

      if(a){
      }
      else{
        alert("login unuccessfull try again");
      }

    },100);
    let a=false;


  }
  endpoint="http://localhost:3000/users/";


  newaccount:any={username:'',email:'',pass:''};
  new(){
    console.log(this.newaccount)
    this.s.adduser(this.newaccount).subscribe();
    alert("account created sucessfull")
    this.rt.navigate(['login'])
  }

}
