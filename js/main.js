    const contactForm = document.getElementById('contactForm');
    
    // Verifica se o formulário existe na página atual antes de rodar o código
    if (contactForm) {
        
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // 1. Impede o envio real e o recarregamento da página

            // Aqui você poderia adicionar validações extras se quisesse
            // Mas o atributo 'required' do HTML já faz o trabalho pesado
            
            // 2. Pega os valores (Simulação de envio)
            const nome = document.getElementById('nome').value;
            console.log("Enviando mensagem de: " + nome);

            // 3. Efeito Visual: Esconde o Form e Mostra o Sucesso
            contactForm.style.display = 'none'; // Some com o formulário
            
            const feedback = document.getElementById('feedback-success');
            feedback.classList.remove('d-none'); // Remove a classe que esconde
        });
    }