import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

export interface PaginationParams {
  page?: number;
  limit?: number;
  search?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  currentPage: number;
  totalPages: number;
  limit: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  // Métodos para Categorías
  getCategorias(params?: PaginationParams): Observable<PaginatedResponse<any>> {
    let httpParams = new HttpParams();
    if (params) {
      if (params.page) httpParams = httpParams.set('page', params.page.toString());
      if (params.limit) httpParams = httpParams.set('limit', params.limit.toString());
      if (params.search) httpParams = httpParams.set('search', params.search);
    }

    return this.http.get<PaginatedResponse<any>>(`${this.apiUrl}/categorias`, {
      headers: this.authService.getAuthHeaders(),
      params: httpParams
    });
  }

  createCategoria(categoria: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/categorias`, categoria, {
      headers: this.authService.getAuthHeaders()
    });
  }

  updateCategoria(id: number, categoria: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/categorias/${id}`, categoria, {
      headers: this.authService.getAuthHeaders()
    });
  }

  deleteCategoria(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/categorias/${id}`, {
      headers: this.authService.getAuthHeaders()
    });
  }

  // Métodos para Documentos
  getDocumentos(params?: PaginationParams): Observable<PaginatedResponse<any>> {
    let httpParams = new HttpParams();
    if (params) {
      if (params.page) httpParams = httpParams.set('page', params.page.toString());
      if (params.limit) httpParams = httpParams.set('limit', params.limit.toString());
      if (params.search) httpParams = httpParams.set('search', params.search);
    }

    return this.http.get<PaginatedResponse<any>>(`${this.apiUrl}/documentos`, {
      headers: this.authService.getAuthHeaders(),
      params: httpParams
    });
  }

  getDocumentosByCategoria(categoriaId: number, params?: PaginationParams): Observable<PaginatedResponse<any>> {
    let httpParams = new HttpParams();
    if (params) {
      if (params.page) httpParams = httpParams.set('page', params.page.toString());
      if (params.limit) httpParams = httpParams.set('limit', params.limit.toString());
      if (params.search) httpParams = httpParams.set('search', params.search);
    }

    return this.http.get<PaginatedResponse<any>>(`${this.apiUrl}/documentos/categoria/${categoriaId}`, {
      headers: this.authService.getAuthHeaders(),
      params: httpParams
    });
  }

  createDocumento(documento: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/documentos`, documento, {
      headers: this.authService.getAuthHeaders()
    });
  }

  updateDocumento(id: number, documento: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/documentos/${id}`, documento, {
      headers: this.authService.getAuthHeaders()
    });
  }

  deleteDocumento(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/documentos/${id}`, {
      headers: this.authService.getAuthHeaders()
    });
  }

  // Métodos para Lectores
  getLectores(params?: PaginationParams): Observable<PaginatedResponse<any>> {
    let httpParams = new HttpParams();
    if (params) {
      if (params.page) httpParams = httpParams.set('page', params.page.toString());
      if (params.limit) httpParams = httpParams.set('limit', params.limit.toString());
      if (params.search) httpParams = httpParams.set('search', params.search);
    }

    return this.http.get<PaginatedResponse<any>>(`${this.apiUrl}/lectores`, {
      headers: this.authService.getAuthHeaders(),
      params: httpParams
    });
  }

  createLector(lector: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/lectores`, lector, {
      headers: this.authService.getAuthHeaders()
    });
  }

  updateLector(id: number, lector: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/lectores/${id}`, lector, {
      headers: this.authService.getAuthHeaders()
    });
  }

  deleteLector(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/lectores/${id}`, {
      headers: this.authService.getAuthHeaders()
    });
  }

  // Métodos para Préstamos
  getPrestamos(params?: PaginationParams): Observable<PaginatedResponse<any>> {
    let httpParams = new HttpParams();
    if (params) {
      if (params.page) httpParams = httpParams.set('page', params.page.toString());
      if (params.limit) httpParams = httpParams.set('limit', params.limit.toString());
      if (params.search) httpParams = httpParams.set('search', params.search);
    }

    return this.http.get<PaginatedResponse<any>>(`${this.apiUrl}/prestamos`, {
      headers: this.authService.getAuthHeaders(),
      params: httpParams
    });
  }

  getPrestamosPendientes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/prestamos/pendientes`, {
      headers: this.authService.getAuthHeaders()
    });
  }

  getPrestamosByLector(lectorId: number, params?: PaginationParams): Observable<PaginatedResponse<any>> {
    let httpParams = new HttpParams();
    if (params) {
      if (params.page) httpParams = httpParams.set('page', params.page.toString());
      if (params.limit) httpParams = httpParams.set('limit', params.limit.toString());
    }

    return this.http.get<PaginatedResponse<any>>(`${this.apiUrl}/prestamos/lector/${lectorId}`, {
      headers: this.authService.getAuthHeaders(),
      params: httpParams
    });
  }

  createPrestamo(prestamo: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/prestamos`, prestamo, {
      headers: this.authService.getAuthHeaders()
    });
  }

  updatePrestamo(id: number, prestamo: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/prestamos/${id}`, prestamo, {
      headers: this.authService.getAuthHeaders()
    });
  }

  registrarDevolucion(id: number, devolucion: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/prestamos/${id}/devolucion`, devolucion, {
      headers: this.authService.getAuthHeaders()
    });
  }

  deletePrestamo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/prestamos/${id}`, {
      headers: this.authService.getAuthHeaders()
    });
  }

  // Métodos para Usuarios
  getUsuarios(params?: PaginationParams): Observable<PaginatedResponse<any>> {
    let httpParams = new HttpParams();
    if (params) {
      if (params.page) httpParams = httpParams.set('page', params.page.toString());
      if (params.limit) httpParams = httpParams.set('limit', params.limit.toString());
      if (params.search) httpParams = httpParams.set('search', params.search);
    }

    return this.http.get<PaginatedResponse<any>>(`${this.apiUrl}/usuarios`, {
      headers: this.authService.getAuthHeaders(),
      params: httpParams
    });
  }

  createUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/usuarios`, usuario, {
      headers: this.authService.getAuthHeaders()
    });
  }

  updateUsuario(id: number, usuario: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/usuarios/${id}`, usuario, {
      headers: this.authService.getAuthHeaders()
    });
  }

  deleteUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/usuarios/${id}`, {
      headers: this.authService.getAuthHeaders()
    });
  }

  // Método para obtener perfil de usuario
  getUserProfile(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuarios/profile/${id}`, {
      headers: this.authService.getAuthHeaders()
    });
  }
}