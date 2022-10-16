import {Component, OnInit} from '@angular/core';
import {InfoPagesService} from "../../services/info-pages.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public datosTeam: any[] = [];

  constructor(private infoPagesService: InfoPagesService) {
  }

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam() {
    this.infoPagesService.getTeam()
      .subscribe((response: any) => {
        this.datosTeam = response;
      })
  }

}
