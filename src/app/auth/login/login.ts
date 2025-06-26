import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  loginData = {
    email: '',
    password: ''
  };

  rememberMe = false;
  isLoading = false;

  // Método para login con autenticación
  onLogin() {
    if (this.loginData.email && this.loginData.password) {
      this.isLoading = true;
      
      // Autenticar credenciales
      this.authService.authenticate(this.loginData.email, this.loginData.password).subscribe({
        next: (success: boolean) => {
          if (success) {
            // Guardar el token en cookies
            const mockToken = 'mock-jwt-token-' + Date.now();
            this.authService.login(mockToken);
            
            this.isLoading = false;
            
            // Redirigir al dashboard
            this.router.navigate(['/dashboard']);
          } else {
            this.isLoading = false;
            console.error('Credenciales incorrectas');
          }
        },
        error: (error: any) => {
          this.isLoading = false;
          console.error('Error en login:', error);
        }
      });
    }
  }

  // Método para logout (útil si necesitas un botón de logout)
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
