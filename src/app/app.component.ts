import {Component} from '@angular/core';
import {InfoPagesService} from "./services/info-pages.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio';

  constructor(private infoPagesService: InfoPagesService) {
  }
}
