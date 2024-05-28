document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe el formulario por defecto

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // Aquí puedes agregar tu lógica de validación
    if (username && password) {
        alert('Login successful');
        // Aquí puedes agregar la lógica para enviar el formulario o realizar una solicitud AJAX
    } else {
        alert('Please fill in both fields');
    }
});