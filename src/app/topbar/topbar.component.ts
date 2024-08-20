import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  constructor(private router: Router) {}

  goToView() {
    this.router.navigate(['/job/view']);
  }
  goToCreate() {
    this.router.navigate(['/job/create']);
  }
}
