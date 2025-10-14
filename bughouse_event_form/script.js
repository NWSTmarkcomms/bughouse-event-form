function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;

  form.submit();
  form.reset();

  const msg = document.getElementById('successMessage');
  msg.style.display = 'block';

  setTimeout(() => (msg.style.display = 'none'), 3000);
  setTimeout(() => (window.location.href = 'success.html'), 3200);
}