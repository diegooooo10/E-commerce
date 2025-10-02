# E-commerce App

---

¡Bienvenido a mi proyecto de e-commerce! Esta es una aplicación de prueba construida completamente en el frontend para mostrar una experiencia de compra completa, desde el registro de usuario hasta la gestión de un carrito y un historial de compras.

## Características Principales

* **Gestión de estado del servidor con Tanstack Query:** Se utiliza esta librería para manejar el fetching y la sincronización de datos asíncronos con la API de DummyJSON, mejorando el rendimiento y la experiencia de usuario.
* **Gestión de estado del cliente:** Utilización de **Zustand** para un manejo eficiente y centralizado de los datos de la aplicación.
* **Validación de formularios:** Implementación de **Zod** y **React Hook Form** para asegurar que los datos de los formularios de login y registro sean válidos.
* **Manejo de rutas:** Utilización de React Router DOM para gestionar la navegación entre las distintas vistas.
* **Consumo de API:** Se usa la API de **DummyJSON** para simular un catálogo de productos, un carrito de compras y más.
* **Flujo de usuario completo:** Se incluye un flujo de usuario que abarca **Login**, **Registro**, **Carrito de Compras** y **Historial de Compras**.

## Tecnologías Utilizadas

* **React:** Biblioteca principal para la interfaz de usuario.
* **Vite:** Herramienta de construcción para un entorno de desarrollo rápido.
* **Bun:** Manejador de paquetes de JavaScript de alto rendimiento.
* **Zustand:** Librería para la gestión de estado.
* **React Router DOM:** Para el manejo de las rutas.
* **Zod & React Hook Form:** Para la validación y gestión de formularios.
* **Tailwind CSS:** Framework de CSS para un estilizado rápido y moderno.
* **Tanstack Query:** Para la gestión del estado del servidor.
* **DummyJSON:** API utilizada para obtener datos simulados.
* **TypeScript:** Tipado estático básico para mayor robustez y mantenibilidad.

## Instalación y Uso

Sigue estos sencillos pasos para tener una copia local del proyecto y ejecutarlo.

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/diegooooo10/E-commerce.git
    ```

2.  **Instala las dependencias:**
    ```bash
    bun install
    ```

3.  **Inicia la aplicación en modo desarrollo:**
    ```bash
    bun run dev
    ```

La aplicación se ejecutará en tu navegador en `http://localhost:5173`.

## Demostración

Puedes ver una demo en vivo de este proyecto en el siguiente enlace:

* **`https://e-commerce-react-ts.netlify.app/`**

---
