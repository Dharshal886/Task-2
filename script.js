const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.name.value;
  const email = form.email.value;
  const mobile = form.mobile.value;
  const username = form.username.value;
  const password = form.password.value;
  const confirmPassword = form['confirm-password'].value;
  // Here, you would typically send the form data to a server for database insertion
  console.log(`Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nUsername: ${username}\nPassword: ${password}\nConfirm Password: ${confirmPassword}`);
});
