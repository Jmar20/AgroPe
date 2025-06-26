import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  farmSize: string;
  location: string;
  cropTypes: string[];
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
  newsletter: boolean;
}

interface CropOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-register',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  private router = inject(Router);
  private authService = inject(AuthService);

  registerData: RegisterData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    farmSize: '',
    location: '',
    cropTypes: [],
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    newsletter: false
  };

  isLoading = false;

  cropOptions: CropOption[] = [
    { value: 'maiz', label: 'Maíz' },
    { value: 'trigo', label: 'Trigo' },
    { value: 'soja', label: 'Soja' },
    { value: 'arroz', label: 'Arroz' },
    { value: 'cafe', label: 'Café' },
    { value: 'tomate', label: 'Tomate' },
    { value: 'papa', label: 'Papa' },
    { value: 'cebolla', label: 'Cebolla' },
    { value: 'zanahoria', label: 'Zanahoria' },
    { value: 'lechuga', label: 'Lechuga' },
    { value: 'frijol', label: 'Frijol' },
    { value: 'aguacate', label: 'Aguacate' },
    { value: 'citricos', label: 'Cítricos' },
    { value: 'uva', label: 'Uva' },
    { value: 'algodon', label: 'Algodón' },
    { value: 'otro', label: 'Otro' }
  ];

  onCropChange(event: any) {
    const cropValue = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      this.registerData.cropTypes.push(cropValue);
    } else {
      const index = this.registerData.cropTypes.indexOf(cropValue);
      if (index > -1) {
        this.registerData.cropTypes.splice(index, 1);
      }
    }
  }

  hasNumber(password: string): boolean {
    return /\d/.test(password);
  }

  hasUppercase(password: string): boolean {
    return /[A-Z]/.test(password);
  }

  passwordsMatch(): boolean {
    return this.registerData.password === this.registerData.confirmPassword;
  }

  onRegister() {
    if (this.isFormValid()) {
      this.isLoading = true;

      // Simular registro y luego autenticar
      setTimeout(() => {
        console.log('Registro exitoso:', this.registerData);
        
        // Simular login automático después del registro
        this.authService.authenticate(this.registerData.email, this.registerData.password).subscribe({
          next: (success: boolean) => {
            this.isLoading = false;
            if (success) {
              // Guardar token de sesión
              this.authService.login('fake-jwt-token-' + Date.now());
              this.router.navigate(['/dashboard']);
            }
          },
          error: (error: any) => {
            this.isLoading = false;
            console.error('Error en registro:', error);
          }
        });
      }, 2000);
    }
  }

  private isFormValid(): boolean {
    return !!(
      this.registerData.firstName &&
      this.registerData.lastName &&
      this.registerData.email &&
      this.registerData.company &&
      this.registerData.password &&
      this.registerData.confirmPassword &&
      this.registerData.acceptTerms &&
      this.passwordsMatch() &&
      this.registerData.password.length >= 8 &&
      this.hasNumber(this.registerData.password) &&
      this.hasUppercase(this.registerData.password)
    );
  }
}
