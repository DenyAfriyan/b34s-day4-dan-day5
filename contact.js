function sendEmail() {
  // DOM = Document Object Model
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;

  // VALIDATION
  if ((name, email, phone, subject, message == '')) {
    return alert('All form input must be filled to continue');
  }

  let emailReceiver = 'deniafrian252@gmail.com';

  let a = document.createElement('a');
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello, my name ${name}, ${subject}, ${message}`;
  a.click();
}
