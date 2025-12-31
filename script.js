const animePages = {
  "one piece":
"onepiece.html",
  "demon slayer":
"démonslayer.html",
  "fire force":
"fireforce.html",
  "dandadan":
"dandadan.html",
  "kaiju no 8":
"kaiju no 8.html",
  "dr.stone":
"dr.stone.html",
  "one punch man":
     "onepunchman.html",
"jujutsu kaisen":
"jujutsukaisen.html",
  "sakamoto days":
  "sakamotodays.html",
  "the seven deadly seens":
   "thesevendeadlyseens.html",
  "the rising of the shield hero":
  "therisingoftheshieldhero.html",
  "chainsaw man":
    "chainsawman.html",
 "my hero academia":
"myheroacademia.html",
  "black clover":
   "blackclover.html",
"fairy tail":
"fairytail.html",
  "attaque des titants":
   "attaquedestitants.html",
  "shangri-la frontier":
    "shangrilafrontier.html",
  "naruto":
    "naruto.html",
  "to be hero x":
    "tobeherox.html",
  "food wars":
    "foodwar.html",
  "death note":
    "deathnote.html",
  "naruto shippudden":
    "narutoshippudden.html",
  "danmachi":
    "danmachi.html",
  "spy family":
    "spyfamily.html",
  "gachiakuta":
    "gachiakuta.html",
  "solo leveling":
    "sololeveling.html",
  "hunter x hunter":
  "hunterxhunter.html",
  "dragon ball":
    "dragonball.html",
  "dead mount death play":
  "deadmountdeathplay.html",
  "blue exorcist":
   "blueexorcist.html",
  "god of high school":
  "godofhighschool.html",
  "super cube":
    "supercube.html",
  "fate stay night":
    "fatestaynight.html",
  "oshi no ko":
  "oshinoko.html",
  "grimoire of zero":
    "grimoireofzero.html",
  "seraph of the end":
    "seraphoftheend.html",
  "tatoeba last dungeon":
    "tatoebalastdungeon.html",
  "vanitas no carte":
"vanitasnocarte.html",
  "world's end harem":
    "world'sendharem.html",
  "blassreiter":
    "blassreiter.html",
  "wind breaker":
    "windbreaker.html",
  "eighty six":
    "eighty-six.html",
  "eminence in shadow":
    "eminenceinshadow.html"
  
  
};

function rechercherAnime() {
  const input=
document.getElementById("searchInput").value.toLowerCase().trim();
   if (animePages[input]) {
      window.location.href =
animePages[input];
   } else {
     alert("Animé non trouvé !");
   }
}
function 
allerVersAnime(event) {
   if (event.key ==="Enter")
{
    rechercherAnime();
     
}
}

// Lier le bouton
"Recherche"
document.addEventListener("DOMContentLoaded", () => {

document.getElementById("searchButton").addEventListener("click", rechercherAnime);
});


// 🎉 Confettis qui tombent
window.addEventListener('load', () => {
  const container = document.createElement('div');
  container.id = 'confetti-container';
  document.body.appendChild(container);

const container = document.getElementById('sparkle-container');
for(let i = 0; i < 50; i++) {
  const s = document.createElement('span');
  s.style.left = `Math.random() * 100
  s.style.top = {Math.random() * 100 + 50}px;
  s.style.animationDelay = ${Math.random() * 2}s;
  container.appendChild(s);
}
});


