# 🎬 SCRIPT PARA DEMOSTRACIÓN EN VIVO

## 🎯 Guía paso a paso para la demostración del Sistema CEDIS

---

## 🚀 **PREPARACIÓN PREVIA** (5 minutos antes)

### ✅ **Checklist Técnico**
- [ ] Backend corriendo en `http://localhost:3000`
- [ ] Frontend corriendo en `http://localhost:4200`
- [ ] Base de datos PostgreSQL activa
- [ ] Conexión a internet estable (para Google OAuth)
- [ ] Navegador con cache limpio
- [ ] Consola de desarrollador abierta (F12)

### 📊 **Datos de Prueba Preparados**
- [ ] Usuario administrador: `jlunaq@unsa.edu.pe`
- [ ] Al menos 3 categorías creadas
- [ ] Al menos 5 documentos registrados
- [ ] Al menos 3 lectores registrados
- [ ] Al menos 2 préstamos activos

---

## 🎬 **DEMOSTRACIÓN PASO A PASO**

### 1. 🔐 **AUTENTICACIÓN** (3-4 minutos)

#### **Paso 1.1: Mostrar pantalla de login**
```
🗣️ "Comenzamos accediendo al sistema CEDIS..."
```
- Abrir `http://localhost:4200`
- Mostrar la pantalla de login limpia
- Destacar el logo de UNSA y el mensaje institucional

#### **Paso 1.2: Explicar la seguridad**
```
🗣️ "El sistema solo permite acceso a cuentas institucionales @unsa.edu.pe..."
```
- Señalar el mensaje "Solo para personal y estudiantes de la UNSA"
- Explicar la restricción de dominio

#### **Paso 1.3: Proceso de autenticación**
```
🗣️ "Vamos a autenticarnos con Google OAuth..."
```
- Hacer clic en "Ingresar con Correo UNSA"
- Mostrar la redirección a Google
- **IMPORTANTE**: Usar cuenta `jlunaq@unsa.edu.pe`
- Mostrar el proceso de validación

#### **Paso 1.4: Redirección exitosa**
```
🗣️ "Una vez autenticado, el sistema nos redirige automáticamente al dashboard..."
```
- Mostrar la redirección automática
- Destacar que no se requiere acción adicional del usuario

---

### 2. 📊 **DASHBOARD Y ESTADÍSTICAS** (4-5 minutos)

#### **Paso 2.1: Vista general del dashboard**
```
🗣️ "Aquí tenemos el dashboard principal con estadísticas en tiempo real..."
```
- Mostrar las 4 tarjetas principales:
  - Total de documentos
  - Total de lectores
  - Total de préstamos
  - Préstamos pendientes

#### **Paso 2.2: Gráficos interactivos**
```
🗣️ "Los gráficos muestran la actividad del sistema de forma visual..."
```
- Señalar el gráfico de pie (estado de documentos)
- Mostrar el gráfico de líneas (actividad mensual)
- Explicar el gráfico de barras (crecimiento anual)

#### **Paso 2.3: Actividad reciente**
```
🗣️ "En tiempo real podemos ver las últimas actividades del sistema..."
```
- Mostrar la tabla de actividades recientes
- Explicar los diferentes tipos de eventos

---

### 3. 📚 **GESTIÓN DE DOCUMENTOS** (5-6 minutos)

#### **Paso 3.1: Navegación al módulo**
```
🗣️ "Navegamos al módulo de gestión de documentos..."
```
- Clic en "Documentos" en el sidebar
- Mostrar la carga de datos desde la API

#### **Paso 3.2: Lista de documentos**
```
🗣️ "Aquí vemos todos los documentos registrados en el sistema..."
```
- Mostrar la tabla con documentos
- Explicar las columnas: fecha, título, categoría, autores
- Destacar la paginación

#### **Paso 3.3: Filtros y búsqueda**
```
🗣️ "El sistema incluye filtros avanzados para localizar documentos..."
```
- Usar el filtro de búsqueda por título
- Aplicar filtro por categoría
- Mostrar filtro por fecha de publicación
- Demostrar que los resultados se actualizan en tiempo real

