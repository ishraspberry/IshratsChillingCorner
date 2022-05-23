var character = document.getElementById("person");
var block = document.getElementById("obstacle");
var elem = document.getElementById("num");

document.addEventListener("click", jump);

total = 1;

block.addEventListener("animationiteration", () => {
  elem.innerHTML = total;
  elem.value = total;
  total++;
});

function jump() {
  if (character.classList == "animate") {
    return;
  }
  character.classList.add("animate");
  setTimeout(removeJump, 400); //400ms = length of animation
}
function removeJump() {
  character.classList.remove("animate");
}

function checkDead() {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );

  if (blockLeft <= 35 && blockLeft > 0 && characterTop >= 196) {
    total = 0;
    elem.innerHTML = total;
    alert("Game over");
  }
}

var interval = setInterval(checkDead, 10);
