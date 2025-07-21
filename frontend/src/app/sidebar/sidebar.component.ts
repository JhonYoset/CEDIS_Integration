import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    { path: '/prestamos', title: 'Préstamos',  icon: 'pe-7s-bookmarks', class: '' },
    { path: '/documentos', title: 'Documentos',  icon: 'pe-7s-file', class: '' },
    { path: '/lectores', title: 'Lectores',  icon: 'pe-7s-users', class: '' },
    { path: '/reportes', title: 'Reporte de Lectores Morosos',  icon: 'pe-7s-graph', class: '' },
    { path: '/user', title: 'User Profile',  icon:'pe-7s-user', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  userName: string;
  userInitials: string;
  userRole: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    
    // Suscribirse a cambios en el usuario actual
    this.authService.currentUser$.subscribe(user => {
      if (user) {
        this.userName = `${user.nombre} ${user.apellido}`;
        this.userInitials = this.getInitials(this.userName);
        this.userRole = user.tipo;
      }
    });
  }

  getInitials(name: string): string {
    if (!name) {
      return 'U';
    }
    
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  }

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  logout() {
    this.authService.logout();
  }
}
