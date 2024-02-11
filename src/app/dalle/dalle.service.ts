import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DalleService {
  private baseUrl = 'http://localhost:3000'; // Replace with your actual backend server URL

  constructor(private http: HttpClient) {}

  generateImage(prompt: string): Observable<any> {
    return this.http.post<{ imageURL: string }>(
      `${this.baseUrl}/generate-image`,
      { prompt }
    );
  }
}
