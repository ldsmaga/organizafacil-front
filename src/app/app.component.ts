import { Component } from '@angular/core';
import { Title} from "@angular/platform-browser";

import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private titleService:Title
    ){
    this.titleService.setTitle("OrganizaFacil");
  }

  title = 'OrganizaFacil';
  calendarPlugins = [dayGridPlugin]
}
