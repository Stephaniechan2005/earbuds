(() => {
  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  //data

  const infoBoxes = [
    {
      title: "Cover",
      text: "Noise Cancelling cover make you isolate from the morden world.",
      image: "images/cover.jpg",
    },
    {
      title: "Adjustable Plastic Tip",
      text: "Different sizes ensure a comfortable fit for everyone.",
      image: "images/eartip.jpg",
    },
    {
      title: "Magic Circle",
      text: "the magical icon",
      image: "images/magiccircle.jpg",
    },
    {
      title: "Invisible Fast Charger",
      text: "Charges seamlessly and quickly without compromising design.",
      image: "images/charger.jpg",
    },
    {
      title: "Round Shape Earbud Shell",
      text: "Rounded design for ultimate comfort and stability during use.",
      image: "images/roundshape.jpg",
    },
    {
      title: "High-Quality Speaker",
      text: "Delivers immersive audio experience with deep bass and clarity.",
      image: "images/speaker.jpg",
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

      let img = document.createElement("img");
      img.src = infoBox.image;
      img.alt = infoBox.title;
      //selected.appendChild(title variable name);
      //selected.appendChild( p variable name);
      selected.appendChild(img);
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
