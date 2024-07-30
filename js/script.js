// ini js
alert("hi")

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah form dari pengiriman default
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  alert('Form submitted! Name: ' + name + ', Email: ' + email);
});
