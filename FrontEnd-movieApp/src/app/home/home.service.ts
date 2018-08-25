import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {environmentProd} from "../../environments/environment.prod";


const BASE = environment.apiUrl;
const apiKey = environmentProd.apiKey;
@Injectable()
export class HomeService {

  constructor(private httpClient: HttpClient) {
  }

  domain = `${BASE}`;

  getGenres() {
    const apiCall = `genre/movie/list?api_key=${apiKey}&language=en-US`;
    const url = `${this.domain}/${apiCall}`;
    return this.httpClient.get(url);
  }
}
