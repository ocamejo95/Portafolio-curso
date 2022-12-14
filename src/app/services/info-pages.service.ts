import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class InfoPagesService {


  constructor(private http: HttpClient) {
  }

  getInfoPage() {
    return this.http.get(environment.URL_INFO_PAGE);
  }

  getTeam() {
    return this.http.get(environment.URL_TEAM);
  }
}
