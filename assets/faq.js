function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const icon = btn.querySelector('.faq-icon');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => {
    el.classList.remove('open');
    el.querySelector('.faq-icon').textContent = '+';
    el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
  });
  if (!isOpen) {
    item.classList.add('open');
    icon.textContent = '×';
    btn.setAttribute('aria-expanded', 'true');
  }
}
