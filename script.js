// contact.js
document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
        alert('Email enviado com sucesso!');
    } else {
        alert('Falha ao enviar o email.');
    }
});
