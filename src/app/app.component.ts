import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ngattribureDirectives';
  bgColor = 'green';
  serverIsRunning = false;
  getRandomColor() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
  }
  onChangeServerStatusBtnClick() {
    this.serverIsRunning = !this.serverIsRunning;
  }
}
