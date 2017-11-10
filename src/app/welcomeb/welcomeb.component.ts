import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { navMap, Reason, welcomeMap,transitArray,ReasonsForVisit } from '../app.config';
import * as _ from "lodash";

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
  Reasons: Reason[] = ReasonsForVisit;
  //   new Reason("COPD", "COPD"),
  //   new Reason("Asthma", "AST"),
  //   new Reason("Dyspnea", "OT"),
  //   new Reason("Other", "OT")
  // ];
  constructor(private router: Router,private activatedRoute: ActivatedRoute) {
    debugger;
    // activatedRoute
    // .params
    // .subscribe(param => {
    //   console.log(param);
    // });
   

  //  this.reasoncodes
  }

  ngOnInit() {
   
  }


  next() {
    debugger;
    this.reasoncodes =[];
   
    if(transitArray != undefined &&  transitArray.length > 0)
    {

      transitArray.splice(0,transitArray.length);
    }
  

    // var checkedcodes = _.filter(this.ReasonsForVisit, function (o) { return o.checked; });
    // _.forEach(checkedcodes, (value, key) =>{

    //  this.reasoncodes.push(value);
      //var isExist = _.find(this.reasoncodes, function(o) { return o == value.code; });
      // if(this.reasoncodes === null || this.reasoncodes === undefined)
      // {
      //   this.reasoncodes.push(value);
      // }
      // else if(!this.reasoncodes.includes(value.code))
      //{
      //  this.reasoncodes.push(value);
     // }
   // });

            // _
            // .keys(navMap)
            // .forEach(function (key) {
            //   let q = navMap[key];
            // });
                  

                this.Reasons
                    .filter((o)=>{return o.checked})
                    .forEach((element) => {
                      var isexist = this.reasoncodes.find((o)=>{return o == element.code});
                      if(!isexist)
                          this.reasoncodes.push(element.code);
                    });

                    //purposely adding Other category in case they choose only COPD or AST
                    // not adding at the start as the order will change
                    var isexist = this.reasoncodes.find((o)=>{return o == 'OT'});
                    if(!isexist)
                        this.reasoncodes.push('OT');

                    this.reasoncodes.forEach(element =>{
                      _
                      .keys(navMap)
                      .forEach(function (key) {
                        let q = navMap[key];
                        if(q.reason === element)
                        {
                          transitArray.push(key);  // pushing all the questions for navigation
                        }
                      });
                    });
                          
    this.router.navigate(['generic1',transitArray[0]]);
  }

  previous() {
    this.router.navigate([welcomeMap['none']]);
  }
}
