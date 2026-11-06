const toggle = document.querySelector('#menuToggle');
const menu = document.querySelector('#sideMenu');
const scrim = document.querySelector('#scrim');
function setMenu(open) {
  menu.classList.toggle('open', open);
  scrim.classList.toggle('open', open);
  toggle.classList.toggle('active', open);
  toggle.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-hidden', String(!open));
}
toggle.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
scrim.addEventListener('click', () => setMenu(false));
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));

let cart = [];
const cartCount = document.querySelector('#cartCount');
const cartMessage = document.querySelector('#cartMessage');
document.querySelectorAll('.add-cart').forEach(button => button.addEventListener('click', () => {
  cart.push({ name: button.dataset.name, price: Number(button.dataset.price) });
  cartCount.textContent = cart.length;
  cartMessage.textContent = `${button.dataset.name} adicionado à sacola.`;
  window.setTimeout(() => { cartMessage.textContent = ''; }, 2500);
}));
document.querySelector('#cartButton').addEventListener('click', () => {
  if (!cart.length) { cartMessage.textContent = 'Sua sacola está vazia por enquanto.'; return; }
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartMessage.textContent = `${cart.map(item => item.name).join(', ')} · Total R$ ${total.toFixed(2).replace('.', ',')}. Fale com a gente no Instagram para finalizar.`;
});

const dateInput = document.querySelector('input[name="date"]');
const today = new Date();
dateInput.min = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
document.querySelector('#bookingForm').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const text = `Olá, Juanita! Meu nome é ${data.get('name')}. Quero agendar: ${data.get('service')} para ${data.get('date')}. WhatsApp: ${data.get('phone')}. ${data.get('message') ? `Detalhes: ${data.get('message')}` : ''}`;
  const feedback = document.querySelector('#bookingFeedback');
  feedback.innerHTML = `Solicitação pronta! <a href="https://wa.me/?text=${encodeURIComponent(text)}" target="_blank" rel="noreferrer">Toque aqui para enviar pelo WhatsApp ↗</a>`;
  feedback.classList.add('success');
});
