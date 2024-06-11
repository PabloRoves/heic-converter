toPDF es un proyecto de practica para crear archivos .PDF

10/06/2024 00:00 - Comence a implementar la solución que me propuso chatGPT utilizando jsPDF y file-type.

10/06/2024 07:06 - Hice varias pruebas y le di bastantes vueltas al código.
Primero probe con los paquetes "jspdf" y "file-type" siguiendo el ejemplo de chatGPT, pero luego de batallar bastante, no lo pude hacer funcionar (me daba problemas con el import de file-type).

Probe implementado esta solución:
fuente: https://www.youtube.com/watch?v=jpYdT6OzsUs&t=252s&ab_channel=CodingShiksha

Casi pude lograrlo, pero descubrí que jsPDF no tiene soporte nativo para archivos heic (y parece que la gran mayoría de las librerías para convertir a PDF tampoco). jsPDF me dice que proporcione un pluggin.

Otra forma seria importar otra librería, que si me permita convertir el .heic a .jpeg por ejemplo y luego usar jsPDF.

La sugerencia que me había dado chatGPT, fue usar la libreria file-type, para verificar el tipo de dato del archivo y en caso que sea .heic (este si lo reconoce) convertirlo a un ArrayBuffer (también le llaman "Blob"), luego a JPEG, y finalmente lo guarda como .pdf. Vamos a probar eso.

10/06/2024 07:32 - Parece que no puedo convertirlo directamente a heic "forzandolo".
Mañana probare con la librería heic2any.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
