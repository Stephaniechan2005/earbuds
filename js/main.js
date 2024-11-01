(() => {
  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  //data

  const infoBoxes = [
    {
      titles: "Noise cancelling microphone",
      text: "Noise Cancelling microphone make the sound better",
    },
    {
      titles: "Gel tip ear piece",
      text: "the most comfortable ear piece ever",
      image: "images/earbud.jpg",
    },
  ];

  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`#hotspot-${index + 1}`);

      let title = document.createElement("h2");
      title.textContent = infoBox.title;
      // create title variable = document.createElement("h2");
      // title variable.textContent = infoBox.title;

      let p = document.createElement("p");
      p.textContent = infoBox.text;
      //create a p variable = document.createElement("p");
      //p variable.textContent = infoBox.text;

      //selected.appendChild(title variable name);
      //selected.appendChild( p variable name);
      selected.appendChild(title);
      selected.appendChild(p);
    });
  }

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  function modelLoaded() {
    loadInfo();
  }

  //Event listeners
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });
})();
