import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { navMap,Screen } from '../app.config';
import * as _ from "lodash";
import { MsShareService } from '../ms-share.service';

@Component({ selector: 'app-generic1', templateUrl: './generic1.component.html', styleUrls: ['./generic1.component.css'] })

export class Generic1Component implements OnInit {
  pageName: string;
  pageObject: any;
  selectedOption: any;


  constructor(private router: Router, 
              private activatedRoute: ActivatedRoute, 
              private msShareService:MsShareService) {
    debugger;
    this.tweakNavMap();
    activatedRoute
      .params
      .subscribe(param => {
        param.pageName && (this.pageName = param.pageName);
        this.pageObject = navMap[this.pageName];
        this.pageObject.isMultiOptions && this.prepareMultiOptions();
        this.showPage();
      });
  }
  tweakNavMap() {
    debugger;
    _
      .keys(navMap)
      .forEach(function (key) {
        let q = navMap[key];
        if (q.options) {
          q.type = 'options';
        } else if (q.header) {
          q.type = 'header'
        } else if (q.section) {
          q.type = 'section'
        } else if (q.scale) {
          q.type = 'scale'
        } else {
          q.type = 'table'
        }
      });
  }
  showPage() {
    let options = navMap[this.pageName].options;
    let scale = navMap[this.pageName].scale;
    let sub = this.pageObject.sub;
    let commonOptions = this.pageObject.commonOptions;
    sub && commonOptions && sub.forEach(x => {
      let toBeCloned = Object.assign([], x.options, commonOptions);
      if ((!x.options) || (x.options.length == 0)) {
        x.options = _.cloneDeep(toBeCloned);
      }
    });    
    this.selectedOption = options && options.find(x => x.checked);    
    if (scale)
    { 
      this.selectedOption = scale && scale.find(x => x.checked); 
    }
  }

  ngOnInit() {
    this.msShareService.filterOn("newscore").subscribe(
      (x :any)=>{
        debugger;
        let sub = this.pageObject.sub.find(y=>y.qno ==x.data.subqno);
        //empty all the checked property to false.
        sub.options.forEach(element => {
          element.checked = false;
        });
        let option = sub.options.find(y=>y.score==x.data.selectedscore);
        option.checked = true;
      },
      (error:any)=>{
        console.log(error);
      }
   );

//    this.msShareService.filterOn("selectedscoreQ1").subscribe(
//     (x :any)=>{
//     //  this.scorevaluesubscribed = x.data.toString();
//     debugger;
//     let selectedscoretoemit:string;
//    // let options = navMap[x.navMapPage].options;
//     let sub = this.pageObject.sub.find(y=>y.qno ==x.data.subqno);
//     selectedscoretoemit = sub.options.find(x=>x.checked).score;
    
//     if(selectedscoretoemit != undefined)
//     {
//       this.msShareService.emit("populatescoreQ1",selectedscoretoemit);
//     }
  
//     },
//     (error:any)=>{
//       console.log(error);
//     }
//  );
//  this.msShareService.filterOn("selectedscoreQ2").subscribe(
//   (x :any)=>{
//   //  this.scorevaluesubscribed = x.data.toString();
//   debugger;
//   let selectedscoretoemit:string;
//  // let options = navMap[x.navMapPage].options;
//   let sub = this.pageObject.sub.find(y=>y.qno ==x.data.subqno);
//   selectedscoretoemit = sub.options.find(x=>x.checked) == undefined?0:sub.options.find(x=>x.checked).score;
//   this.msShareService.emit("populatescoreQ2",selectedscoretoemit);
  

//   },
//   (error:any)=>{
//     console.log(error);
//   }
// );
   }

   getselectedscore(sub:any):void
   {
     debugger;
     if(sub != null || sub != undefined)
     {
      return sub.options.find(x => x.checked).score;
     }
   }
  change(event) {
    debugger;
   


    let options: any[] = this.pageObject.options;
    options && options.forEach(x => x.checked = false);
    let scale: any[] = this.pageObject.scale;
    scale && scale.forEach(x => x.checked = false);
    let sub = this.pageObject.sub;
    if (sub) {
      //in html template name captures the index
      let index = +event.source.name;
      sub[index]
        .options
        .forEach(x => x.checked = false); //to reset the already checked radio button
    }
    this.selectedOption = event.value;
    this.selectedOption.checked = true;
    this.selectedOption.pageName = this.pageName;
    this.pageObject.isMultiOptions && this.prepareMultiOptions();//isMultiOptions true means q3    


     //pratibha
     if(this.pageObject.skipwithinsection == true && event.value.jumpTo)
     {
      //  //hide and show the radiobuttons
      //  let options = navMap[this.pageName].options;
      //  let scale = navMap[this.pageName].scale;
      //  let sub = this.pageObject.sub;
      //  sub && sub.forEach(x => {
      //  if(x.qno == event.value.jumpTo)
      //  {
      //    x.hide == false;
      //    alert('got e;lement');
      //  }
      // });  

      if(event.value.hideqNo)
      {
        //TO DO: Pratibha 10Nov2017
         //split the string 
        let hideqNos = event.value.hideqNo;
        var hideqNoarr = hideqNos.split(",");
        hideqNoarr.forEach(x=>{

          navMap[this.pageName].sub.forEach(y => {
            if(y.qno == x)
            {
              y.hide = true;
             // y.checked = false;
             y.options.forEach(element => {
               element.checked = false;
             });
            }
          });
         
        });
      }
      //show the jumpto question
      navMap[this.pageName].sub.forEach(x => {
         if(x.qno == event.value.jumpTo)
         {
           x.hide = false;
         }
         });
      
        this.showPage();
     }
 
     //end
  }

  prepareMultiOptions() {
    debugger;
    navMap['multiOptions'] = [];    
    Screen[this.pageObject.ScreenPage] = [];
    this
      .pageObject
      .sub
      .forEach(x => {
        if (x.options[0].checked) {
          this
          Screen[this.pageObject.ScreenPage].push(x.options[0]);
        }
      });
  }
}