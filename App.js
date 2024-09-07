// Simulando una base de datos de jugadores
const playersDB = [
    { username: "Pedro", email: "pedro@example.com", location: "Buenos Aires" },
    { username: "Maria", email: "maria@example.com", location: "Buenos Aires" },
    { username: "Juan", email: "juan@example.com", location: "Cordoba" }
];

// Variables para almacenar el perfil del usuario
let currentUser = {};

function registerUser() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const location = document.getElementById('location').value;

    if (username && email && location) {
        currentUser = { username, email, location };
        displayUserProfile();
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

function displayUserProfile() {
    document.getElementById('register').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
    document.getElementById('displayUsername').textContent = currentUser.username;
    document.getElementById('displayEmail').textContent = currentUser.email;
    document.getElementById('displayLocation').textContent = currentUser.location;
}

function searchPlayers() {
    const playersInZone = playersDB.filter(player => player.location.toLowerCase() === currentUser.location.toLowerCase());
    displayPlayers(playersInZone);
}

function displayPlayers(players) {
    const playersList = document.getElementById('players');
    playersList.innerHTML = ''; // Limpiar la lista de jugadores anteriores
    players.forEach(player => {
        const li = document.createElement('li');
        li.textContent = `${player.username} - ${player.email}`;
        playersList.appendChild(li);
    });
    document.getElementById('playersList').style.display = 'block';
}
