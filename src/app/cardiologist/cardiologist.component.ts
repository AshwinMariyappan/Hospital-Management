import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cardiologist',
  templateUrl: './cardiologist.component.html',
  styleUrl: './cardiologist.component.css'
})
export class CardiologistComponent {
  constructor(public s:ServiceService){
  }
  patient:any={name:'',lastname:'',emial:'',phone:'',gender:'',doctorname:'Dr. John Doe',spl:'Cardiologiy',city:''}
  loaad=false;
  submit(){
    setTimeout(()=>{
      this.loaad=true;
      this.s.addapponiment(this.patient).subscribe();
    },1000)


    console.log(this.patient)
  }

}
