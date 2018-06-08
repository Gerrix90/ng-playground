import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
   year: number;
   month: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // read the route param
    const params = this.route.snapshot.paramMap;
    this.year = +params.get('year');
    this.year = +params.get('month');
  }
}
