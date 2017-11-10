import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {navMap, welcomeMap} from '../app.config';
@Component({
  selector: 'app-welcomea',
  templateUrl: './welcomea.component.html',
  styleUrls: ['./welcomea.component.css']
})

export class WelcomeaComponent implements OnInit {
 name ='Patient1';
 drName= 'Scott';
  constructor(private router:Router) {

   }

  ngOnInit() {
  }

  next(){
   // this.router.navigate(['generic1','q1']);
   this.router.navigate([welcomeMap['one']]);
  }
}
