import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {selection} from 'd3'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'd3-practice';

  hi(){
    console.log(selection)
  }
}
