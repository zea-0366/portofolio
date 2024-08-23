// ini js


function formValidation() {
  let name = document.getElementById('input-name').value;
  console.log(name);

  // Pengecekan dimana name tidak boleh ''
  if (name == '') {
    // Code ini akan di eksekui ketika name = ''
    alert('maaf inputan name anda kosong');
    // Code ini akan di eksekui ketika name tidak ''
  } else {
    alert('Sukses menginput name');
  }
  let email = document.getElementById('input-email').value;
  console.log(email);

  //pengecekan dimana email tidak boleh ''
  if (email == '') {
    // Code ini akan di eksekui ketika email = ''
    alert('maaf inputan email anda kosong');
    // Code ini akan di eksekui ketika email tidak ''
  } else {
    alert('Sukses menginput email');
  }

  let password = document.getElementById('input-password').value;
  console.log(password);

  //pengecekan dimana password tidak boleh ''
  if (password == '') {
    // Code ini akan di eksekui ketika password = ''
    alert('maaf inputan password anda kosong');
    // Code ini akan di eksekui ketika password tidak ''
  } else {
    alert('Sukses menginput password');
  }
}