#### **Paso 3.4: Registro de nuevo documento**
```
🗣️ "Vamos a registrar un nuevo documento..."
```
- Clic en el botón "+" (Agregar documento)
- Llenar el formulario modal:
  - Título: "Inteligencia Artificial Aplicada"
  - Categoría: "Ingeniería de Sistemas"
  - Autores: "Dr. Carlos Mendoza"
  - Fecha de publicación: Fecha actual
- Hacer clic en "Registrar"
- Mostrar que aparece inmediatamente en la lista

---

### 4. 👥 **GESTIÓN DE LECTORES** (4-5 minutos)

#### **Paso 4.1: Módulo de lectores**
```
🗣️ "Ahora veamos la gestión de lectores del sistema..."
```
- Navegar a "Lectores"
- Mostrar la lista de lectores registrados

#### **Paso 4.2: Registro de nuevo lector**
```
🗣️ "Registraremos un nuevo lector estudiante..."
```
- Clic en "+" (Agregar lector)
- Llenar formulario:
  - Nombres: "María Elena"
  - Apellidos: "García Torres"
  - DNI: "12345678"
  - Correo: "20191234@unsa.edu.pe"
  - Tipo: "Estudiante"
- Registrar y mostrar en la lista

#### **Paso 4.3: Funcionalidades adicionales**
```
🗣️ "El sistema permite ver detalles, editar y gestionar lectores..."
```
- Mostrar botón "Ver" (ojo) para detalles
- Mostrar botón "Editar" (lápiz)
- Explicar la funcionalidad de eliminación

---

### 5. 📋 **GESTIÓN DE PRÉSTAMOS** (5-6 minutos)

#### **Paso 5.1: Módulo de préstamos**
```
🗣️ "El corazón del sistema: la gestión de préstamos..."
```
- Navegar a "Préstamos"
- Mostrar lista de préstamos con estados

#### **Paso 5.2: Crear nuevo préstamo**
```
🗣️ "Vamos a procesar un nuevo préstamo..."
```
- Clic en "+" (Nuevo préstamo)
- Llenar formulario:
  - Lector: Seleccionar "María Elena García Torres"
  - Documento: Seleccionar "Inteligencia Artificial Aplicada"
  - Fecha de préstamo: Hoy
  - Fecha de devolución: +14 días
- Procesar préstamo

#### **Paso 5.3: Estados y seguimiento**
```
🗣️ "El sistema controla automáticamente los estados de los préstamos..."
```
- Mostrar diferentes estados: Vigente, Vencido, Devuelto
- Explicar el cálculo automático de vencimientos
- Mostrar filtros por estado y fecha

#### **Paso 5.4: Proceso de devolución**
```
🗣️ "Cuando un libro es devuelto, registramos la devolución..."
```
- Seleccionar un préstamo activo
- Clic en "Registrar devolución"
- Completar fecha de devolución real
- Mostrar cambio de estado a "Devuelto"

---

### 6. 📊 **REPORTES Y ANÁLISIS** (3-4 minutos)

#### **Paso 6.1: Reporte de morosos**
```
🗣️ "Una funcionalidad clave: el reporte de lectores morosos..."
```
- Navegar a "Reportes"
- Mostrar la lista de lectores con préstamos vencidos
- Explicar las columnas de días vencidos

#### **Paso 6.2: Filtros de reportes**
```
🗣️ "Podemos filtrar por rangos de fechas..."
```
- Aplicar filtro de fecha de inicio
- Aplicar filtro de fecha de fin
- Mostrar cómo se actualiza el reporte

#### **Paso 6.3: Exportación**
```
🗣️ "Los reportes se pueden exportar para análisis externo..."
```
- Clic en "Exportar Reporte"
- Mostrar opciones de formato (Excel, PDF, CSV)
- Explicar las opciones de configuración

---

### 7. 👤 **PERFIL DE USUARIO** (2-3 minutos)

#### **Paso 7.1: Información personal**
```
🗣️ "Cada usuario tiene un perfil completo con su información..."
```
- Navegar a "User Profile"
- Mostrar datos del usuario autenticado:
  - Nombre completo: JHON YOSET LUNA QUISPE
  - Correo: jlunaq@unsa.edu.pe
  - Tipo: Administrador
  - Fechas de registro y actualización

