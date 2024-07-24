import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 new="http://localhost:3000/users/"
 apponiment="http://localhost:3000/apponiments/"
  constructor(private hc:HttpClient) { }
  getdata(){
    return this.hc.get(this.new);
  }
  adduser(data:any){
    return this.hc.post(this.new,data);
  }


  // doctor apoiment
    addapponiment(data:any){
    return this.hc.post(this.apponiment,data);
  }
  fetchapponimentdetails(){
    return this.hc.get(this.apponiment);
  }
  cancleappo(id:number){
    return this.hc.delete(this.apponiment+id);
  }
  update(id:any,data:any){
    return this.hc.put(this.apponiment+id,data);
  }
  getsingleuser(id:any){
    return this.hc.get(this.apponiment+id);
  }

}
