import { Component } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {
list:any=[];
constructor(public s:ServiceService,public act:ActivatedRoute){
  this.fetchuser();
}
loading=false;
appoinment:any={name:'',email:'',phone:'',date:'',message:''};
load(){


}
  fixapponiment(apponment:NgForm){
    this.loading=true;
    this.s.addapponiment(this.appoinment).subscribe();
    setTimeout(() => {
      this.loading=false;
      alert("added successfully")
      apponment.resetForm();
    },1000);
  }
  fetchuser(){
    this.s.fetchapponimentdetails().subscribe(res=>{this.list=res;});
    console.log(this.list)
  }
  suumma:any=""
  function(){
    for(let i=0;i<this.list.length;i++){
      if(this.list[i].email==="ashwinvijay633@gmail.com"){
        this.suumma=this.list[i].email;
      }
      console.log(this.list[i].email);
    }
  }

//cancl apponiment
cancleappoiment(eid:number){
  if(confirm("Are u sure do you want to cancle appoiment?")){
    this.s.cancleappo(eid).subscribe(res=>{this.fetchuser()}
    )
  }
}
//edit vlaues
editdata:any=[];
edit(i:number){
  this.s.getsingleuser(i).subscribe(res=>{this.editdata=res;});
}
//modifidata
update(id:any,data:any){
  this.s.update(id,data).subscribe();
  alert("updated successfully")

}
}
console.log("hell0");
