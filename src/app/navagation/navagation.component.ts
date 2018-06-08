import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navagation',
  templateUrl: './navagation.component.html',
  styleUrls: ['./navagation.component.scss']
})
export class NavagationComponent {
   blogs: Object;
  
  blog = [
     { year: 2018, month: 1},
     { year: 2018, month: 2},
     { year: 2018, month: 3},
   ];
  constructor() { }


 }
