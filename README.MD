# Retail Off

**Retail Off** es una aplicación móvil desarrollada con Ionic 7 y Angular 18 que permite a los usuarios gestionar sus servicios de retail, escanear códigos QR, revisar el historial de actividades y más. La aplicación está conectada con Firebase para la autenticación de usuarios y la gestión de datos.

## Características Principales

### 1. **Autenticación de Usuarios**
   - Registro de nuevos usuarios y login.
   - Soporte para autenticación mediante Firebase.
   - Gestión de sesión de usuarios, incluyendo el cierre de sesión.

### 2. **Perfil del Usuario**
   - Los usuarios pueden editar y visualizar su perfil.
   - La información del perfil incluye nombre de usuario y correo electrónico.
   - Se utiliza Firebase Firestore para almacenar y gestionar la información del usuario.

### 3. **Mapa (Leaflet Maps)**
   - Integración con Leaflet Maps para mostrar la ubicación de locales o puntos de interés.
   - Los usuarios pueden interactuar con el mapa y obtener direcciones.

### 4. **Escáner de Códigos de Barras y QR**
   - Los usuarios pueden escanear códigos de barras y códigos QR usando la cámara del dispositivo.
   - Los datos escaneados se procesan y se muestran en la aplicación para futuras acciones.

### 5. **Historial de Actividades**
   - Registro de las actividades realizadas por el usuario en la aplicación.
   - El historial incluye interacciones con el mapa, el escáner y otros servicios de la app.

### 6. **Servicios**
   - Página con listado de servicios ofrecidos.
   - Detalles de los servicios disponibles para los usuarios.

### 7. **Contacto**
   - Sección para que los usuarios se pongan en contacto con el soporte o la empresa.

## Tecnologías Utilizadas

- **Ionic 7 Framework**: Para la creación de la interfaz de usuario.
- **Angular 18**: Framework de frontend para la lógica de la aplicación.
- **Firebase**: Para la autenticación de usuarios y base de datos.
- **Leaflet Maps API**: Para la integración de mapas interactivos.
- **Barcode/QR Scanner**: Para la funcionalidad de escaneo de códigos.
- **SCSS**: Para los estilos personalizados.

## Capturas de Pantalla.

### 1. Pantalla de Registro

![Pantalla de Registro](/src/assets/img/register-2.jpg)

### 2. Pantalla de Login

![Pantalla de Login](/src/assets/img/login-2.jpg)

### 3. Pantalla de Inicio

![Pantalla de Inicio](/src/assets/img/menu-welcome-2.jpg)

### 4. Pantalla de Menu lateral

![Pantalla de Menu Lateral](/src/assets/img/menu-lateral-2.jpg)

### 5. Pantalla de User

![Pantalla de Info-User](/src/assets/img/info-user-2.jpg)

### 6. Mapa Integrado

![Mapa](/src/assets/img/map-1.jpg)

## Instalación

### Requisitos previos

- Node.js instalado en tu sistema.
- Cuenta en Firebase configurada para la autenticación y Firestore.

