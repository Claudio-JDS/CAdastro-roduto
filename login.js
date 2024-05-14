const btnLogin = document.getElementById('btnLogin')

btnLogin.addEventListener('click', function(ev){
  ev.preventDefault

  const usuario = document.getElementById('usuario').value
  const password = document.getElementById('password').value
  const ir = document.getElementById('ir').href

  if (usuario.trim() === '' || password.trim() === '') {
    alert('Por favor, preencha todos os campos.')
  } else {
    window.location.href = ir
  }

})