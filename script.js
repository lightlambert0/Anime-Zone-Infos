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
  "god of high school",
  "godofhighschool.html"
  
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

