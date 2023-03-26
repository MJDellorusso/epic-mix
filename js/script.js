const epicMix = [
  "Midnight",
  "O-o-oh Child",
  "Wish You Were Here",
  "Heroes",
  "I Put a Spell on You",
  "Call Me, Maybe",
  "Paper Planes",
  "Jolene",
  "Escape",
  "Dig",
  "Pardon Me",
  "Superstition",
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixInfo(epicMix);
  mixList.classList.remove("hide");
  button.classList.add("hide");
});
total.innerText = `${epicMix.length} great songs!!`;

const mixInfo = function (epicMix) {
  epicMix.forEach(function (song, index) {
    let li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">${index + 1}</span>. ${song}`;
    mixList.append(li);
    mixList.classList.remove("hide");
  });
};
