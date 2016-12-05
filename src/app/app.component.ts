import { Component } from '@angular/core';
import {HomeComponent} from "./home/home.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [HomeComponent]
})
export class AppComponent {

  title = 'Angular 2 test Apllication';
  name = 'Rocky From RBS';

  animals ={
    'name':'Cat',
    'type': 'Persian'
  };
  fire(e){
    alert('i am listening');
  }

}
