import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  public title;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.paramMap.get('title');
  }

}
