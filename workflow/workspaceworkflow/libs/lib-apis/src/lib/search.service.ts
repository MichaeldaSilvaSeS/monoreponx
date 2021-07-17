import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
//import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  public obterCep(cep: string): Observable<any> {
    var params = new HttpParams();
    //params.append('');
console.log('chamou 2');
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/unicode/`, {
      params: params
    });
  }
}
