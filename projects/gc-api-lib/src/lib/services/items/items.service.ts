import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ItemService {
  constructor(private http: HttpClient) {

  }
  loadAvailableItems$ = (): Observable<object> => this.http.get('http://localhost:3000/items');
}
