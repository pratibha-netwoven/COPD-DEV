import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { navMap,Screen } from '../app.config';
import * as _ from "lodash";

@Component({ selector: 'app-generic1', templateUrl: './generic1.component.html', styleUrls: ['./generic1.component.css'] })

export class Generic1Component implements OnInit {
  pageName: string;
  pageObject: any;
  selectedOption: any;


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
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
    debugger;
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

  ngOnInit() {debugger; }

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