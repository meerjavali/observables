import { Component, OnInit } from '@angular/core';
import { BasicService } from './basic.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'observables';
  flag
  response;
  ngOnInit(): void {

    this.ser.value.subscribe(data=>{
      this.flag=data;
  })


  // basic promise implemented to understand async operation
  this.response = new Promise((resolve,reject)=>{

    setTimeout(()=>{
      resolve("the data came from response");
    },5000)
    
  })
  
  }
  constructor(private ser:BasicService){
     
  }
  


}
