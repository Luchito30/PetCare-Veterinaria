<image src="public/images/icons-petcar.png" alt="logo" style="width:130px;height:130px;">

# PetCare Servicios Veterinarios

### Introducción

<p style="text-align: justify;">PetCare Servicios Veterinarios es un sitio para una veterinaria con atención de consultas, pequeñas cirugías y estudios diagnósticos, que ofrece servicios de baño y peluquería, también tiene en su local venta de alimentos y diferentes accesorios para mascotras.
Responde a un diseño en el que el usuario pueda conocer sobre los servicios que se brindan, además pueda tener la posibilidad de hacer consultas personalizadas a través de un formulario de contacto; más adelante en una segunda etapa del trabajo también pueda registrarse como cliente y reservar turnos para  los diferentes servicios.</p>

### Desarrollo del proyecto

<p style="text-align: justify;">Elegido el tema del proyecto, se  decide el nombre, el logotipo y las secciones del sitio.
En una primera etapa, se define para el sitio web una estructura de 4 páginas html para distrubuir el contenido: Home; Nosotros, Servicios y Contacto.</p>

<p style="text-align: justify;">Todas las página tienen sus propias secciones definidas pero comparten un mismo Header y Footer. También se unifica la paleta de colores a utilizar y la tipografía</p>

<p style="text-align: justify;">Cada miembro del grupo se encargó de la realización de una de las páginas del proyecto para finalmente unificarlo y publicarlo.</p>

### Estructura del sitio

**Home:**

En la página de inicio, encontrarás un atractivo carrusel de imágenes que se desplazan cada 8 segundos. Este carrusel ha sido diseñado mediante CSS y JavaScript. Cada imagen contiene información útil y te brinda la posibilidad de solicitar un turno de manera rápida a través de un formulario de consulta. Además, es importante destacar que el diseño de la página de inicio es completamente responsive, lo que significa que se adapta perfectamente a dispositivos móviles, tabletas y computadoras de escritorio.

En la siguiente sección, hallarás el nombre de nuestra veterinaria, con un efecto "hover" que permite que el título crezca y cambie de color al pasar el cursor sobre él, junto con una breve descripción que destaca la esencia de Petcare.

Continuando, en la sección posterior, encontrarás una breve descripción de los servicios que ofrece nuestra veterinaria. Hemos implementado una función en JavaScript que garantiza que las tarjetas de servicios aparezcan cuando realizas un scroll y desaparezcan cuando te alejas de esta sección. Además, las tarjetas tienen un efecto de "hover" que las hace expandirse y muestra información adicional de manera intuitiva.
 
**Nosotros:**

En la sección ** Nosotros** se agrega un carrusel con 3 imágenes las cuales se van recorriendo haciendo click en los puntos. El movimiento se dio a través de un JS

También contiene un párrafo con una pequeña descripción de la historia de la veterinaria, con los estilos de css se le dio un fondo y borde.

La vista de los mismos para qué ve vallan adaptando a los diferentes dispositivos se va modificando a través de media queries

**Servicios:**

<p>La página de servicios ofrece una breve información al usuario de los servicios que la  veterinaria tiene tanto online como lo que dispone en el local. Permite solicitar turnos y realizar consultas a través de la página de contacto del sitio o por Whatsapp</p>
<p> Es una página básica que tiene imágenes con animaciones simples en efectos hover CSS como tansparencias y bordes. </p>
<p> Se utilizaron íconos de https://www.flaticon.es/, https://kit.fontawesome.com; tipografia de fonts.googleapis.com y fotos del sitio https://www.freepik.es/.</p>

**Contacto:**

Presenta información de la veterinaria, como su dirección física, que se muestra en un mapa de Google Maps incrustado para que los usuarios puedan ver de manera rápida y sencilla la ubicación exacta de la clínica. Se informa el número de teléfono de la veterinaria. Se incluyen enlaces que permiten enviar un correo electrónico, enviar un mensaje de WhatsApp o visitar el perfil de Instagram de la clínica.
La página cuenta con un formulario de contacto que permite a los visitantes enviar mensajes o consultas directamente a la veterinaria. Una vez que se completa el formulario y se valida, los mensajes se envían a la dirección de correo electrónico de la veterinaria, consultas.petcare@gmail.com.
Para garantizar la funcionalidad del formulario de contacto, se utilizó JavaScript para validar los datos ingresados por los usuarios. Para asegurarse de que los mensajes enviados a través del formulario de contacto lleguen de manera confiable a la veterinaria, se integró la API Formsubmit utilizando una función Ajax.

**Header y Footer:**

Las cuatro páginas de Petcare comparten un encabezado (header) y un pie de página (footer) idénticos. El encabezado es completamente responsive, adaptándose sin problemas a dispositivos móviles. En la versión móvil, se presenta el logo de la página junto con un menú de hamburguesa creado con CSS. Al hacer clic en este menú, se despliega un submenú que incluye opciones para acceder a la página de inicio, los servicios, información sobre nosotros y contacto. Cada opción en el submenú dirige al usuario a la página correspondiente y presenta un efecto "hover" que cambia el color de fondo para una experiencia de usuario más atractiva. A partir de una resolución de pantalla de 1000px, el menú de hamburguesa se oculta, dejando únicamente el logo visible, y aparece una barra de navegación con enlaces directos a las páginas de inicio, servicios, sobre nosotros y contacto. Estos enlaces también presentan efectos "hover" que cambian el color del texto y añaden un sutil subrayado.

El pie de página también es completamente responsive, adaptándose a diferentes tamaños de pantalla. A partir de los 768px, las secciones del pie de página, que inicialmente están dispuestas una debajo de la otra, se reorganizan automáticamente para mostrarse una al lado de la otra con flex-direction: row. Esto garantiza que el diseño del pie de página se ajuste a las necesidades de visualización de los usuarios en diferentes dispositivos.

En el pie de página, se encuentra el logo de Petcare con una animación que realiza una rotación de 180 grados de manera infinita. Además, hallarás iconos de redes sociales que redirigen a las correspondientes cuentas de la veterinaria. Estos iconos cuentan con efectos "hover" que los hacen crecer y cambian el color de fondo al pasar el cursor sobre ellos. En el pie de página también se incluyen tres secciones informativas. La primera sección proporciona información de atención al cliente, incluyendo números de teléfono y un correo electrónico; al hacer clic en el correo electrónico, se abre automáticamente la aplicación de correo del usuario. La segunda sección presenta un menú que enlista todas las páginas del sitio web para una navegación rápida y sencilla. Finalmente, la tercera sección es un formulario de suscripción al boletín de noticias, diseñado para recibir información de la veterinaria directamente en la bandeja de entrada del usuario.