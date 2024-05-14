function clickMenu (){
  const btnMenuCadastro = document.getElementById('menu-btnCadastro')
  const btnMenuEstoque = document.getElementById('menu-btnEstoque')
  const btnMenuHome = document.getElementById('menu-btnHome')

  btnMenuHome.addEventListener('click', function(){
    const form = document.getElementById('form')
    const estoque = document.getElementById('estoque')
    const home = document.getElementById('home')
    const navConteiner = document.getElementById('nav-conteiner')
    const rodape = document.getElementById('rodape')
    
    if(home.style.display = "none"){
      form.style.display = "none"
      estoque.style.display = "none"
      home.style.display = "block"
      rodape.style.visibility = "visible"

      btnMenuCadastro.style.backgroundColor = "transparent"
      btnMenuEstoque.style.backgroundColor = "transparent"
      btnMenuHome.style.backgroundColor = "#d1c7c7"
      navConteiner.style.borderBottom = "solid 4px #d1c7c7"
    }
  })

  btnMenuCadastro.addEventListener('click', function(){
    const form = document.getElementById('form')
    const estoque = document.getElementById('estoque')
    const home = document.getElementById('home')
    const navConteiner = document.getElementById('nav-conteiner')
    const rodape = document.getElementById('rodape')

    if(form.style.display = "none"){
      form.style.display = "block"
      estoque.style.display = "none"
      home.style.display = "none"
      rodape.style.visibility = "hidden"

      btnMenuCadastro.style.backgroundColor = "#ccb9b9"
      btnMenuEstoque.style.backgroundColor = "transparent"
      btnMenuHome.style.backgroundColor = "transparent"
      navConteiner.style.borderBottom = "solid 4px #ccb9b9"
    }
  })

  btnMenuEstoque.addEventListener('click', function(){
    const form = document.getElementById('form')
    const estoque = document.getElementById('estoque')
    const home = document.getElementById('home')
    const rodape = document.getElementById('rodape')

    if(estoque.style.display = "none"){
      form.style.display = "none"
      estoque.style.display = "block"
      home.style.display = "none"
      rodape.style.visibility = "hidden"

      btnMenuEstoque.style.backgroundColor = "#bdb0b0"
      btnMenuCadastro.style.backgroundColor = "transparent"
      btnMenuHome.style.backgroundColor = "transparent"
      navConteiner.style.borderBottom = "solid 4px #bdb0b0"
    }
  })
}

function cadastarProduto(){
  const idProd = document.getElementById('id-prod').value
  const descricao = document.getElementById('desc').value
  const quantidade = document.getElementById('quant').value
  const precoCusto = document.getElementById('pCusto').value
  const precoVenda = document.getElementById('pVenda').value

  const table = document.getElementById('tb-produt')
  //O parâmetro -1 indica que a nova linha deve ser inserida no final da tabela.
  const novaLinha = table.insertRow(-1)
  novaLinha.id = "prodId-" + "0" + armazenarProduto.length
  
  //Os números em cada insertCell referencia a posição da celula(coluna). 
  const idCell = novaLinha.insertCell(0)
  const descricaoCell = novaLinha.insertCell(1)
  const quantidadeCell = novaLinha.insertCell(2)
  const precoCustoCell = novaLinha.insertCell(3)
  const precoVendaCell = novaLinha.insertCell(4)

  idCell.innerText = idProd
  idCell.id = "cadastroId-" + "0" + armazenarProduto.length
  descricaoCell.innerText = descricao
  descricaoCell.id = "descID-" + "0" + armazenarProduto.length
  quantidadeCell.innerText = quantidade
  quantidadeCell.id = "quantId-" + "0" + armazenarProduto.length
  precoCustoCell.innerText = precoCusto
  precoCustoCell.id = "pCustoId-" + "0" + armazenarProduto.length
  precoVendaCell.innerText = precoVenda
  precoVendaCell.id = "pVendaId-" + "0" + armazenarProduto.length

  //caso apresente problemas o innerText use o innerHTML
  // idCell.innerHTML= idProd
  // descricaoCell.innerHTML = descricao
  // quantidadeCell.innerHTML = quantidade
  // precoCustoCell.innerHTML = precoCusto
  // precoVendaCell.innerHTML = precoVenda

  //salvando o produto no objeto e salvando o objeto no array
  const objProduto = {}
  objProduto.id = idProd
  objProduto.descricao = descricao 
  objProduto.quantidade = quantidade
  objProduto.precoCusto = precoCusto
  objProduto.precoVenda = precoVenda
  armazenarProduto.push(objProduto)
  console.log(armazenarProduto)

  //limppando o valor dos inputs
  gerarId.value = armazenarProduto.length + 1;
  document.getElementById('desc').value = ''
  document.getElementById('quant').value = '0'
  document.getElementById('pCusto').value = '0,00'
  document.getElementById('pVenda').value = '0,00'
}

//array que armazena objetos com dados dos produtos
const armazenarProduto = []

//Gerando id automatico usando o armazenarProduto.length
const gerarId = document.getElementById('id-prod')
gerarId.value = armazenarProduto.length + 1;

//Referenciando
const btnMenuCadastro = document.getElementById('menu-btnCadastro')
const btnMenuEstoque = document.getElementById('menu-btnEstoque')
const btnCadastrarProd = document.getElementById('btnCadastrar')

//Eventos do menu
btnMenuCadastro.addEventListener('click',clickMenu)
btnMenuEstoque.addEventListener('click', clickMenu)
btnCadastrarProd.addEventListener('click',cadastarProduto)



























