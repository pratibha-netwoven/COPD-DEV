import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MsShareService } from '../ms-share.service';
import { navMap, transitArray,Screen } from '../app.config';
import * as _ from "lodash";

@Component({ selector: 'app-navigate', templateUrl: './navigate.component.html', styleUrls: ['./navigate.component.css'] })
export class NavigateComponent implements OnInit {
  @Input() selectedOption: any;
  @Input() pageName: string;
  @Input() pageObject: any;

  pagesStack: string[] = [];
  pointer: number = 0;
  shiftOption: any;

  constructor(private router: Router, private location: Location, private msShareService: MsShareService) { }

  ngOnInit() { }

  next() {
    debugger;
    let jumpTo;
    let patienttype = this.msShareService.get('queryParams').Type || 'FP';
    if (this.pageObject.isMultiOptions && this.pageObject.ScreenPage == 3) {
      _.forEach(Screen, function (value) {
        navMap['multiOptions'] = _.concat(navMap['multiOptions'], value);
      });

    }
    let multiOptions = navMap['multiOptions'];
    if (transitArray.includes(this.pageName)) {
      if (this.pageObject.isMultiOptions && this.pageObject.ScreenPage != null) {
        jumpTo = this.pageObject.jumpTo;
      }

      if (!jumpTo) {
        if (multiOptions && multiOptions.length > 0) {
          this.shiftOption = multiOptions.shift();
          jumpTo =
            this.shiftOption.jumpTo;
        } else {
          if (this.pointer < (this.pagesStack.length - 1)) {
            this
              .location
              .forward();
            this.pointer++;
          } 
          else
          {
            let currentindex = transitArray.indexOf(this.pageName);
            if((currentindex+1) <transitArray.length)
            {
              jumpTo = transitArray[currentindex+1];
            }
            
          }
          // else {
          //   jumpTo = 'q21';
          // }
        }
      }
    } else if (this.selectedOption) {
      let isFunc = _.isFunction(this.selectedOption.jumpTo);
      jumpTo = isFunc
        ? this
          .selectedOption
          .jumpTo(patienttype)
        : this.selectedOption.jumpTo;
    } else if (this.pageObject.jumpTo) { //default one when no options are selected
      let isFunc = _.isFunction(this.pageObject.jumpTo);
      jumpTo = isFunc
        ? this
          .pageObject
          .jumpTo(patienttype)
        : this.pageObject.jumpTo;
    }
   

    if (jumpTo) {
      this
        .pagesStack
        .push(this.pageName);
      this.pointer = this.pagesStack.length - 1;
      this
        .router
        .navigate(['generic1', jumpTo]);
    }
    
  }

  previous() { 
    debugger;   
    let page = this.pageName;
    if (transitArray.includes(page)) {
      _.forEach(Screen, function (value) {
        value.forEach(x => {
          console.log(page);
          if (x.jumpTo == page) {
            this
            navMap['multiOptions'].splice(0, 0, x);
          }
        });
      });
    } 

    if (this.pointer > 0) {
      this.pointer--;
    }
    this
      .location
      .back();
  }
}