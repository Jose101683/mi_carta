const inputs = document.querySelectorAll('.otp-input');
const verifyBtn = document.getElementById('verifyBtn');
const errorMsg = document.getElementById('errorMsg');
const successMsg = document.getElementById('successMsg');

// Salto automático entre casillas y retroceso con Backspace
inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        const value = e.target.value;
        errorMsg.style.display = 'none';
        successMsg.style.display = 'none';

        if (value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !input.value && index > 0) {
            inputs[index - 1].focus();
        }
    });
});

// Lógica del botón Verificar
verifyBtn.addEventListener('click', () => {
    let enteredPin = '';
    inputs.forEach(input => {
        enteredPin += input.value;
    });

    if (enteredPin === '281125') {
        errorMsg.style.display = 'none';
        successMsg.style.display = 'block';
        
        // Redirección a la segunda página
        setTimeout(() => {
            window.location.href = 'carta.html';
        }, 500);
    } else {
        successMsg.style.display = 'none';
        errorMsg.style.display = 'block';
    }
});