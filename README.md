<image src="public/images/icons-petcar.png" alt="logo" style="width:130px;height:130px;">

## PetCare Servicios Veterinarios

### Introducción

<p style="text-align: justify;">PetCare Servicios Veterinarios es un sitio para una veterinaria con atención de consultas, pequeñas cirugías y estudios diagnósticos, que ofrece servicios de baño y peluquería, también tiene en su local venta de alimentos y diferentes accesorios para mascotras.
Responde a un diseño en el que el usuario pueda conocer sobre los servicios que se brindan, además pueda tener la posibilidad de hacer consultas personalizadas a través de un formulario de contacto; más adelante en una segunda etapa del trabajo también pueda registrarse como cliente y reservar turnos para  los diferentes servicios.</p>

### Desarrollo del proyecto

<p style="text-align: justify;">Elegido el tema del proyecto, se  decide el nombre, el logotipo y las secciones del sitio.
En una primera etapa, se define para el sitio web una estructura de 4 páginas html para distrubuir el contenido: Home; Nosotros, Servicios y Contacto.</p>

<p style="text-align: justify;">Todas las página tienen sus propias secciones definidas pero comparten un mismo Header y Footer. También se unifica la paleta de colores a utilizar y la tipografía</p>

<p style="text-align: justify;">Cada miembro del grupo se encargó de la realización de una de las páginas del proyecto para finalmente unificarlo y publicarlo.</p>

### Estructura del sitio

###### Home

###### Nosotros

En la sección ** Nosotros** se agrega un carrusel con 3 imágenes las cuales se van recorriendo haciendo click en los puntos. El movimiento se dio a través de un JS

También contiene un párrafo con una pequeña descripción de la historia de la veterinaria, con los estilos de css se le dio un fondo y borde.

La vista de los mismos para qué ve vallan adaptando a los diferentes dispositivos se va modificando a través de media queries

###### Servicios

###### Contacto

Presenta información de la veterinaria, como su dirección física, que se muestra en un mapa de Google Maps incrustado para que los usuarios puedan ver de manera rápida y sencilla la ubicación exacta de la clínica. Se informa el número de teléfono de la veterinaria. Se incluyen enlaces que permiten enviar un correo electrónico, enviar un mensaje de WhatsApp o visitar el perfil de Instagram de la clínica.
La página cuenta con un formulario de contacto que permite a los visitantes enviar mensajes o consultas directamente a la veterinaria. Una vez que se completa el formulario y se valida, los mensajes se envían a la dirección de correo electrónico de la veterinaria, consultas.petcare@gmail.com.
Para garantizar la funcionalidad del formulario de contacto, se utilizó JavaScript para validar los datos ingresados por los usuarios. Para asegurarse de que los mensajes enviados a través del formulario de contacto lleguen de manera confiable a la veterinaria, se integró la API Formsubmit utilizando una función Ajax.
