import { Component } from '@angular/core';
import {NavTab} from "bottombar-component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tabs : NavTab[] = [{
    "title":"test1",
    "icon":"fa-facebook",
    "link":"/test1",
    "state":"unactive",
    "backgroundColor" : "red"
  },
    {"title":"test2",
      "icon":"fa-twitter",
      "link":"/test2",
      "state":"unactive",
      "backgroundColor" : "blue"},
    {"title":"test1",
      "icon":"fa-medium",
      "link":"/test2",
      "state":"unactive",
      "backgroundColor" : "green"},
    {"title":"test1",
      "icon":"fa-medium",
      "link":"/test2",
      "state":"unactive",
      "backgroundColor" : "yellow"}
      ];

}
