import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Report} from '../models/report.models';

@Injectable({
  providedIn: 'root'
})
export class ReportService {


  private url = 'https://covid-19-data.p.rapidapi.com/';

  constructor(private http: HttpClient) {
  }

  get(params) {
    return this.http.get<Report>(this.url + 'country?name=' + params).pipe();
  }

  global() {
    return this.http.get<Report>(this.url + 'totals').pipe();
  }
}
