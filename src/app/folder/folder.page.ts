import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public id: string;
  public title: string;
  public title_map = new Map<string, string>([
    ['schedule','スケジュール'] ,
    ['mylist' , 'マイリスト'] ,
  ])


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.paramMap.get('title');
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    if(this.title_map.has(this.title)) {
      this.title = this.title_map.get(this.title);  
    }
  }

}
