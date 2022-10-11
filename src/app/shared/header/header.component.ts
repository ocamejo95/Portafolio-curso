import {Component, OnInit} from '@angular/core';
import {InfoPagesService} from "../../services/info-pages.service";
import {InfoPaginaModel} from "../../models/info-pagina.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  info: InfoPaginaModel = {};

  constructor(private infoPagesService: InfoPagesService) {
  }

  ngOnInit(): void {
    this.getInfoPage();
  }

  getInfoPage() {
    this.infoPagesService.getInfoPage()
      .subscribe((response: InfoPaginaModel) => {
        this.info = response;
      })
  }
}
