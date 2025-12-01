# PROJETO FINAL - DESENVOLVIMENTO FRONT-END I
### Tema: Portfólio Pessoal
### Autor: Brendon Araujo da Cruz
### Curso: Análise e Desenvolvimento de Sistemas
### Instituição: Instituto Federal do Espírito Santo (IFES)
### Turma: 2025/2


# DESCRIÇÃO
Este projeto consiste em um site pessoal estático desenvolvido como requisito de avaliação final. O objetivo foi criar uma
identidade visual única focada em apresentar o perfil profissional, formação e habilidades técnicas.


# ESTRUTURA DE ARQUIVOS

  ├── index.html <br>
  ├── formacao.html <br>
  ├── skills.html <br> 
  ├── contato.html      
  ├── README.txt <br>
  │<br>
  ├── /css <br>
  │    └── style.css <br>
  │<br>
  ├── /js <br>
  │    └── main.js <br>
  │<br>
  └── /img


# TECNOLOGIAS E RECURSOS UTILIZADOS

1. HTML5 Semântico:
   - Uso correto de
        1. header
        2. nav
        3. main
        4. section
        5. footer

2. CSS3 + Bootstrap 5:
   - Framework utilizado para Grid System, Responsividade e Reset.
   - CSS Personalizado (style.css) para sobrescrever o framework e criar a
     identidade visual (cores, fontes IBM Plex Mono, botões customizados).
   - Uso de Flexbox para alinhamentos complexos.
   - @media queries para adaptação total a dispositivos móveis.
   - Animações CSS (@keyframes fadeIn) para transição suave de entrada.

3. JavaScript (ES6+):
   - Validação de formulário no lado do cliente.
   - Manipulação do DOM para feedback visual (Sucesso/Erro).
   - Event Listeners para interatividade.


# FUNCIONALIDADES IMPLEMENTADAS (REQUISITOS DO PROJETO)

1. Validação de Formulário:
   - O envio é interceptado via JS.
   - Verifica campos obrigatórios.
   - Exibe mensagem de sucesso dinâmica e oculta o formulário após o envio.

2. Responsividade:
   - Layout adaptável para Desktop, Tablet e Mobile.
   - Ajuste dinâmico de tipografia e espaçamentos (padding) via Media Queries
     para evitar sobreposição de elementos no cabeçalho/rodapé.

3. Componentes e Interação:
   - Menu de Navegação responsivo.
   - Cards de Skills estilizados como "pílulas".
   - Formulário completo com campo de seleção (Select) customizado.

# COMO EXECUTAR

Basta abrir o arquivo "index.html" em qualquer navegador web moderno.
Recomenda-se o uso do Google Chrome ou Firefox para melhor visualização.