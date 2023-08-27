import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  gridnumber: string = '12';

  cssgridcolumn: string = 'grid-cols-';


  constructor() {
    this.cssgridcolumn = this.cssgridcolumn+this.gridnumber
    console.log(this.cssgridcolumn)
  }

  ngOnInit(): void {


  }



}
