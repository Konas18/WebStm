import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Schedule} from "../../../model/schedule";
import {Card} from "../../../model/card";
import {Client} from "../../../model/Client";

import {select, Store} from "@ngrx/store";
import {UserState} from "../../../store/user.reducer";
import {Observable} from "rxjs";
import {userSelector} from "../../../store/user.selector";
import {UserSyncStorageService} from "../../../service/user-sync-storage.service";
import axios from "axios";
import {ScheduleDialogComponent} from "../schedule-dialog/schedule-dialog.component";

@Component({
  selector: 'app-newapplication-dialog',
  templateUrl: './newapplication-dialog.component.html',
  styleUrls: ['./newapplication-dialog.component.css']
})
export class NewapplicationDialogComponent implements OnInit {

  client: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { schedules: Schedule[], client: Client }) {
  }

  async ngOnInit() {
    console.log(this.data.schedules);
  }
  // async CheckDateTime(){
  //   const config = {
  //     url: "http://localhost:8080/personal/findallschedule",
  //   };
  //   await axios.post(config.url, {id}).then((response) => {
  //       this.schedules = response.data;
  //     }
  //   )
  // }
}