import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My App Component';
  counter = 4;
  languages = ['C++','Python','C','Java'];
  incrementCounter(){
    this.counter += 1;
  }

  decrementCounter(){
    this.counter -= 1;
  }

}
