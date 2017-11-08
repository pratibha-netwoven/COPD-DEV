import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {navMap} from '../app.config';

@Component({
  selector: 'app-welcomeb',
  templateUrl: './welcomeb.component.html',
  styleUrls: ['./welcomeb.component.css']
})
export class WelcomebComponent implements OnInit {

  constructor(private router:Router) {

   }

  ngOnInit() {
  }

  next(){
    this.router.navigate(['generic1','q1a']);
  }
}
