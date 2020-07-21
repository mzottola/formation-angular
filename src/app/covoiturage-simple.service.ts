import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CovoiturageAnnounce } from './covoiturage-announce';

@Injectable({
  providedIn: 'root'
})
export class CovoiturageSimpleService {

  constructor(private httpClient: HttpClient) {
  }

  fetchAnnounces(): Observable<Array<CovoiturageAnnounce>> {
    return this.httpClient.get<Array<CovoiturageAnnounce>>('https://www.covoiturage-simple.com/api/demo/annonces');
  }
}
