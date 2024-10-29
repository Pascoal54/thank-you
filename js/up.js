 function redirectToWhatsApp() {
  const message = "Olá! Gostaria de comprar o livro 'Cresça e Venda Online com 6 Estratégias Comprovadas' por 3500 Kz. Poderia me enviar os detalhes?";
  const phoneNumber = "+244930620876"; // Substitua pelo seu número de WhatsApp
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}
