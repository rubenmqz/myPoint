# Instrucciones

-- Clonar la repo

-- Instalar módulos necesarios (en la raiz) con:

```bash
npm install
bower install
```

-- Asegurarse de que ha descargado el módulo gulp correcto indicado en package.json (4.0). Si por algún motivo descarga una versión anterior (por ejemplo 3.9.2), dará errores al ejecutar gulp, y se deberá descargar de nuevo el paquete gulp 4.0.

-- Ejecutar el servidor SparREST, que está en la carpeta "dist" (no está en la raiz!)

```bash
python server.py
```

-- Ejecutar gulp en la raiz

```bash
gulp
```

-- Para ejecutar una versión para producción, que incluye compresión de css, js e img

```bash
gulp --production
```
