    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            const nome = document.getElementById('nome').value;
            console.log("Enviando mensagem de: " + nome);

            contactForm.style.display = 'none';
            
            const feedback = document.getElementById('feedback-success');
            feedback.classList.remove('d-none'); 
        });
    }