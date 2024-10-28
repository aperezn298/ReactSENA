// Validar los campos del formulario
document.addEventListener('DOMContentLoaded', () => {
    // Obtener los elementos del DOM
    const tituloInput = document.getElementById('postTitle');
    const descripcionInput = document.getElementById('postBody');
    const submitButton = document.getElementById('submit-create-post');

    const tituloError = document.getElementById('error-title');
    const descripcionError = document.getElementById('error-body');

    // Deshabilitar el botón de enviar
    submitButton.disabled = true;

    // Variables para validar los campos
    isTituloValid = false;
    isDescripcionValid = false;

    // Función para validar el título
    function validateTitulo() {
        const tituloValue = tituloInput.value.trim();

        if (tituloValue === '' || tituloValue.length < 5 || tituloValue.length > 50) {
            tituloInput.classList.add('border', 'border-danger');
            tituloError.textContent = 'El título debe tener entre 5 y 50 caracteres';
            tituloError.classList.add('text-danger');
            isTituloValid = false;
        } else {
            tituloInput.classList.remove('border', 'border-danger');
            tituloInput.classList.add('border', 'border-success');
            tituloError.textContent = '';
            isTituloValid = true;
        }
        checkAllValidations();
    }

    // Función para validar la descripción
    function validateDescripcion() {
        const descripcionValue = descripcionInput.value.trim();

        if (descripcionValue === '' || descripcionValue.length < 20 || descripcionValue.length > 500) {
            descripcionInput.classList.add('border', 'border-danger');
            descripcionError.textContent = 'La descripción debe tener entre 20 y 500 caracteres';
            descripcionError.classList.add('text-danger');
            isDescripcionValid = false;
        } else {
            descripcionInput.classList.remove('border', 'border-danger');
            descripcionInput.classList.add('border', 'border-success');
            descripcionError.textContent = '';
            isDescripcionValid = true;
        }
        checkAllValidations();
    }

    // Función para comprobar todas las validaciones
    function checkAllValidations() {
        if (isTituloValid && isDescripcionValid) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    // Escuchar eventos 'input' en los campos del formulario
    tituloInput.addEventListener('input', validateTitulo);
    descripcionInput.addEventListener('input', validateDescripcion);
});