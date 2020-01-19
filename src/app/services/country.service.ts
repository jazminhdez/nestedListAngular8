import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Element } from '../models/Element';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CountryService {

  private elementsUrl = 'api/countries'; // URL to web api

    constructor(
        private http: HttpClient,
    ) { }

    public getElements(): Observable<Element[]> {
        return this.http.get<Element[]>(this.elementsUrl);
    }

    public getElement(id: number): Observable<Element> {
        const url = `${this.elementsUrl}/${id}`;
        return this.http.get<Element>(url);
    }
    
    public addElement(element: Element): Observable<Element> {
        return this.http.post<Element>(this.elementsUrl, element, httpOptions);
    }

    public updateElement(element: Element): Observable<any> {
        return this.http.put(this.elementsUrl, element, httpOptions);
    }
}
