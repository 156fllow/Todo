import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { ListPage } from '../list/list.page';
import { HeaderPage } from '../header/header.page';
import { MylistPage } from '../mylist/mylist.page';
import { SchedulePage } from '../schedule/schedule.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
  ],
  declarations: [
    FolderPage,
    ListPage,
    MylistPage,
    HeaderPage,
    SchedulePage,
  ]
})
export class FolderPageModule {}
