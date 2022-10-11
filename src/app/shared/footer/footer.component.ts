import {Component, OnInit} from '@angular/core';
import {InfoPaginaModel} from "../../models/info-pagina.model";
import {InfoPagesService} from "../../services/info-pages.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public anno: number = new Date().getFullYear();
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
