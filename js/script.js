// Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team. (se non fate tempo a realizzare questa parte va bene ugualmente e pensateci in ogni caso solo una volta stampata correttamente tutta la pagina)


let container = document.querySelector('.team-container');
const btn = document.getElementById('addMemberButton');



const profile = [
  {
    name: 'Wayne Bernat',
    job: 'Founder & CEO',
    photo: 'img/wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    job: 'Chief Editor',
    photo: 'img/angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    job: 'Office Manager',
    photo: 'img/walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    job: 'Social Media Manager',
    photo: 'img/angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    job: 'Developer',
    photo: 'img/scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    job: 'Graphic Designer',
    photo: 'img/barbara-ramos-graphic-designer.jpg',
  }
]

staff();



btn.addEventListener('click', function(){
 
  const name = document.getElementById('name').value;
  const job = document.getElementById('role').value;
  const photo = document.getElementById('image').value;

  
  const newWorker = 
  {
      name: name,
      job: job,
      photo: photo,
  };

  profile.push(newWorker);

  container.innerHTML = '';

  staff(profile);
});

function staff() {
  for(let i in profile){

    const card = profile[i];
    const cardName = card.name;
    const cardJob = card.job;
    const cardPhoto = card.photo;

    container.innerHTML +=
    `
    <div class="team-card">
            <div class="card-image">
              <img
                src="${cardPhoto}"
                alt="Wayne Barnett"
              />
            </div>
            <div class="card-text">
              <h3>${cardName}</h3>
              <p>${cardJob}</p>
            </div>
          </div>
    `

  }
  
}




