import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Método para autenticar con credenciales
  authenticate(email: string, password: string): Observable<boolean> {
    // Simular autenticación (reemplazar con tu lógica real)
    return of(true).pipe(delay(1000));
  }

  // Método para iniciar sesión y guardar token en cookie
  login(token: string): void {
    this.setCookie('authToken', token, 7); // 7 días de expiración
  }

  // Método para cerrar sesión
  logout(): void {
    this.deleteCookie('authToken');
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.getCookie('authToken') !== null;
  }

  // Método para obtener el token
  getToken(): string | null {
    return this.getCookie('authToken');
  }

  // Método auxiliar para establecer una cookie
  private setCookie(name: string, value: string, days: number): void {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }

  // Método auxiliar para obtener una cookie
  private getCookie(name: string): string | null {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  // Método auxiliar para eliminar una cookie
  private deleteCookie(name: string): void {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
  }
}
