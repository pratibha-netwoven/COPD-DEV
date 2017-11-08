import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {navMap} from '../app.config';


@Component({
  selector: 'app-welcomec',
  templateUrl: './welcomec.component.html',
  styleUrls: ['./welcomec.component.css']
})
export class WelcomecComponent implements OnInit {

constructor(private router:Router) {

   }

  ngOnInit() {
  }

  next(){
    this.router.navigate(['generic1','q1a']);
  }

}
