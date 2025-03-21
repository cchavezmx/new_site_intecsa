const filePdfModal = () => {
  const modal_pdf = document.getElementById("modal-pdf");
  const showModal = document.getElementById("curriculum-btn");
  showModal.addEventListener("click", () => {
    modal_pdf.classList.toggle("hidden");
    createPdfModal();
  });

  function createPdfModal() {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="flex justify-center items-center fixed inset-0 bg-gray-800 bg-opacity-25 p-2 sm:p-4">
          <div class="bg-white rounded-lg p-6 max-w-4xl w-full">
            <!-- Contenedor del PDF -->
            <div class="w-full h-[70vh]">
                <iframe
                    id="pdf-iframe"
                    src="CV_INTECSA_DIC_2024.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
                    class="w-full h-full border rounded-lg"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
            </div>

            <!-- Botones -->
            <div class="flex justify-end gap-2 mt-4">
                <button id="close-pdf-modal" class="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">Cerrar</button>
            </div>
          </div>
        </div>
    `;
    modal_pdf.appendChild(div);

    const close_pdf_modal = document.getElementById("close-pdf-modal");
    close_pdf_modal.addEventListener("click", () => {
      modal_pdf.classList.toggle("hidden");
      div.remove();
    });
  }
};

filePdfModal();
