var przycisk = document.getElementsByClassName('przycisk')
var punkty_gracz = 0;
var punkty_komputer = 0;

function Gra(e) {
  let wiadomosc = e;
  let gracz;
  let komputer = Math.floor(Math.random() * 3) + 1;

  if (e == "kamien") gracz = 1;
  if (e == "nozyce") gracz = 2;
  if (e == "papier") gracz = 3;

  if (gracz == komputer) {
    document.getElementById('wiadomosc').innerText = "Remis! Ty i przeciwnik wybraliscie to samo.";
  } else
    {
     if (gracz == 1 && komputer == 2) {
       document.getElementById('wiadomosc').innerText = "Wygrales! Masz punkt!";
       punkty_gracz++;
       document.getElementById('Punkty_gracza').innerText = "Twoje punkty: " + punkty_gracz;
     } else if (gracz == 2 && komputer == 3) {
       document.getElementById('wiadomosc').innerText = "Wygrales! Masz punkt!";
       punkty_gracz++;
       document.getElementById('Punkty_gracza').innerText = "Twoje punkty: " + punkty_gracz;
     } else if (gracz == 3 && komputer == 1) {
       document.getElementById('wiadomosc').innerText = "Wygrales! Masz punkt!";
       punkty_gracz++;
       document.getElementById('Punkty_gracza').innerText = "Twoje punkty: " + punkty_gracz;
     } else {
       document.getElementById('wiadomosc').innerText = "Przegraleś! Komputer ma punkt!";
       punkty_komputer++;
       document.getElementById('Punkty_komputera').innerText = "Punkty komputera: " + punkty_komputer;
     }
  }

  if (punkty_gracz == 10 || punkty_komputer == 10) {
    if (punkty_gracz == 10) document.getElementById('wiadomosc').innerText = "Koniec gry! Udalo ci sie wygrac!";
    else document.getElementById('wiadomosc').innerText = "Koniec gry! Niestety przegrales!";

    punkty_gracz = 0;
    punkty_komputer = 0;
    document.getElementById('Punkty_gracza').innerText = "Twoje punkty: " + punkty_gracz;
    document.getElementById('Punkty_komputera').innerText = "Punkty komputera: " + punkty_komputer;
  }
}

for (var i = 0; i < przycisk.length; i++) {
przycisk[i].addEventListener("click", function(e){
    Gra(this.value);
});
}
