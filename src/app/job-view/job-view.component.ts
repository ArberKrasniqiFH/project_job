
import { Component, OnInit, inject, NgZone} from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { JobService } from '../job.service';
import { Job } from '../model/job';
import { JsonpClientBackend } from '@angular/common/http';
import { Router } from '@angular/router';
import { debounceTime, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-job-view',
  templateUrl: './job-view.component.html',
  styleUrl: './job-view.component.css'
})
export class JobViewComponent {
  private saveSubject = new Subject<any>();
  router = inject(Router);
  
  private jobService = inject(JobService);
  constructor() {
    this.saveSubject.pipe(debounceTime(500)).subscribe((job) => {
      this.jobService.editJob(job);
    });
  }

  jobs: Job[] = [];

  ngOnInit(): void {
    this.jobService.getJob().subscribe(data => {
      this.jobs = data;
    });
  }

  onDelete(id:number): void {                   
    this.jobService.deleteJob(id);
    this.jobs= this.jobs.filter(item => item.jobID !== id);
  };

  editable : boolean = false;
  toggleEditable() {
    this.editable = !this.editable;
  }

  onInput(job: Job) {
    this.saveSubject.next(job);
  }

  onBlur(job: Job) {
    this.jobService.editJob(job);
  }
}   
