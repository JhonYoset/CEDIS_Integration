import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    
    console.log('AuthGuard: Checking authentication for route:', state.url);
    console.log('AuthGuard: Is authenticated:', this.authService.isAuthenticated());
    
    if (this.authService.isAuthenticated()) {
      console.log('AuthGuard: User is authenticated, allowing access');
      return true;
    }

    console.log('AuthGuard: User not authenticated, redirecting to login');
    // Redirigir al login si no está autenticado
    this.router.navigate(['/login'], { 
      queryParams: { returnUrl: state.url } 
    });
    return false;
  }
}