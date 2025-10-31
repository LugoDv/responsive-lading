# Positivus Landing (resumen rápido)

Proyecto de landing estática creada con HTML, CSS y un poco de JavaScript.

Qué hace

- Diseño responsivo con enfoque móvil-first para ciertas interacciones.
- Hero: en mobile se muestra una imagen específica (`.hero-image--mobile`) colocada entre el H1 y el párrafo.
- Carrusel ligero en la sección de casos (`.cases`) usando CSS scroll-snap (solo en mobile).
- Menú responsive: panel lateral en mobile que se abre con la clase `show-menu` en `#nav-menu`. El toggle actualiza `aria-expanded` y cierra al clicar enlaces.

Archivos clave

- `index.html` — marcado HTML principal.
- `style.css` — estilos principales, media queries y reglas mobile (breakpoint: `max-width: 680px`).
- `script.js` — control mínimo del menú (toggle, aria, cierre al clicar enlaces).

Cómo ver en local

1. Abrir terminal en la carpeta del proyecto.
2. Levantar un servidor simple (ejemplo con Python):

```fish
python3 -m http.server 8000
```

3. Abrir `http://localhost:8000` en el navegador y probar en una ventana estrecha o con las herramientas de DevTools en modo móvil.

Notas de debugging (problemas conocidos y pasos rápidos)

- Si el menú mobile queda por debajo de otros elementos (p. ej. hints del carrusel), haz un hard reload (Ctrl+Shift+R) y verifica en DevTools que el `ul` dentro de `#nav-menu` tiene `top: 0` y `z-index: 9999` cuando está abierto.
- Para comprobar visibilidad del close/CTA: inspecciona `.nav__close` y `.nav__cta` y confirma que se aplican las reglas `#nav-menu.show-menu .nav__close` y `#nav-menu.show-menu .nav__cta`.
- Si algo sigue apareciendo encima: busca ancestros con `transform` o `filter` (crean stacking contexts) y pruébalos temporalmente removiéndolos para verificar el comportamiento.
- Si prefieres, puedo añadir reglas de depuración temporales (bordes/colores) o loggers en `script.js` para ver cuándo se añade/quita `.show-menu`.
