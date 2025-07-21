import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface User {
  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  tipo: string;
  userType: string;
  fecha_creacion?: string;
  fecha_actualizacion?: string;
}

export interface AuthResponse {
  success: boolean;
  access_token?: string;
  user?: User;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  private tokenSubject = new BehaviorSubject<string | null>(null);

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    // Verificar si hay token guardado al inicializar
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    
    if (token && user) {
      try {
        this.tokenSubject.next(token);
        this.currentUserSubject.next(JSON.parse(user));
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        this.logout();
      }
    }
  }

  // Getter para obtener el usuario actual
  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  // Getter para obtener el token actual
  public get tokenValue(): string | null {
    return this.tokenSubject.value;
  }

  // Verificar si el usuario está autenticado
  public isAuthenticated(): boolean {
    return !!this.tokenValue && !!this.currentUserValue;
  }

  // Verificar si el usuario es administrador
  public isAdmin(): boolean {
    const user = this.currentUserValue;
    return user?.tipo === 'Administrador';
  }

  // Login con email (para cuentas @unsa.edu.pe)
  public loginWithEmail(email: string): Observable<AuthResponse> {
    if (!email.endsWith('@unsa.edu.pe')) {
      return throwError({ message: 'Solo se permiten cuentas @unsa.edu.pe' });
    }

    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/validate-email`, { email })
      .pipe(
        tap(response => {
          console.log('Email validation response:', response);
          if (response.success && response.access_token && response.user) {
            this.setSession(response.access_token, response.user);
          }
        }),
        catchError(this.handleError)
      );
  }

  // Login con Google OAuth
  public loginWithGoogle(): void {
    console.log('Redirecting to Google OAuth...');
    // Redirigir directamente al endpoint de Google OAuth del backend
    const googleAuthUrl = `${this.apiUrl}/auth/google`;
    console.log('Google OAuth URL:', googleAuthUrl);
    window.location.href = googleAuthUrl;
  }

  // Manejar callback de Google OAuth
  public handleGoogleCallback(token: string, userString: string): void {
    try {
      console.log('Processing Google callback...');
      console.log('Token received:', token);
      console.log('User string received:', userString);
      
      const user = JSON.parse(decodeURIComponent(userString));
      console.log('Parsed user:', user);
      
      this.setSession(token, user);
      console.log('Session established successfully');
      
    } catch (error) {
      console.error('Error parsing user data:', error);
      throw error;
    }
  }

  // Establecer sesión
  private setSession(token: string, user: User): void {
    console.log('Setting session with token and user:', { token: token.substring(0, 20) + '...', user });
    
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.tokenSubject.next(token);
    this.currentUserSubject.next(user);
    
    console.log('Session set successfully');
  }

  // Logout
  public logout(): void {
    console.log('Logging out...');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.tokenSubject.next(null);
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  // Obtener headers con autorización
  public getAuthHeaders(): HttpHeaders {
    const token = this.tokenValue;
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    });
  }

  // Manejar errores
  private handleError(error: any): Observable<never> {
    let errorMessage = 'Ha ocurrido un error';
    
    if (error.error?.message) {
      errorMessage = error.error.message;
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    console.error('Auth service error:', error);
    return throwError({ message: errorMessage });
  }

  // Verificar estado del servidor
  public checkServerStatus(): Observable<any> {
    return this.http.get(`${this.apiUrl}/auth/status`);
  }
}