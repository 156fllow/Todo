import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'リスト',
      url: '/folder/list/1',
      icon: 'list'
    },
    {
      title: '新しいリストを作成',
      url: '/add',
      icon: 'add'
    },
    {
      title: 'マイ　スケジュール',
      url: 'folder/schedule/-1',
      icon: 'time'
    },
    {
      title: 'マイ　リスト',
      url: 'folder/mylist/-1',
      icon: 'document'
    },
    {
      title: '設定',
      url: '/folder/settings/-1',
      icon: 'settings'
    },
    {
      title: 'このアプリをシェア',
      url: '/share',
      icon: 'share'
    },
  ];

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
