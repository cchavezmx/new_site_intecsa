import "./style.css";

document.querySelector("#app").innerHTML = `
  <div class="bg-gray-100 font-sans pt-20">
    <!-- Navbar -->
    <nav class="fixed top-0 w-full bg-white shadow-lg z-50">
        <div class="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
            <a href="/" class="flex items-center">
                <img src="https://blog-omega-mauve.vercel.app/_next/image?url=%2Flogo%2Fweb-logo.webp&w=96&q=75" alt="Logo Grupo Intecsa" class="h-10 sm:h-12">
                <span class="ml-2 sm:ml-4 text-lg sm:text-xl font-bold text-gray-800">Grupo Intecsa</span>
            </a>
            <div class="hidden md:flex space-x-4 sm:space-x-6">
                <a href="/" class="text-gray-700 hover:text-blue-500 text-sm sm:text-base">Nuestra Empresa</a>
                <a href="https://www.itamx.com" target="_blank" class="text-gray-700 hover:text-blue-500 text-sm sm:text-base">Certificaciones</a>
                <a href="/" class="text-gray-700 hover:text-blue-500 text-sm sm:text-base">Contacto</a>
            </div>
            <div class="md:hidden">
                <button class="text-gray-800 focus:outline-none" id="menu-button">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </div>
    </nav>

    <!-- Modales -->
    <div id="modal-cert" class="fixed inset-0 hidden justify-center items-center p-4"></div> 
    <div id="modal-pdf" class="fixed inset-0 hidden justify-center items-center p-4"></div>
    <!-- Banner -->
    <section class="h-80 px-4 bg-blue-600 text-white py-20 animate-banner-zoom banner-intecsa" >
        <div class="container mx-auto px-4 sm:px-6 text-center md:text-left">
            <h1 class="text-3xl sm:text-4xl font-bold mb-4">Bienvenido a Grupo Intecsa</h1>
            <p class="text-base sm:text-lg w-full sm:w-3/4 lg:w-1/2">Somos una empresa dedicada a la fabricación, comercialización y montaje de instalaciones eléctricas en industrias, comercios y edificios.</p>
        </div>
    </section>

    <!-- Productos Destacados -->
    <section class="container mx-auto px-4 sm:px-6 py-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div id="gellery-cert" class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 class="text-xl sm:text-2xl font-bold mb-4 flex justify-between">
                    Certificaciones
                    <img src="/icons/certificated.svg" alt="Certificaciones" class="h-6 w-16">
                </h3>
                <p class="text-gray-700 text-sm sm:text-base">Lorem tempor qui qui fugiat nisi ad minim. Elit magna elit aliquip irure.</p>
            </div>
            <div id="curriculum-btn" class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 class="text-xl sm:text-2xl font-bold mb-4 flex justify-between">
                     Curriculum
                     <img src="/icons/curriculum.svg" alt="Certificaciones" class="h-6 w-16">
                </h3>
                <p class="text-gray-700 text-sm sm:text-base">Lorem tempor qui qui fugiat nisi ad minim. Elit magna elit aliquip irure.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 class="text-xl sm:text-2xl font-bold mb-4 flex justify-between">
                    Nuestros Catálogos
                    <img src="/icons/package.svg" alt="Certificaciones" class="h-6 w-16">
                </h3>
                <p class="text-gray-700 text-sm sm:text-base">Descarga nuestros catálogos o revisa nuestros productos en una versión en línea.</p>
            </div>
        </div>
    </section>

    <!-- Descripción de Servicios -->
    <section class="bg-gray-50 py-12">
        <div class="container mx-auto px-4 sm:px-6">
            <h2 class="text-2xl sm:text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 class="text-xl sm:text-2xl font-bold mb-4 flex justify-between">
                      Partner Oficial ABB
                      <img src="https://campaign.abb.com/l/501021/2019-08-06/q7pxgj/501021/182073/ABB_Logo.png" alt="ABB" class="h-6 ml-3 w-16">
                    </h3>
                    <p class="text-gray-700 text-sm sm:text-base">Velit sit sint anim deserunt enim ipsum ut officia tempor amet laboris nostrud voluptate.</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 class="text-xl sm:text-2xl font-bold mb-4 flex justify-between">
                      Canalización y Soportería
                      <img src="icons/canaliza.svg" alt="Canalización" class="h-6 w-16 ml-3">
                    </h3>
                    <p class="text-gray-700 text-sm sm:text-base">Velit sit sint anim deserunt enim ipsum ut officia tempor amet laboris nostrud voluptate.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Blog -->
    <section class="container mx-auto px-4 sm:px-6 py-12">
        <h2 class="text-2xl sm:text-3xl font-bold text-center mb-8">Nuestro trabajo</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src="/assets/santa_anita_liverpool.webp" alt="Bienvenidos" class="w-full h-48 sm:h-56 object-cover rounded-t-lg">
                <div class="p-6">
                    <h3 class="text-lg sm:text-xl font-bold mb-2">Guadalajara, Liverpool</h3>
                    <p class="text-gray-700 text-sm sm:text-base">
                        Se trata de un proyecto de iluminación y control de energía eléctrica en el centro comercial Liverpool.
                    </p>
                    <small class="text-gray-500 text-xs sm:text-sm">2021-07-08</small>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src="/assets/liverpool_gourmet.webp" alt="Tableros Inteligentes" class="w-full h-48 sm:h-56 object-cover rounded-t-lg">
                <div class="p-6">
                    <h3 class="text-lg sm:text-xl font-bold mb-2">Liverpool Gourmet Polanco CDMX, 2024</h3>
                    <p class="text-gray-700 text-sm sm:text-base">
                        Se trata de un tablero inteligente que permite la gestión de la energía eléctrica de manera eficiente y segura.
                    </p>
                    <small class="text-gray-500 text-xs sm:text-sm">2020-03-16</small>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-12">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                    <h3 class="text-lg sm:text-xl font-bold mb-4">Contacto</h3>
                    <p class="text-gray-400 text-sm sm:text-base">Raúl Zárate Machuca Cuevítas #11, 01220 Ciudad de México, CDMX</p>
                    <p class="text-gray-400 text-sm sm:text-base">Lunes / Viernes 09:00 - 18:00</p>
                    <a href="mailto:contacto@grupointecsa.com" class="text-blue-400 hover:text-blue-300 text-sm sm:text-base">contacto@grupointecsa.com</a>
                </div>
                <div>
                    <h3 class="text-lg sm:text-xl font-bold mb-4">Redes Sociales</h3>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-blue-400">
                            <img src="https://blog-omega-mauve.vercel.app/_next/image?url=%2Fsocial%2Ffacebook.svg&w=128&q=75" alt="Facebook" class="h-6">
                        </a>
                        <a href="#" class="text-gray-400 hover:text-blue-400">
                            <img src="https://blog-omega-mauve.vercel.app/_next/image?url=%2Fsocial%2Finsta.svg&w=128&q=75" alt="Instagram" class="h-6">
                        </a>
                        <a href="#" class="text-gray-400 hover:text-blue-400">
                            <img src="https://blog-omega-mauve.vercel.app/_next/image?url=%2Fsocial%2Flinkedin.svg&w=128&q=75" alt="LinkedIn" class="h-6">
                        </a>
                    </div>
                </div>
                <div>
                    <h3 class="text-lg sm:text-xl font-bold mb-4">Visítanos</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5322.527002406184!2d-99.22696839255828!3d19.38668419189787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201adefab9513%3A0xa5936acc13a69c0d!2sRa%C3%BAl%20Z%C3%A1rate%20Machuca%2011%2C%20Cuevitas%2C%20%C3%81lvaro%20Obreg%C3%B3n%2C%2001220%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1613650539398!5m2!1ses!2smx" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </footer>
  </div>
`;
