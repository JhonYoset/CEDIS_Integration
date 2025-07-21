import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {
  loading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    // Verificar si ya está autenticado
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
      return;
    }

    // Verificar si hay token y user en los query params (callback de Google)
    this.route.queryParams.subscribe(params => {
      console.log('Query params received:', params);
      
      if (params['token'] && params['user']) {
        console.log('Processing Google OAuth callback...');
        this.handleGoogleCallback(params['token'], params['user']);
        return;
      }
      
      if (params['message']) {
        this.errorMessage = params['message'];
      }
    });
  }

  handleUnsaLogin() {
    this.loading = true;
    this.errorMessage = '';
    this.successMessage = 'Redirigiendo a autenticación UNSA...';
    
    console.log('Redirecting to Google OAuth...');
    
    // Redirigir directamente a Google OAuth
    setTimeout(() => {
      this.authService.loginWithGoogle();
    }, 1000);
  }

  private handleGoogleCallback(token: string, userString: string): void {
    try {
      console.log('Handling Google callback with token:', token);
      console.log('User string:', userString);
      
      this.loading = true;
      this.successMessage = 'Autenticación exitosa. Redirigiendo...';
      
      // Procesar el callback
      this.authService.handleGoogleCallback(token, userString);
      
      // Redirigir al dashboard después de un breve delay
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 1500);
      
    } catch (error) {
      console.error('Error handling Google callback:', error);
      this.loading = false;
      this.errorMessage = 'Error al procesar la respuesta de Google';
    }
  }
}