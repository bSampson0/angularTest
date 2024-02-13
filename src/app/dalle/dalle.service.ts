import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DalleService {
  constructor(private http: HttpClient) {}

  generateImage(prompt: string): Observable<any> {
    const payload = { prompt: prompt };
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post(
      'https://29z9qcjcu5.execute-api.us-east-1.amazonaws.com/default/generateImage',
      payload,
      { headers }
    );
  }
}
