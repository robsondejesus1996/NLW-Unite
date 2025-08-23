let participantes = [
  {
    nome: "Robson de Jesus",
    email: "robson@gmail.com",
    dataInscricao: new Date(2025, 9, 15, 19, 20),
    dataCheckIn: new Date(2025, 9, 16, 22, 30),
  },
  {
    nome: "Maria de Jesus",
    email: "maria@gmail.com",
    dataInscricao: new Date(2025, 9, 15, 19, 20),
    dataCheckIn: new Date(2025, 9, 16, 22, 30),
  },
  {
    nome: "Carlos Almeida",
    email: "carlos@gmail.com",
    dataInscricao: new Date(2025, 9, 14, 10, 15),
    dataCheckIn: new Date(2025, 9, 15, 14, 0),
  },
  {
    nome: "Fernanda Souza",
    email: "fernanda@gmail.com",
    dataInscricao: new Date(2025, 9, 13, 8, 30),
    dataCheckIn: new Date(2025, 9, 14, 9, 45),
  },
  {
    nome: "João Pereira",
    email: "joao@gmail.com",
    dataInscricao: new Date(2025, 9, 12, 15, 0),
    dataCheckIn: new Date(2025, 9, 13, 18, 20),
  },
  {
    nome: "Ana Clara",
    email: "ana@gmail.com",
    dataInscricao: new Date(2025, 9, 10, 11, 10),
    dataCheckIn: new Date(2025, 9, 11, 16, 50),
  },
  {
    nome: "Lucas Martins",
    email: "lucas@gmail.com",
    dataInscricao: new Date(2025, 9, 9, 17, 40),
    dataCheckIn: new Date(2025, 9, 10, 20, 10),
  },
  {
    nome: "Paula Mendes",
    email: "paula@gmail.com",
    dataInscricao: new Date(2025, 9, 8, 13, 25),
    dataCheckIn: new Date(2025, 9, 9, 14, 30),
  },
  {
    nome: "Rafael Costa",
    email: "rafael@gmail.com",
    dataInscricao: new Date(2025, 9, 7, 9, 55),
    dataCheckIn: new Date(2025, 9, 8, 12, 0),
  },
  {
    nome: "Beatriz Lima",
    email: "beatriz@gmail.com",
    dataInscricao: new Date(2025, 9, 6, 7, 5),
    dataCheckIn: new Date(2025, 9, 7, 10, 45),
  }
];


const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(
    participante.dataInscricao
  )
  

  const dataCheckIn = dayjs(Date.now()).to(
    participante.dataCheckIn
  )
  return `
  <tr>
        <td>
         <strong>${participante.nome}</strong>
         <br>
         <small>
          ${participante.email}
         </small>
        </td>
        <td>${dataInscricao}</td>
        <td>${dataCheckIn}</td>
   </tr>`;
};

const atualizarLista = (participante) => {
  let output = "";
  for(let participante of participantes){
    output = output + criarNovoParticipante(participante);
  }
  document.querySelector("tbody").innerHTML = output;
};

atualizarLista(participantes);
