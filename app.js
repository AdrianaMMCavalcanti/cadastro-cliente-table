const clientes = [];

function cadastrarCliente() {
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const rua = document.getElementById("rua").value;
  const num = document.getElementById("num").value;
  const bairro = document.getElementById("bairro").value;
  const cidade = document.getElementById("cidade").value;
  const estado = document.getElementById("estado").value;
  let alerta = "";
  if (nome === "") {
    alerta += "Preencha o campo nome e sobrenome. \n"
  }
  if (telefone === "") {
    alerta += "Preencha o campo telefone. \n"
  }
  if (email === "") {
    alerta += "Preencha o campo e-mail. \n"
  }
  if (rua === "") {
    alerta += "Preencha o campo rua. \n"
  }
  if (num === "") {
    alerta += "Preencha o campo 'número da casa.' \n"
  }
  if (bairro === "") {
    alerta += "Preencha o campo 'bairro'. \n"
  }
  if (cidade === "") {
    alerta += "Preencha o campo 'cidade'. \n"
  }
  if (estado === "") {
    alerta += "Preencha o campo 'Estado'.\n"
  }

  if (alerta !== "") {
    alert(alerta);
  } else {
    const cliente = {
      nome,
      telefone,
      email,
      rua,
      num,
      bairro,
      cidade,
      estado,
      data: new Date().toLocaleDateString(),
    }
    clientes.push(cliente);
    render();
  }

}

function render() {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  const lixo = document.getElementById("limpar");


  clientes.forEach((cliente, i) => {

    const html = `
    <tr>
          <td>${cliente.nome}</td>
          <td>${cliente.telefone}</td>
          <td>${cliente.email}</td>
          <td>${cliente.rua}</td>
          <td>${cliente.num}</td>  
          <td>${cliente.bairro}</td>
          <td>${cliente.cidade}</td>
          <td>${cliente.estado}</td>
          <td>${cliente.data}</td>   
          <td id="limpar"><img src= "remove.png" onclick="removeCadastro(${i})"></td>
          
    </tr>`;
    tbody.innerHTML += html;
  })

}

function removeCadastro(pos) {
  clientes.splice(pos, 1)
  console.log("removeu: " + pos);
  render()
}



