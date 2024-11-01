(() => {
  console.log("IIFE Fired");

  // Variable
  const hotspots = document.querySelectorAll(".Hotspot");
  //console.log(hotspots);

  //functions
  function showInfo(e) {
    console.log(e.currentTarget.slot);
    let selected = document.querySelector(
      `button[slot="${e.currentTarget.slot}"] > div`
    );
    //button[slot="hotspot-4"> div]
    gsap.to(selected, 1, { autoAlpha: 1 });
  }
  function hideInfo(e) {
    console.log("hideInfo called");
    let selected = document.querySelector(
      `button[slot="${e.currentTarget.slot}"] > div`
    );
    //button[slot="hotspot-4"> div]
    gsap.to(selected, 1, { autoAlpha: 0 });

    let name = "Marco";
    console.log("Hello my name is" + name + "DeLuca");
    console.log(`Hello my name
      is ${name}
      De Luca`);
  }
  //event listeners
  hotspots.forEach((hotspot) => {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });
})();
