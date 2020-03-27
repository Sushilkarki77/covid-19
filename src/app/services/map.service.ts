import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MapData} from '../models/map.models';

@Injectable({
  providedIn: 'root'
})
export class MapService {


  private url = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&';

  constructor(private http: HttpClient) {
  }

  get(params) {
    return this.http.get<MapData>(this.url + 'lon=' + params[0] + '&lat=' + params[1]).pipe();
  }
}
