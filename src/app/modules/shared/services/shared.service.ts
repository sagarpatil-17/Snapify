import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  getImagesData(searchText: string): Observable<any> {
    const url = `https://api.pexels.com/v1/search?query=${searchText}`;
    const key = 'kjG56NnZv46o7cgK7oczMjXUq0vOx4RtFdvNlqSr8oqfruW633nZGXcB';
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': key,
    });

    return this.http.get(url,
      { headers: headers });
  }

}
