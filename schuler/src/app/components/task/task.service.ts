import { Injectable } from '@angular/core';
import { Task }  from './task.model';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {map, catchError, flatMap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
 baseUrl = 'http://localhost:3333/tasks';
  constructor(private http: HttpClient) { }


  read():void {
    this.http.get<Task[]>(this.baseUrl)

  }
}


