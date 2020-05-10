import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Data } from './data';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  private storage: SQLiteObject;
  dataList = new BehaviorSubject([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private platform: Platform, 
    private sqlite: SQLite, 
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter,
  ) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'list.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.storage = db;
          this.getFakeData();
      });
    });
  }

  dbState() {
    return this.isDbReady.asObservable();
  }
 
  fetchSongs(): Observable<Data[]> {
    return this.dataList.asObservable();
  }

    // Render fake data
    getFakeData() {
      this.httpClient.get(
        'assets/init.sql', 
        {responseType: 'text'}
      ).subscribe(data => {
        this.sqlPorter.importSqlToDb(this.storage, data)
          .then(_ => {
            this.getData();
            this.isDbReady.next(true);
          })
          .catch(error => console.error(error));
      });
    }

  // Get list
  getData(){
    return this.storage.executeSql('SELECT * FROM list', []).then(res => {
      let items: Data[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
          items.push({ 
            id: res.rows.item(i).id,
            memo: res.rows.item(i).memo,  
            is_complete: res.rows.item(i).is_complete,
            complete_time: res.rows.item(i).complete_time,
            target_time: res.rows.item(i).target_time,

           });
        }
      }
      this.dataList.next(items);
    });
  }

  // Add
  addSong(data: Data) {
    let data_sql = [data.memo, data.is_complete, data.complete_time,data.target_time]
    return this.storage.executeSql('INSERT INTO list (id, memo, is_complete, complete_tike, target_time) VALUES (?, ?, ?, ?, ?)', data_sql)
    .then(res => {
      this.getData();
    });
  }
 
  // Get single object
  getOneData(id): Promise<Data> {
    return this.storage.executeSql('SELECT * FROM list WHERE id = ?', [id]).then(res => { 
      return {
        id: res.rows.item(0).id,
        memo: res.rows.item(0).memo,  
        is_complete: res.rows.item(0).is_complete,
        complete_time: res.rows.item(0).complete_time,
        target_time: res.rows.item(0).target_time,
      }
    });
  }

  // Update
  updateData(id,data: Data) {
    let data_sql = [data.memo, data.is_complete, data.complete_time,data.target_time]
    return this.storage.executeSql(`UPDATE list SET memo = ?, is_complete= ? complete_time = ? target_time = ? WHERE id = ${id}`, data_sql)
    .then(data => {
    this.getData();
  })
  }

  // Delete
  deleteData(id) {
    return this.storage.executeSql('DELETE FROM list WHERE id = ?', [id])
    .then(_ => {
      this.getData();
    });
  }
}
