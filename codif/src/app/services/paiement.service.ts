import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { url_base } from './api_url_service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PaiementService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private router: Router, private http: HttpClient) { }

  faireRedirection(): void {
    this.router.navigate(['/payment']);
  }

  payer() {
    return this.http.get(`${url_base}FairePayement`);

  }

}
