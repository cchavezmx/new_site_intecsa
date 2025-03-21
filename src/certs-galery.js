const certs_images = [
  "foto_029310.png",
  "foto_047750.png",
  "foto_049490.png",
  "foto_087795.png",
  "foto_132900.png",
  "foto_160191.png",
  "foto_165181.png",
  "foto_195714.png",
  "foto_276618.png",
  "foto_310533.png",
  "foto_328897.png",
  "foto_374552.png",
  "foto_375562.png",
  "foto_445737.png",
  "foto_456455.png",
  "foto_465687.png",
  "foto_468111.png",
  "foto_472939.png",
  "foto_493603.png",
  "foto_517219.png",
  "foto_580050.png",
  "foto_605238.png",
  "foto_606979.png",
  "foto_612531.png",
  "foto_676879.png",
  "foto_705338.png",
  "foto_713344.png",
  "foto_741342.png",
  "foto_763482.png",
  "foto_765961.png",
  "foto_783795.png",
  "foto_803571.png",
  "foto_813475.png",
  "foto_834448.png",
  "foto_934135.png",
  "foto_962474.png",
  "foto_025399.png",
];

// Función para crear la galería
function createGallery() {
  const gallery = document.getElementById("gellery-cert");
  gallery.addEventListener("click", () => {
    const modal = document.getElementById("modal-cert");
    modal.classList.toggle("hidden");
    const contentModal = document.createElement("div");
    contentModal.innerHTML = `
          <div class="fixed flex justify-center items-center inset-0 bg-gray-800 bg-opacity-25 p-2 sm:p-4">
            <div class="bg-white rounded-lg w-full max-w-5xl mx-auto">
                <div class="relative">
                    <!-- Botón de cerrar -->
                    <button id="close-modal" class="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full hover:bg-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div class="flex flex-col lg:flex-row">
                        <!-- Contenedor de la imagen -->
                        <div class="w-full lg:w-3/4">
                            <div class="relative pt-[75%] lg:pt-[56.25%]">
                                <img
                                    id="image-selected"
                                    src="certs/foto_025399.png" 
                                    alt="Imagen seleccionada" 
                                    class="absolute top-0 left-0 w-full h-full object-contain"
                                >
                            </div>
                        </div>
                         <div class="w-full lg:w-1/4 p-6 bg-gray-50 flex flex-col justify-between">
                            <h2 class="text-2xl font-bold mb-4">Dluninc</h2>
                            <p class="text-gray-600 mb-6">
                                Another Test Caption. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <div class="flex gap-2 justify-between mt-auto">
                                <button id="before-image" class="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                                    Anterior
                                </button>
                                <button id="next-image" class="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                    Siguiente
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>`;
    modal.appendChild(contentModal);
    const closeModal = document.getElementById("close-modal");
    closeModal.addEventListener("click", () => {
      modal.classList.toggle("hidden");
      contentModal.remove();
    });

    const nextImage = document.getElementById("next-image");
    let first = 0;
    const last = certs_images.length - 1;
    nextImage.addEventListener("click", () => {
      if (first > last) {
        first = 0;
      }
      const imgContent = document.getElementById("image-selected");
      imgContent.src = `certs/${certs_images[first]}`;
      first++;
    });

    const beforeImage = document.getElementById("before-image");
    beforeImage.addEventListener("click", () => {
      if (first < 0) {
        first = last;
      }
      const imgContent = document.getElementById("image-selected");
      imgContent.src = `certs/${certs_images[first]}`;
      first--;
    });
  });
  console.log(gallery);
}
// Llamar a la función para crear la galería
createGallery();
