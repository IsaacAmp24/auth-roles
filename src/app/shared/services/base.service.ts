import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {

  basePath: string = 'http://localhost:3000/api/v1';
  resourceEndpoint: string = '';

  httpOptions = {
    headers:{
      'Content-Type': 'application/json'
    }
  };

  constructor(public http: HttpClient) { }

  
}
