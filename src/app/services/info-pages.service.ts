import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InfoPagesService {

  DIR_INFO_PAGE: string = 'assets/data/data-pagina.json';

  constructor(private http: HttpClient) {
  }

  getInfoPage() {
    return this.http.get(this.DIR_INFO_PAGE);
  }
}