#### **Paso 7.2: Estadísticas personales**
```
🗣️ "El perfil incluye estadísticas de actividad del usuario..."
```
- Mostrar estadísticas de préstamos gestionados
- Mostrar documentos creados
- Mostrar lectores gestionados

#### **Paso 7.3: Permisos y roles**
```
🗣️ "Según el tipo de usuario, se muestran los permisos correspondientes..."
```
- Mostrar lista de permisos del administrador
- Explicar la diferencia con otros tipos de usuario

---

### 8. 🔧 **CARACTERÍSTICAS TÉCNICAS** (2-3 minutos)

#### **Paso 8.1: Responsive design**
```
🗣️ "El sistema es completamente responsivo..."
```
- Abrir herramientas de desarrollador (F12)
- Cambiar a vista móvil
- Mostrar cómo se adapta la interfaz
- Probar navegación en móvil

#### **Paso 8.2: Integración en tiempo real**
```
🗣️ "Todas las operaciones se reflejan inmediatamente..."
```
- Abrir Network tab en DevTools
- Realizar una operación (ej: crear documento)
- Mostrar las llamadas HTTP en tiempo real
- Explicar el flujo de datos

#### **Paso 8.3: Manejo de errores**
```
🗣️ "El sistema maneja elegantemente los errores..."
```
- Simular un error (ej: desconectar backend)
- Mostrar mensaje de error amigable
- Reconectar y mostrar recuperación automática

---

## 🎯 **CIERRE DE LA DEMOSTRACIÓN** (2 minutos)

### 📋 **Resumen de lo demostrado**
```
🗣️ "Hemos visto un sistema completo que incluye..."
```
- ✅ Autenticación segura con Google OAuth
- ✅ Dashboard con estadísticas en tiempo real
- ✅ Gestión completa de documentos y lectores
- ✅ Control de préstamos con seguimiento automático
- ✅ Reportes exportables para análisis
- ✅ Interfaz responsiva y moderna
- ✅ Integración completa frontend-backend

### 🚀 **Valor agregado**
```
🗣️ "Este sistema aporta valor real a la institución..."
```
- Automatización de procesos manuales
- Control y trazabilidad completa
- Información para toma de decisiones
- Experiencia de usuario moderna

---

## 🆘 **PLAN DE CONTINGENCIA**

### 🔧 **Si algo falla durante la demo:**

#### **Backend no responde:**
- Mostrar Postman collection con requests preparados
- Explicar la API usando la documentación
- Usar screenshots de respuestas exitosas

#### **Frontend no carga:**
- Mostrar el código fuente relevante
- Explicar la arquitectura usando diagramas
- Usar mockups o screenshots preparados

#### **Google OAuth falla:**
- Explicar el flujo usando el diagrama
- Mostrar el código de autenticación
- Usar datos de ejemplo para continuar

#### **Base de datos no conecta:**
- Mostrar el esquema de base de datos
- Explicar las relaciones usando el ER
- Usar datos de ejemplo en JSON

---

## 💡 **TIPS PARA UNA DEMO EXITOSA**

### 🎯 **Durante la presentación:**
- Hablar claramente y pausadamente
- Explicar cada acción antes de realizarla
- Mostrar tanto la interfaz como el código relevante
- Destacar la integración en cada paso

### 👥 **Interacción con la audiencia:**
- Hacer preguntas retóricas
- Invitar a preguntas específicas
- Relacionar con casos de uso reales
- Mostrar beneficios concretos

### 🔧 **Aspectos técnicos:**
- Mencionar tecnologías específicas
- Explicar decisiones de arquitectura
- Destacar buenas prácticas implementadas
- Mostrar código limpio y organizado

---

## ⏱️ **TIMING SUGERIDO**

| Sección | Tiempo | Acumulado |
|---------|--------|-----------|
| Autenticación | 3-4 min | 4 min |
| Dashboard | 4-5 min | 9 min |
| Documentos | 5-6 min | 15 min |
| Lectores | 4-5 min | 20 min |
| Préstamos | 5-6 min | 26 min |
| Reportes | 3-4 min | 30 min |
| Perfil Usuario | 2-3 min | 33 min |
| Técnico | 2-3 min | 36 min |
| **TOTAL** | **30-36 min** | |

---

*Script de demostración para el Sistema CEDIS - Preparado para exposición académica*