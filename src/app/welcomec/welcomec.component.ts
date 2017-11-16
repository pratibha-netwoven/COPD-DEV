import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {navMap,welcomeMap} from '../app.config';
import { FormControl } from '@angular/forms';
import { MsShareService } from '../ms-share.service';
// import { DatePipe } from '@angular/common'
//public datepipe: DatePipe  in constructor
import * as moment from 'moment';
@Component({
  selector: 'app-welcomec',
  templateUrl: './welcomec.component.html',
  styleUrls: ['./welcomec.component.css']
})
export class WelcomecComponent implements OnInit {
  name ='Patient1';
  drName= 'Scott';
  selecteddate:string = "";
  date = new FormControl((new Date()).toDateString());
  serializedDate = new FormControl((new Date()).toISOString());
  //monthFormat :any;
  // monthFormat = this.buildLocaleProvider("MMM-YYYY");

   constructor(private router:Router,private msShareService:MsShareService) {
    this.selecteddate = moment(new Date()).format('MMM-YYYY');
    
    // alert(new Date().getFullYear());
    // alert(new Date().getDate());
    // alert(new Date().getMonth());
    }
 
   ngOnInit() {
   
    // let pdate=new Date();
    // let latest_date =this.datepipe.transform(pdate, 'MMM-yyyy');
    //this.selecteddate = latest_date.toString();
   }
 
   tweak(){
    // this.router.navigate(['generic1','q1']);
    //this.router.navigate([welcomeMap['one']]);
    // alert(this.selecteddate);
    // this.selecteddate = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    // alert(this.selecteddate);
   
    //this.selecteddate = latest_date.toString();
   }

   next(){
    //alert(moment(this.selecteddate).format('MMM-YYYY'));
     this.router.navigate([welcomeMap['one']]);
   }

   buildLocaleProvider(formatString:string) {
    alert('pkin');
    return {
      formatDate: (date:Date) => {
        alert('pk1');
        if (date) return moment(date).format(formatString);
        else return null;
      },
      parseDate: (dateString:string)=> {
        if (dateString) {
          var m = moment(dateString, formatString, true);
          return m.isValid() ? m.toDate() : new Date(NaN);
        } else return null;
      }
    };
  }
 }
