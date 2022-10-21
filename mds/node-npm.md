### **Node**

Node es un entorno multiplataforma para ejecutar JavaScript fuera del navegador, tiene su origen en el 2009 (Ryan Lenhiart).
<br>
<br>

#### **Instalación**

[Descargar LTS](https://nodejs.org/es/download/)
```
node -v
npm -v
```

**Versiones recomendadas:** 12.x.x, 14.x.x y 16.x.x
<br>
<br>

#### **Que se puede hacer con node**

- Crear API Rest.
- Acceder a bases de datos relacionales y no relacionales.
- Generar páginas dinámicas en un servidor web. => server side render
- Crear, leer y escribir archivos.
- Crear, procesar y almacenar archivos.

<br>
<br>
**Elementos de node**

Dentro de node se utilizan los módulos y las callbacks.

- **Módulo:** Permiten aislar parte de nuestro código en diferentes archivos y mandarlos llamar sólo cuándo los necesitamos.

  Existen dos **formas de utilizar módulos** en node:

  - Commun JS.
  - ES6 Imports.
- **Callback:** Es una funcion que se pasa como parametro a otra funcion.
<br>
<br>

#### **Diferencias entre Node y JS**
| JavaScript| NodeJS|
| ----- | ---- |
| Lenguaje de scripting. | Entorno de ejecución. |
| Motor del navegador | V8 |
| Interactúa con el DOM (Web API) | Interactúa con el servidor |
| Libevent | Libuv |
| Ninguno de los dos tiene un API para hacer solicitudes http o utilizar temporizadores. |

<br>
<br>

### **Npm**

Node es un entorno multiplataforma para ejecutar JavaScript fuera del navegador, tiene su origen en el 2009 (Ryan Lenhiart).

Node Package Manager o manejador de paquetes (gestor de dependencias) de node. 
Se compone de 2 partes:
* Una herramienta para la terminal (CLI).
* Un repositorio online para publicar paquetes de software libre.

```
# Inicializar proyecto npm
npm init

# Instalar dependencias globalmente
npm i -g <package-name>

# Instalar dependencias en el proyecto
npm i <package-name>

# Instalar dependencias de desarrollo en el proyecto
npm i -D <package-name>

# Ejecutar comandos de la parte scripts del package.json
npm run my-command-in-scripts
```

**Scaffold Npm**

Un scaffold es la estructura de carpetas y archivos de un proyecto.

* **node_modules:** Carpeta donde se instalan las dependencias de un proyecto npm, normalmente está carpeta se agrega al .gitignore.
* **package.json:** Guardan las dependencias y los comandos de node.
* **package-lock.json:** Guarda un snapshot de las dependencias que se instalaron en un determinado momento.