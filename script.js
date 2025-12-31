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
<canvas id="confetti"></canvas>
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  let W = window.innerWidth;
  let H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;

  const confettiCount = 150;
  const confetti = [];

  const colors = ['#ff0a54', '#ff477e', '#ff85a1', '#fbb1b1', '#f9bec7'];

  function randomRange(min, max) {
 return Math.random() * (max - min) + min;
  }

  function Confetti() {
    this.x = Math.random() * W;
    this.y = Math.random() * H - H;
    this.r = randomRange(5, 10);
    this.d = (Math.random() * confettiCount) + 10;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.tilt = randomRange(-10, 10);
    this.tiltAngleIncremental = randomRange(0.05, 0.12);
    this.tiltAngle = 0;

    this.draw = function() {
      ctx.beginPath();
      ctx.lineWidth = this.r / 2;
      ctx.strokeStyle = this.color;
      ctx.moveTo(this.x + this.tilt + this.r / 4, this.y);
      ctx.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 4);
      ctx.stroke();
    };
  }

  function initConfetti() {
    for(let i=0; i < confettiCount; i++) {
      confetti.push(new Confetti());
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for(let i=0; i < confettiCount; i++) {
      confetti[i].draw();
    }
    update();
  }

  let angle = 0;

  function update() {
    angle += 0.01;
    for(let i=0; i < confettiCount; i++) {
      let c = confetti[i];
      c.tiltAngle += c.tiltAngleIncremental;
      c.y += (Math.cos(angle + c.d) + 3 + c.r / 2) / 2;
      c.x += Math.sin(angle);
      c.tilt = Math.sin(c.tiltAngle) * 15;

      if(c.y > H) {
        confetti[i] = new Confetti();
        confetti[i].x = Math.random() * W;
        confetti[i].y = -10;
      }
    }
  }

  window.addEventListener('resize', () => {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
  });

  initConfetti();
  setInterval(draw, 20);

