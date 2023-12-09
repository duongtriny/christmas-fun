function initiate() {
  let stars = [];
  let starsR = [];
  for (let i = 0; i < 100; i++) {
    let str = `
      <span class="my-star-left" style="--i:${i};">
        <i class="iconoir-star-solid"></i>
      </span>
    `;
    stars.push(str);
    str = `
      <span class="my-star-right" style="--i:${i};">
        <i class="iconoir-star-solid"></i>
      </span>
    `;
    starsR.push(str);
  }
  let html = stars.join(" ");
  let tree = document.getElementsByClassName("l-tree");
  tree[0].innerHTML = html;
  html = starsR.join(" ");
  tree = document.getElementsByClassName("r-tree");
  tree[0].innerHTML = html;



  function animate() {
    var text = textElement.innerHTML;
    text = text.replace(" ", "_")
    var len = text.length
    var wrapped = "";
    for (var i in text) {
      wrapped += '<span>' + text.charAt(i) + '</span>';
    }
    textElement.innerHTML = wrapped
    var delay = 0
    for (var i = 0; i < len; i++) {
      var childQuery = "#demo span:nth-child(" + (i + 1) + ")"
      document.querySelector(childQuery).style.animationDelay = delay + "s";
      delay += 0.25
    }
  
    document.querySelectorAll('#demo span').forEach(span => span.classList.add('animated'))
  }
  
  document.getElementById('button').addEventListener('click', function() {
    animate()
    if(textInput.value === "") {
      textElement.innerHTML = ""
    }
  })
  
  animate()
}

function genLeft() {
  for (let i = 0; i <= 20; i++) {
    console.log(`${i * 5}% {
      transform: translate(${i % 2 == 0 ? i * (-10) : i * 10}px, ${i * 25}px) translateZ(${i * 5}px);
    }`)
  }
}

function genRight() {
  for (let i = 0; i <= 20; i++) {
    console.log(`${i * 5}% {
      transform: translate(${i % 2 == 0 ? i * 10 : i * (-10)}px, ${i * 25}px) translateZ(${i * 5}px);
    }`)
  }
}
