# 📚 Sistema CEDIS - Centro de Documentación de Ingeniería de Sistemas

## 🎯 Descripción General

El Sistema CEDIS es una plataforma web completa para la gestión de documentos académicos de la Facultad de Ingeniería de Sistemas de la Universidad Nacional de San Agustín de Arequipa (UNSA). 

### 🏛️ Institución
- **Universidad**: Universidad Nacional de San Agustín de Arequipa
- **Facultad**: Ingeniería de Sistemas
- **Sistema**: Centro de Documentación (CEDIS)
- **Año**: 2024-2025

## 🚀 Características Principales

### ✨ Funcionalidades Core
- 🔐 **Autenticación segura** con Google OAuth (@unsa.edu.pe)
- 📚 **Gestión de documentos** (libros, tesis, diapositivas)
- 👥 **Administración de lectores** (estudiantes, docentes, administrativos)
- 📋 **Control de préstamos** con fechas y estados
- 📊 **Reportes y estadísticas** en tiempo real
- 🏷️ **Categorización** de documentos por áreas

### 🛡️ Seguridad y Permisos
- **Administrador**: Control total del sistema
- **Bibliotecario**: Gestión de documentos y préstamos
- **Consultor**: Solo consulta de información
- **Lector**: Acceso limitado a catálogo

## 🏗️ Arquitectura del Sistema

### 📋 Stack Tecnológico

#### Backend
- **Framework**: NestJS (Node.js + TypeScript)
- **Base de Datos**: PostgreSQL
- **ORM**: TypeORM
- **Autenticación**: JWT + Google OAuth 2.0
- **Arquitectura**: Hexagonal (Clean Architecture)

#### Frontend
- **Framework**: Angular 14
- **UI Framework**: Bootstrap + Light Bootstrap Dashboard
- **Autenticación**: JWT + Guards
- **Estado**: RxJS + Services

#### DevOps
- **Contenedores**: Docker + Docker Compose
- **Base de Datos**: PostgreSQL en contenedor
- **Administración DB**: pgAdmin

## 📊 Diagramas del Sistema

Los diagramas están disponibles en los siguientes archivos:
- `diagrams/entity-relationship.puml` - Diagrama Entidad-Relación
- `diagrams/system-architecture.puml` - Arquitectura del Sistema
- `diagrams/authentication-flow.puml` - Flujo de Autenticación
- `diagrams/use-cases.puml` - Casos de Uso
- `diagrams/deployment.puml` - Diagrama de Despliegue

## 🔄 Integración Frontend-Backend

### 🌐 Comunicación
- **Protocolo**: HTTP/HTTPS REST API
- **Formato**: JSON
- **Autenticación**: Bearer Token (JWT)
- **CORS**: Configurado para desarrollo y producción

### 🔐 Flujo de Autenticación
1. Usuario accede al frontend
2. Clic en "Ingresar con Correo UNSA"
3. Redirección a Google OAuth (backend)
4. Validación de dominio @unsa.edu.pe
5. Generación de JWT token
6. Redirección al frontend con token
7. Establecimiento de sesión
8. Acceso al dashboard

## 📈 Métricas y Rendimiento

### 🎯 Objetivos de Rendimiento
- **Tiempo de carga inicial**: < 3 segundos
- **Tiempo de autenticación**: < 5 segundos
- **Respuesta de API**: < 500ms promedio
- **Disponibilidad**: 99.9% uptime objetivo

### 📊 Capacidades del Sistema
- **Usuarios concurrentes**: 100+
- **Documentos**: Ilimitados
- **Préstamos simultáneos**: 1000+
- **Almacenamiento**: Escalable con PostgreSQL

## 🛠️ Instalación y Configuración

### 📋 Prerrequisitos
- Node.js 18+
- Docker y Docker Compose
- Cuenta Google Cloud (para OAuth)

### 🚀 Instalación Rápida
```bash
# Clonar repositorio
git clone [repository-url]

# Backend
cd backend
npm install
docker-compose up -d  # Base de datos
npm run start:dev

# Frontend
cd frontend
npm install
npm start
```

## 🔧 Configuración de Producción

### 🌐 Variables de Entorno
```env
# Google OAuth
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
GOOGLE_CALLBACK_URL=https://your-domain.com/api/auth/google/callback

# JWT
JWT_SECRET=your_secure_secret
JWT_EXPIRES_IN=1h

# Database
DATABASE_URL=postgresql://user:password@host:port/database
```

## 📚 Documentación Técnica

### 🔗 Enlaces Importantes
- **API Documentation**: `/api/docs` (Swagger)
- **Database Schema**: Ver diagramas ER
- **Postman Collection**: `backend/pruebas.json`

### 🧪 Testing
- **Backend**: Jest + Supertest
- **Frontend**: Jasmine + Karma
- **E2E**: Protractor
- **API Testing**: Postman Collection incluida

## 👥 Equipo de Desarrollo

### 🎓 Información Académica
- **Curso**: Desarrollo de Sistemas Web
- **Docente**: [Nombre del docente]
- **Estudiante**: [Tu nombre]
- **Semestre**: 2024-II

## 📞 Soporte y Contacto

### 🆘 Soporte Técnico
- **Email**: soporte@cedis.unsa.edu.pe
- **Documentación**: Ver carpeta `/docs`
- **Issues**: GitHub Issues

---

*Sistema desarrollado para la Universidad Nacional de San Agustín de Arequipa - Facultad de Ingeniería de Sistemas*