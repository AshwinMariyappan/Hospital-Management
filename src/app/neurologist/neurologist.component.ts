import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-neurologist',
  templateUrl: './neurologist.component.html',
  styleUrl: './neurologist.component.css'
})
export class NeurologistComponent {
  constructor(public s:ServiceService){

  }


  patient:any={name:'',lastname:'',emial:'',phone:'',gender:'',doctorname:'Dr. Jane Smith',spl:'Neurologist',city:''}
  submit(){

    this.s.addapponiment(this.patient).subscribe();
    console.log(this.patient)
  }

}
