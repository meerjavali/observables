import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import { BasicService } from '../basic.service';
@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit, OnDestroy{
 
  firstSubscricption:Subscription;
  ngOnInit(): void {

    // this.firstSubscricption= interval(1000).subscribe(data=>{
    //   console.log("the value emmited ",data);
    // })


    const customIntervalObservable = new Observable(observer=>{
      let count=0
      setInterval(()=>{
        observer.next(count++);
        if(count == 3){
          observer.complete();
        }
        if(count >3){
          observer.error(new Error("it is a huge horrrible eroor happend the count is 3"));
        }

      },1000)
    })

    this.firstSubscricption= customIntervalObservable.pipe(filter((res:any)=>{
      return res > 0;
    }), map(res=>{
      return 'round '+res;
      
    })).subscribe(data=>{
      console.log(data);
    },
    (error)=>{
      console.log(error.message);
    },
    ()=>{
      console.log("completed!!!");
    }
  )
   
  }

  ngOnDestroy(): void {
    this.firstSubscricption.unsubscribe();
   
  }
  constructor(private ser:BasicService){

  }

  onActivate(){
  this.ser.action();
  }
}
