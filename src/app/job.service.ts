import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from './model/job';
import { HttpClient, HttpHeaders}  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  apiUrl: string = 'https://api.finaldev.de/api/jobstelle';

  constructor(private httpClient: HttpClient) { }

  getJob(): Observable<Job[]> {
    return this.httpClient.get<Job[]>(this.apiUrl + `?cacheBust=${new Date().getTime()}`);
  }

  addJob(job: Job): void {
    this.httpClient.post<number>(this.apiUrl, job).subscribe(); 
  }

  deleteJob(jobID: number): void {
    this.httpClient.get<number>(this.apiUrl + '/delete/' + jobID).subscribe();
  }

  editJob(job: Job): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.httpClient.post<Job>(this.apiUrl +"/edit", JSON.stringify(job), {headers}).subscribe(r => { });
  }
}
