// Importación de dependencias necesarias
import React, { useState } from "react";
// Importación de estilos y librerías
import './formulario.css'; // CSS del formulario
import Swal from 'sweetalert2'; // Librería para mostrar alertas

// Estados iniciales del formulario - vacío y sin errores
const initialForm = {
    nombre: "",
    apellidos: "",
    telefono: "",
    email: "",
};

// Estados iniciales de los errores - igual al formulario inicial
const initialErrores = { ...initialForm };

// Componente principal del formulario de validación
export const FormularioValidacion = () => {
    // Uso de useState para manejar el estado del formulario
    // los valores iniciales son los definidos en initialForm
    const [form, setForm] = useState(initialForm);
    // Uso de useState para manejar los errores del formulario
    // los valores iniciales son los definidos en initialErrores
    const [errores, setErrores] = useState(initialErrores);

    // Función para validar cada campo del formulario
    // recibe el nombre del campo y su valor
    const validarCampo = (name, value) => {
        // Inicializa un string vacío para almacenar el error
        // que se generará si hay algún problema con el valor
        let error = "";
        // Dependiendo del nombre del campo, se aplican diferentes validaciones
        switch (name) {
            case "nombre":
            case "apellidos":
                if (!value.trim()) {
                    error = "Este campo es obligatorio.";
                } else if (value.length < 5 || value.length > 30) {
                    error = "Debe tener entre 5 y 30 caracteres.";
                }
                break;

            case "telefono":
                if (!value.trim()) {
                    error = "Este campo es obligatorio.";
                } else if (!/^\d+$/.test(value)) {
                    error = "Solo se permiten números.";
                } else if (value.length < 7 || value.length > 10) {
                    error = "Debe tener entre 7 y 10 dígitos.";
                }
                break;

            case "email":
                if (!value.trim()) {
                    error = "Este campo es obligatorio.";
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    error = "Correo electrónico inválido.";
                }
                break;

            default:
                break;
        }
        // Retorna el error si existe, o un string vacío si no hay error
        return error;
    };
    // Función para manejar los cambios en los campos del formulario
    // recibe el evento del input como parámetro y actualiza el estado 
    // del formulario y los errores
    const handleChange = (e) => {
        // Desestructuración del evento para obtener el nombre y el 
        // valor del campo que se está modificando 
        const { name, value } = e.target;
        // Actualiza el estado del formulario con el nuevo valor
        // manteniendo los valores anteriores
        // y actualiza los errores del campo correspondiente
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Llama a la función de validación del campo para verificar
        // si hay algún error con el nuevo valor
        // y actualiza el estado de los errores
        setErrores((prev) => ({
            ...prev,
            [name]: validarCampo(name, value),
        }));
    };
    // Función para verificar si el formulario es válido
    // verifica que todos los campos tengan valores y que no haya errores
    const formularioEsValido = () => {
        // Comprueba que todos los valores del formulario no estén vacíos
        // y que todos los errores sean cadenas vacías
        // si todos los campos están completos y no hay errores, retorna true
        // de lo contrario, retorna false
        return (
            Object.values(form).every((v) => v.trim() !== "") &&
            Object.values(errores).every((e) => e === "")
        );
    };

    // Función para limpiar el formulario y los errores
    // restablece el estado del formulario a los valores iniciales
    // y los errores a un objeto vacío
    const limpiarFormulario = () => {
        setForm(initialForm);
        setErrores(initialErrores);
    };

    // Función para manejar el envío del formulario  garantizando que 
    // todos los campos sean válidos, recibe el evento del formulario
    // previene el comportamiento por defecto del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        // Crea un objeto para almacenar los nuevos errores
        // y una variable para verificar si hay algún error
        // inicializa el objeto de errores vacío y la variable de error en false
        const nuevosErrores = {};
        let hayError = false;

        // Recorre cada campo del formulario y valida su valor
        // si hay un error, lo agrega al objeto de errores y 
        // cambia la variable de error a true
        for (const [name, value] of Object.entries(form)) {
            const error = validarCampo(name, value);
            if (error) {
                nuevosErrores[name] = error;
                hayError = true;
            }
        }
        // Si hay algún error, actualiza el estado de los errores
        // y muestra una alerta de error
        setErrores(nuevosErrores);

        // Si hay un error, no se envía el formulario
        // y se muestra una alerta de error
        if (hayError) return;

        // Si no hay errores, muestra una alerta de éxito
        Swal.fire({
            title: '¡Éxito!',
            text: 'Los datos fueron guardados correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
        // Limpia el formulario después de enviar
        // restablece el estado del formulario y los errores a 
        // los valores iniciales
        limpiarFormulario();
    };

    // Verifica si el formulario es válido para habilitar o deshabilitar 
    // el botón de envío llama a la función formularioEsValido para determinar 
    // si el formulario es válido y almacena el resultado en la variable esValido
    const esValido = formularioEsValido();

    // Renderiza el formulario con los campos y sus validaciones
    // cada campo tiene un label, un input y un mensaje de error si hay algún problema
    // el botón de envío está habilitado o deshabilitado según la validez del formulario
    // el botón de limpiar restablece el formulario a sus valores iniciales
    return (
        <form onSubmit={handleSubmit} className="formulario">
            <h2>Formulario de Validación</h2>
            <p>Por favor, completa todos los campos del formulario. Todos los campos marcados con * son obligatorios.</p>

            <div>
                <label>Nombre: *</label>
                <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    className={errores.nombre ? 'error-field' : ''}
                    placeholder="Ejemplo: Juan"
                />
                {/* Mensaje de error para el campo nombre 
                Si hay un error, se muestra debajo del campo correspondiente
                La sintaxis regular es: condición && expresión
                Si la condición es verdadera, se evalúa la expresión
                Si la condición es falsa, no se muestra nada
                Equivalenta al uso de un operador ternario
                <span className="error">{errores.nombre ? errores.nombre : ''}</span>                
                */}
                {errores.nombre && <span className="error">{errores.nombre}</span>}
            </div>

            <div>
                <label>Apellidos: *</label>
                <input
                    type="text"
                    name="apellidos"
                    value={form.apellidos}
                    onChange={handleChange}
                    className={errores.apellidos ? 'error-field' : ''}
                    placeholder="Ejemplo: Pérez"
                />
                {errores.apellidos && <span className="error">{errores.apellidos}</span>}
            </div>

            <div>
                <label>Teléfono: *</label>
                <input
                    type="tel"
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    className={errores.telefono ? 'error-field' : ''}
                    placeholder="Ejemplo: 123456789"
                />
                {errores.telefono && <span className="error">{errores.telefono}</span>}
            </div>

            <div>
                <label>Email: *</label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={errores.email ? 'error-field' : ''}
                    placeholder="ejemplo@correo.com"
                />
                {errores.email && <span className="error">{errores.email}</span>}
            </div>

            <div className="buttons-form">
                <button
                    type="submit"
                    // Deshabilita el botón si el formulario no es válido
                    disabled={!esValido}
                    // Agrega una clase CSS para cambiar el estilo del botón si no es válido
                    className={!esValido ? 'disabled' : ''}
                >
                    Guardar
                </button>

                <button type="reset" onClick={limpiarFormulario}>
                    Limpiar
                </button>
            </div>
        </form>
    );
};