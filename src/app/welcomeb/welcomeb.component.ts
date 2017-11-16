import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { navMap, welcomeMap,transitArray,ReasonsForVisit,PatientType } from '../app.config';
import * as _ from "lodash";
import { MsShareService } from '../ms-share.service';

@Component({
  selector: 'app-welcomeb',
  templateUrl: './welcomeb.component.html',
  styleUrls: ['./welcomeb.component.css']
  
})

export class WelcomebComponent implements OnInit {
  pageName: string;
  pageObject: any;
  selectedOption: any;
  reasoncodes: string[] = [];
  Reasons = ReasonsForVisit;
  scorevaluesubscribed:string;
  //   new Reason("COPD", "COPD"),
  //   new Reason("Asthma", "AST"),
  //   new Reason("Dyspnea", "OT"),
  //   new Reason("Other", "OT")
  // ];
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private msShareService: MsShareService) {
   
    // activatedRoute
    // .params
    // .subscribe(param => {
    //   console.log(param);
    // });
   

  //  this.reasoncodes
  }

  ngOnInit() {
   
  // this.msShareService.filterOn("newscore").subscribe(
  //    (x :any)=>{
  //     this.scorevaluesubscribed = x.data.toString();
  //    },
  //    (error:any)=>{
  //      console.log(error);
  //    }
  // );

  // this.msShareService.newscore.subscribe((x:number)=>{
  //   this.scorevaluesubscribed = x.toString();
  // }

  // );
  }


  next() {
    debugger;
    
    this.reasoncodes =[];
   
    if(transitArray != undefined &&  transitArray.length > 0)
    {

      transitArray.splice(0,transitArray.length);
    }
  
                  

  this.Reasons
      .filter((o)=>{return o.checked})
      .forEach((element) => {
        var isexist = this.reasoncodes.find((o)=>{return o == element.code});
        if(!isexist)
            this.reasoncodes.push(element.code);
      });

      //purposely adding Other category in case they choose only COPD or AST
      // not adding at the start as the order will change
      if(this.reasoncodes.length >0)
      {
        var isexist = this.reasoncodes.find((o)=>{return o == 'OT'});
        if(!isexist)
            this.reasoncodes.push('OT');

      }
    
      this.reasoncodes.forEach(element =>{
        _
        .keys(navMap)
        .forEach(function (key) {
          let q = navMap[key];
          if(q.reason === element)
          {
            if(PatientType[0] == "FP" || PatientType[0] == "none")
            {
              if(!q.Audience)
              {
                transitArray.push(key);  // pushing all the questions for navigation
              }
            }
            else{ //for New Patient some extra questions
              transitArray.push(key);  // pushing all the questions for navigation
            }
           
          }
        });
      });
            
      if(this.reasoncodes.length >0)
      {
        this.router.navigate(['generic1',transitArray[0]]);
      }
   
  }

  previous() {
    this.router.navigate([welcomeMap['none']]);
  }
}
