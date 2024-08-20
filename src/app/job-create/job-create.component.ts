import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { JobService } from '../job.service';
import { Job } from '../model/job';


@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrl: './job-create.component.css'
})
export class JobCreateComponent {

  private formBuilder = inject(FormBuilder);
  private jobService = inject(JobService);
  form = this.formBuilder.group({
    jobID: [0, Validators.required],
    title: ['', Validators.required],
    description: ['', Validators.required],
    salary: [0, Validators.required],
    location: ['', Validators.required],
    jobtype: ['', Validators.required],
  });

  onSubmit(): void {
    const job: Job = {
      jobID: 10,
      title: this.form.value.title || '',
      description: this.form.value.description || '',
      salary: this.form.value.salary || 0,
      location: this.form.value.location || '',
      jobtype: this.form.value.jobtype || '',
    };
    this.jobService.addJob(job);
  }
}
