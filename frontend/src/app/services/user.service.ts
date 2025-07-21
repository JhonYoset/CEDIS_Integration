import { Injectable } from '@angular/core';
import { AuthService, User } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService: AuthService) { }

  getUserName(): string {
    const user = this.authService.currentUserValue;
    return user ? `${user.nombre} ${user.apellido}` : '';
  }

  getUserRole(): string {
    const user = this.authService.currentUserValue;
    return user ? user.tipo : '';
  }

  isGuestUser(): boolean {
    return false; // Ya no manejamos invitados
  }

  logout(): void {
    this.authService.logout();
  }
} 