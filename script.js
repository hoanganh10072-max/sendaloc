// ============ PRICE PER UNIT ============
const UNIT_PRICE = 20000;

// ============ HELPERS ============
const formatVND = (n) => new Intl.NumberFormat('vi-VN').format(n) + 'đ';

const showToast = (msg) => {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => t.classList.remove('show'), 2400);
};

// ============ QUANTITY COUNTER ============
const qtyEl = document.getElementById('qty');
let qty = 1;

document.querySelectorAll('[data-act]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const act = btn.dataset.act;
    if (act === 'inc') qty = Math.min(99, qty + 1);
    if (act === 'dec') qty = Math.max(1, qty - 1);
    qtyEl.textContent = qty;
    qtyEl.style.transform = 'scale(1.2)';
    setTimeout(() => (qtyEl.style.transform = 'scale(1)'), 150);
  });
});

// ============ SMOOTH SCROLL BUTTONS ============
document.querySelectorAll('[data-scroll]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.scroll;
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ============ ORDER MODAL ============
const modal = document.getElementById('modal');
const modalMsg = document.getElementById('modalMsg');

const openModal = (msg) => {
  modalMsg.textContent = msg;
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
};
const closeModal = () => {
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
};

document.getElementById('orderBtn').addEventListener('click', () => {
  const total = formatVND(UNIT_PRICE * qty);
  openModal(`Bạn vừa đặt ${qty} ly Trà Sen Đa Lộc — tổng cộng ${total}. Chúng tôi sẽ liên hệ giao hàng trong 30 phút!`);
});

document.querySelectorAll('[data-close]').forEach((el) => {
  el.addEventListener('click', closeModal);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ============ INIT ============
showToast('Chào mừng đến Trà Sen Đa Lộc 🌺');
