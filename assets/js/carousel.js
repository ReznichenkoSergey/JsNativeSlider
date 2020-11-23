function Carousel() {
  const slideBackgrounds = [
    "Dubaj.jpg",
    "Golden-Gate.jpg",
    "London.jpg",
    "Praga.jpg",
    "Sydney.jpg",
  ];

  var body = document.querySelector("body");
  var root = document.createElement("div");
  root.setAttribute("class", "carousel");

  //slides
  let slidesContainer = document.createElement("div");
  slidesContainer.setAttribute("class", "slides");

  slidesContainer.AddItem = function (index) {
    //slides
    let childItem = document.createElement("div");
    childItem.setAttribute("class", "slide");
    //add image background
    childItem.setAttribute(
      "style",
      `background-image: url(assets/img/${slideBackgrounds[index]})`
    );
    //set active class the first element
    if (index === 0) childItem.classList.add("active");
    //Append
    this.appendChild(childItem);
  };

  //indicators
  let indicatorsContainer = document.createElement("div");
  indicatorsContainer.setAttribute("class", "indicators");
  indicatorsContainer.AddItem = function (index) {
    let childItem = document.createElement("span");
    childItem.setAttribute("class", "indicator");
    if (index === 0) childItem.classList.add("active");
    childItem.setAttribute("data-slide-to", index);
    this.appendChild(childItem);
  };

  //controls
  let controlsContainer = document.createElement("div");
  controlsContainer.setAttribute("class", "controls");
  controlsContainer.AddItem = function (index) {
    if (index > 2) return;
    //span
    let childItem = document.createElement("span");    
    //link
    let childLink = document.createElement("i");
    
    switch (index) {
      case 0:
        childItem.setAttribute("id","pause-play-btn");
        childItem.setAttribute("class", "control-pause");

        childLink.classList.add("far");
        childLink.classList.add("fa-pause-circle");
        break;
      case 1:
        childItem.setAttribute("id","prev-btn");
        childItem.setAttribute("class", "control-prev");

        childLink.classList.add("fas");
        childLink.classList.add("fa-angle-left");
        break;
      case 2:
        childItem.setAttribute("id","next-btn");
        childItem.setAttribute("class", "control-next");

        childLink.classList.add("fas");
        childLink.classList.add("fa-angle-right");
        break;
    }
    childItem.appendChild(childLink);
    this.appendChild(childItem);
  };

  for (let i = 0; i < slideBackgrounds.length; i++) {
    slidesContainer.AddItem(i);
    indicatorsContainer.AddItem(i);
    controlsContainer.AddItem(i);
  }
  root.appendChild(slidesContainer);
  root.appendChild(indicatorsContainer);
  root.appendChild(controlsContainer);
  body.appendChild(root);
}
Carousel();
