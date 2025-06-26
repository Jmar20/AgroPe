import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  private router = inject(Router);

  stats = {
    farmers: '2,500+',
    hectares: '15,000+',
    crops: '50+',
    increase: '+35%'
  };

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  navigateToAbout() {
    this.router.navigate(['/conocenos']);
  }
}
