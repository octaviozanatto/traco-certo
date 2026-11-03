
// Atualiza o ano automaticamente no rodapé

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// Formulário de contato para WhatsApp

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Validação dos campos
        if (!contactForm.checkValidity()) {
            event.stopPropagation();
            contactForm.classList.add("was-validated");
            return;
        }

        // Captura dos dados
        const nome = document.getElementById("nome").value.trim();
        const servico = document.getElementById("servico").value;
        const mensagem = document.getElementById("mensagem").value.trim();

        // SUBSTITUIR PELO NÚMERO REAL DA EMPRESA
        // Formato: 55 + DDD + número, somente números.
        const numeroWhatsApp = "5522999999999";

        // Monta a mensagem
        const texto =
`Olá! Meu nome é ${nome}.

Tenho interesse em: ${servico}.

${mensagem}`;

        // Cria o link do WhatsApp
        const linkWhatsApp =
            `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

        // Abre o WhatsApp
        window.open(linkWhatsApp, "_blank", "noopener");

    });

}
