import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalReport} from '../models/global-report.models';

@Injectable({
  providedIn: 'root'
})
export class GlobalReportService {


  private url = 'https://covid-19-data.p.rapidapi.com/';

  constructor(private http: HttpClient) {
  }

  get() {
    return this.http.get<GlobalReport>(this.url + 'totals').pipe();
  }
}
