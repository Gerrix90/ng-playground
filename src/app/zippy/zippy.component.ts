import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.scss']
})
export class ZippyComponent {
   // Pass the tittle
 @Input('tittle') tittle: string;
 isExpanded: boolean;

  // Toggle the isExpanded field
toggle() {
   this.isExpanded = !this.isExpanded;
 }
}
