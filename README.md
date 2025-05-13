# Configuración del Entorno

## Instalación de PHP
1. Descargar PHP desde este enlace (https://windows.php.net/downloads/releases/php-8.4.6-nts-Win32-vs17-x64.zip)
2. Extraer en C:\php
3. Extraer el contenido del ZIP en esta carpeta
4. En la carpeta de PHP, buscar el archivo php.ini-development
5. Hacer una copia y renombrarla a php.ini
6. Abrir php.ini y realizar estos cambios:
    Descomentar extension_dir = "ext" (eliminar el punto y coma del inicio)
    Descomentar extensiones comunes como extension=mysqli, extension=openssl, etc.
7. Añadir PHP al PATH:
    Hacer clic derecho en "Este equipo" o "Mi PC" y seleccionar "Propiedades"
    Hacer clic en "Configuración avanzada del sistema"
    Hacer clic en "Variables de entorno"
    Buscar "Path" en Variables del sistema y hacer clic en "Editar"
    Hacer clic en "Nuevo" y añadir C:\php
    Hacer clic en "Aceptar" en todos los diálogos
    Reiniciar la línea de comandos (o el terminal de VS Code)

## Instalar dependencias

```bash 
npm install
```

## Iniciar frontend

```bash 
nmp run serve
```

## Iniciar servidores (PHP y Node)
```bash
cd backend
php -S localhost:3001
node .\app.mjs
```
