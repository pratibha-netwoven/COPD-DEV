import { Component, OnInit, Input } from '@angular/core';
import { MsShareService } from '../ms-share.service';
// import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-scorebuttons',
  templateUrl: './scorebuttons.component.html',
  styleUrls: ['./scorebuttons.component.css']

})
export class ScorebuttonsComponent implements OnInit {
@Input() options:any[];
selectedscore:number;
 @Input() StartScoreDesc:string;
 @Input() EndscoreDesc:string;
 @Input() navMapPage:string;
 @Input() subqno:string;
 @Input() selectedscorestring:string;
//  @Input() callback: Function;
//newscore = new Subject<number>();

  constructor(private msShareService:MsShareService) { }

  ngOnInit() {
    debugger;
              // alert(this.selectedscore);
              // this.options.forEach(element => {
              //     if(element.checked==true){
              //       this.selectedscore = parseInt(element.score);
              //     }
              //   });
              // var s = this.callback();
              // this.msShareService.emit("selectedscore"+this.subqno,
              //                          {navMapPage:this.navMapPage,subqno:this.subqno,selectedscorestring:this.selectedscorestring}

              //           );
              // this.msShareService.filterOn("populatescoreQ1").subscribe(
              //   (x :any)=>{
              //   //  this.scorevaluesubscribed = x.data.toString();
              //   debugger;
              //   alert('populatescore');
              //   alert(x.data);
              //   },
              //   (error:any)=>{
              //     console.log(error);
              //   }
              // );


    this.selectedscore = this.options.find(x=>x.checked) == undefined?0:this.options.find(x=>x.checked).score;
        
  }

  click1(){
    this.selectedscore = 1;
     this.msShareService.emit("newscore",{navMapPage:this.navMapPage,subqno:this.subqno,selectedscore:1});
    
   // this.msShareService.newscore.next(10);
  }

  click2(){
    //this.newscore.next(2);
    this.selectedscore = 2;
    this.msShareService.emit("newscore",{navMapPage:this.navMapPage,subqno:this.subqno,selectedscore:2});
  }
  click3(){
    this.selectedscore = 3;
     this.msShareService.emit("newscore",{navMapPage:this.navMapPage,subqno:this.subqno,selectedscore:3});
   }
   click4(){
    this.selectedscore = 4;
     this.msShareService.emit("newscore",{navMapPage:this.navMapPage,subqno:this.subqno,selectedscore:4});
   }
   click5(){
    this.selectedscore = 5;
     this.msShareService.emit("newscore",{navMapPage:this.navMapPage,subqno:this.subqno,selectedscore:5});
   }
}
