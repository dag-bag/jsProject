import { WorldTrips } from "./Trip.js";

const detailImg = document.querySelector("#detailImg");
console.log("detailImg:", detailImg);

const detailsPage = document.querySelector(".details");

const allTrips = WorldTrips.map((box) => {
  let newBox = document.createElement("div");
  newBox.classList.add("box");
  newBox.innerHTML = `
  
  <div class="imgContainer">
  
  <img src="${box.imgPath}" id="imgContain" alt="Goa beaches images">
  </div>
  <div class="text">
  <div class="location">
  <i class="fas fa-map-marker-alt"></i>
  <h3>
  ${box.location}</h3>
  </div>
  <div class="para">
  
  <p>${box.Description}</p>
  </div>
  
  </div>
  <div class="price">
  <h4>Price</h4>
  
  
  <span class="realPrice">${box.price}$</span><span class="underline">600$</span>
  
  
    </div>
    <div class="stars">
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="far fa-star"></i>
    
    </div>
    <a href="#" class="btn" >See All Details</a>
    `;

  return newBox;
});

const delCol = document.querySelector(".dealCol");
allTrips.forEach((element) => {
  delCol.append(element);
});

const btn = document.querySelectorAll(".btn");

const closeBtn = document.querySelector(".close");
const deals = document.querySelector(".deals");
const Category = document.querySelector(".category");
const tripLocation = document.querySelector(".tripLocation");
const description = document.querySelector(".description");
const realPrice = document.querySelector(".realPrice");
console.log(btn);
const imgContain = document.querySelectorAll("#imgContain");

closeBtn.addEventListener("click", () => {
  detailsPage.style.display = "none";
  deals.style.display = "block";
});

for (let index = 0; index < btn.length; index++) {
  btn[index].addEventListener("click", () => {
    detailsPage.style.display = "flex";
    deals.style.display = "none";
    detailImg.setAttribute("src", imgContain[index].src);
    Category.innerHTML = WorldTrips[index].Category;

    tripLocation.innerHTML = WorldTrips[index].location;
    description.innerHTML = WorldTrips[index].fullDescription;
    realPrice.innerHTML = Goa.converter(WorldTrips[index].price);
  });
}
