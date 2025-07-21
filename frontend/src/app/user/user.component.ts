import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../services/auth.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentUser: User | null = null;
  loading = true;
  
  userStats = {
    totalPrestamos: 0,
    prestamosActivos: 0,
    documentosCreados: 0,
    lectoresGestionados: 0
  };

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('User component initialized');
    
    // Obtener usuario actual
    this.authService.currentUser$.subscribe(user => {
      console.log('Current user updated:', user);
      this.currentUser = user;
      
      if (user) {
        this.loadUserStats();
      } else {
        this.loading = false;
      }
    });

    // Si no hay usuario, verificar autenticación
    if (!this.authService.isAuthenticated()) {
      console.log('User not authenticated, redirecting to login');
      this.redirectToLogin();
    }
  }

  private loadUserStats(): void {
    if (!this.currentUser) return;

    console.log('Loading user stats for:', this.currentUser.correo);
    
    // Cargar estadísticas del usuario
    Promise.all([
      this.loadPrestamosStats(),
      this.loadDocumentosStats(),
      this.loadLectoresStats()
    ]).then(() => {
      this.loading = false;
      console.log('User stats loaded:', this.userStats);
    }).catch(error => {
      console.error('Error loading user stats:', error);
      this.loading = false;
    });
  }

  private async loadPrestamosStats(): Promise<void> {
    try {
      // Obtener todos los préstamos para calcular estadísticas
      const prestamos = await this.apiService.getPrestamos({ page: 1, limit: 1000 }).toPromise();
      
      if (prestamos) {
        this.userStats.totalPrestamos = prestamos.total;
        
        // Contar préstamos activos (no devueltos)
        const prestamosActivos = prestamos.data.filter(p => 
          p.estado === 'Prestado' || p.estado === 'Vigente'
        );
        this.userStats.prestamosActivos = prestamosActivos.length;
      }
    } catch (error) {
      console.error('Error loading prestamos stats:', error);
    }
  }

  private async loadDocumentosStats(): Promise<void> {
    try {
      // Obtener documentos para estadísticas
      const documentos = await this.apiService.getDocumentos({ page: 1, limit: 1 }).toPromise();
      
      if (documentos) {
        // Para administradores y bibliotecarios, mostrar total de documentos
        if (this.currentUser?.tipo === 'Administrador' || this.currentUser?.tipo === 'Bibliotecario') {
          this.userStats.documentosCreados = documentos.total;
        }
      }
    } catch (error) {
      console.error('Error loading documentos stats:', error);
    }
  }

  private async loadLectoresStats(): Promise<void> {
    try {
      // Obtener lectores para estadísticas
      const lectores = await this.apiService.getLectores({ page: 1, limit: 1 }).toPromise();
      
      if (lectores) {
        // Para administradores y bibliotecarios, mostrar total de lectores
        if (this.currentUser?.tipo === 'Administrador' || this.currentUser?.tipo === 'Bibliotecario') {
          this.userStats.lectoresGestionados = lectores.total;
        }
      }
    } catch (error) {
      console.error('Error loading lectores stats:', error);
    }
  }

  getUserInitials(): string {
    if (!this.currentUser) return 'U';
    
    const nombres = this.currentUser.nombre || '';
    const apellidos = this.currentUser.apellido || '';
    
    const initials = (nombres.charAt(0) + apellidos.charAt(0)).toUpperCase();
    return initials || 'U';
  }

  getUserPermissions(): string[] {
    if (!this.currentUser) return [];

    const permissions: string[] = [];

    switch (this.currentUser.tipo) {
      case 'Administrador':
        permissions.push(
          'Gestión completa del sistema',
          'Crear y eliminar usuarios',
          'Gestionar documentos y categorías',
          'Administrar lectores y préstamos',
          'Generar reportes completos',
          'Configuración del sistema'
        );
        break;
      
      case 'Bibliotecario':
        permissions.push(
          'Gestionar documentos',
          'Registrar y editar lectores',
          'Procesar préstamos y devoluciones',
          'Generar reportes básicos',
          'Consultar información del sistema'
        );
        break;
      
      case 'Consultor':
        permissions.push(
          'Consultar documentos',
          'Ver información de lectores',
          'Consultar préstamos',
          'Generar reportes de consulta'
        );
        break;
      
      case 'Lector':
        permissions.push(
          'Consultar catálogo de documentos',
          'Ver historial personal de préstamos',
          'Solicitar préstamos'
        );
        break;
      
      default:
        permissions.push('Permisos básicos de consulta');
    }

    return permissions;
  }

  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }

  logout(): void {
    this.authService.logout();
  }
}