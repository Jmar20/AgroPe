import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  company: string;
  message: string;
  newsletter: boolean;
}

interface FAQ {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-contact',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  formData: ContactFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    company: '',
    message: '',
    newsletter: false
  };

  isLoading = false;
  showSuccess = false;

  faqs: FAQ[] = [
    {
      question: '¿Cómo empiezo a usar AGROPE?',
      answer: 'Simplemente regístrate en nuestra plataforma y podrás comenzar a agregar tus parcelas inmediatamente.'
    },
    {
      question: '¿Ofrecen soporte técnico?',
      answer: 'Sí, ofrecemos soporte técnico completo de lunes a viernes de 8:00 a 18:00.'
    },
    {
      question: '¿Hay planes gratuitos disponibles?',
      answer: 'Ofrecemos una prueba gratuita de 30 días para que puedas explorar todas nuestras funcionalidades.'
    },
    {
      question: '¿Trabajan con todos los tipos de cultivos?',
      answer: 'Nuestra plataforma está diseñada para trabajar con más de 50 tipos de cultivos diferentes.'
    }
  ];

  onSubmit() {
    if (this.isFormValid()) {
      this.isLoading = true;
      
      // Simular envío del formulario (reemplaza con tu lógica real)
      setTimeout(() => {
        console.log('Formulario enviado:', this.formData);
        this.isLoading = false;
        this.showSuccess = true;
        this.resetForm();
        
        // Ocultar mensaje de éxito después de 5 segundos
        setTimeout(() => {
          this.showSuccess = false;
        }, 5000);
      }, 2000);
    }
  }

  private isFormValid(): boolean {
    return !!(this.formData.firstName && 
              this.formData.lastName && 
              this.formData.email && 
              this.formData.subject && 
              this.formData.message);
  }

  private resetForm() {
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      company: '',
      message: '',
      newsletter: false
    };
  }

  openSupport() {
    // Implementar apertura del centro de ayuda
    console.log('Abriendo centro de ayuda...');
  }

  openDocumentation() {
    // Implementar apertura de documentación
    console.log('Abriendo documentación...');
  }

  openTutorials() {
    // Implementar apertura de tutoriales
    console.log('Abriendo tutoriales...');
  }
}
