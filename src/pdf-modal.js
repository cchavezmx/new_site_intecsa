const filePdfModal = () => {
  const modal_pdf = document.getElementById("modal-pdf");
  const showModal = document.getElementById("curriculum-btn");

  showModal.addEventListener("click", () => {
    if (!modal_pdf.querySelector(".modal-inner")) {
      createPdfModal();
    }
    modal_pdf.classList.remove("hidden");
  });

  function createPdfModal() {
    const div = document.createElement("div");
    modal_pdf.classList.add(
      "fixed",
      "inset-0",
      "bg-gray-800",
      "bg-opacity-25",
      "backdrop-blur-sm",
      "p-2",
      "sm:p-4",
      "overflow-y-auto",
      "z-50",
      "flex",
      "justify-center",
      "items-start",
    );

    div.innerHTML = `
       <div class="flex justify-center items-center fixed inset-0 bg-gray-800 bg-opacity-25 p-2 sm:p-4">
        <div class="bg-white rounded-lg p-6 max-w-4xl w-full overflow-y-auto">
        <div class="text-gray-800 space-y-4 mt-40">
          <h1 class="text-2xl font-bold border-b pb-2 border-blue-500">
            Grupo INTECSA
          </h1>          
          <section>
            <p class="text-lg font-semibold">INSTALACIONES Y TÉCNICA S.A. DE C.V.</p>
            <h3 class="text-xl font-bold text-blue-600 mt-4">Visión</h3>
            <p>Consolidarnos como una empresa globalizada con una amplia participación en el mercado internacional.</p>

            <h3 class="text-xl font-bold text-blue-600 mt-4">Misión</h3>
            <p>Alcanzar la certificación en la fabricación y elaboración de todos nuestros productos y servicios.</p>

            <h3 class="text-xl font-bold text-blue-600 mt-4">Valores</h3>
            <ul class="list-disc list-inside">
              <li>Verdad: Base de operación y toma de decisiones.</li>
              <li>Versatilidad: Adaptación al cambio constante.</li>
              <li>Respeto: Colaboración con las partes interesadas.</li>
              <li>Unidad: Trabajo en equipo con un mismo objetivo.</li>
              <li>Servicio: Respaldo continuo a nuestros clientes.</li>
            </ul>

            <h3 class="text-xl font-bold text-blue-600 mt-4">¿Quiénes Somos?</h3>
            <p>INTECSA es una empresa dedicada a la instalación, planeación, construcción y mantenimiento de centros comerciales, tiendas departamentales, naves industriales y edificios inteligentes.</p>

            <h3 class="text-xl font-bold text-blue-600 mt-4">Reconocimientos</h3>
            <ul class="list-disc list-inside">
              <li>Proveedor Certificado por Liverpool (2023)</li>
              <li>Medalla de Oro a la Calidad y Servicio (2005)</li>
              <li>Premio Empresa Mexicana del Año - LAQI (2012)</li>
              <li>Trofeo Internacional al Prestigio Comercial (2002)</li>
            </ul>

            <h3 class="text-xl font-bold text-blue-600 mt-4">Resumen de Obras Recientes</h3>
            <ul class="list-disc list-inside">
              <li>BERSHKA PERISUR CDMX – 2024</li>
              <li>LIVERPOOL GOURMET POLANCO – 2024</li>
              <li>STRADIVARIUS MONTERREY – 2024</li>
              <li>CINEMEX INSURGENTES – 2024</li>
              <li>BERSHKA CANCÚN – 2023</li>
            </ul>

            <h3 class="text-xl font-bold text-blue-600 mt-4">Carta del Director</h3>
            <p>Grupo INTECSA busca adoptar la norma ISO 9001-2015 para garantizar eficiencia, eficacia y mejora continua en todos los procesos, con un enfoque basado en riesgos y oportunidades.</p>

            <div class="mt-6 text-sm text-gray-500 border-t pt-4">
              Documento procesado el: 04/04/2025 01:28:50<br>
              Archivo: CV_INTECSA_DIC_2024.pdf
            </div>
          </section>

          <div class="flex justify-end mt-6">
            <button id="close-pdf-modal" class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition">
              Cerrar
            </button>
          </div>
        </div>
      </div>
      `;

    modal_pdf.appendChild(div);

    // Botón de cerrar
    const closeBtn = div.querySelector("#close-pdf-modal");
    closeBtn.addEventListener("click", () => {
      modal_pdf.classList.add("hidden");
      div.remove();
    });
  }
};

filePdfModal();
