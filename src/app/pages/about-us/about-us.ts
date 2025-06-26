import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  emoji: string;
}

@Component({
  selector: 'app-about-us',
  imports: [CommonModule],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss'
})
export class AboutUs {
  private router = inject(Router);

  teamMembers: TeamMember[] = [
    {
      name: 'María González',
      role: 'CEO & Fundadora',
      description: 'Ingeniera Agrónoma con 15 años de experiencia en tecnología agrícola.',
      emoji: '👩‍💼'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'CTO',
      description: 'Especialista en desarrollo de software y sistemas de datos agrícolas.',
      emoji: '👨‍💻'
    },
    {
      name: 'Ana López',
      role: 'Directora de Investigación',
      description: 'Doctora en Ciencias Agrícolas, lidera nuestros proyectos de innovación.',
      emoji: '👩‍🔬'
    },
    {
      name: 'Miguel Torres',
      role: 'Director Comercial',
      description: 'Experto en mercados agrícolas y relaciones con productores.',
      emoji: '👨‍💼'
    }
  ];

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  navigateToContact() {
    this.router.navigate(['/contacto']);
  }
}
