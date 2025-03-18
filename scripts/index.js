const ramens = [
  {
    id: 1,
    name: "Shoyu Ramen",
    restaurant: "Ichiran",
    image: "shoyu.jpg",
    rating: 5,
    comment: "Delicious!",
  },
  {
    id: 2,
    name: "Miso Ramen",
    restaurant: "Menya",
    image: "miso.jpg",
    rating: 4,
    comment: "Very flavorful!",
  },
  {
    id: 3,
    name: "Tonkotsu Ramen",
    restaurant: "Ramen-ya",
    image: "tonkotsu.jpg",
  },
];

// display ramens in ramens menu

const displayRamen = (ramen) => {
let section = document.getElementById("ramen-menu");

ramens.forEach((ramen) => {
    let img = document.createElement("img");
    img.src = ramen.image;
    img.addEventListener("click", () => 
        showRamenDetails(ramen));
    section.appendChild(img);
});

console.log("this is my section", section);
}

const handleClick = () => {
    console.log("I was clicked");
}

const showRamenDetails = (ramen) => {
    // get details of the ramen and display them in the ramen-detail section
    let section = document.getElementById("ramen-detail");
    section.innerHTML = "";
    let img = document.createElement("img");
    img.src = ramen.image;
    section.appendChild(img);
    let h2 = document.createElement("h2");
    h2.textContent = ramen.name;
    section.appendChild(h2);
        let p = document.createElement("p");
    }

    const createNewRamen = (ramen) => {
        name = document.getElementById("new-name").value;
        restaurant = document.getElementById("new-restaurant").value;
        image = document.getElementById("new-image").value;
        rating = document.getElementById("new-rating").value;
        comment = document.getElementById("new-comment").value;
        let newRamen = {
            name: name,
            restaurant: restaurant,
            image: image,
            rating: rating,
            comment: comment,
        };
        ramens.push(newRamen);

        onload(() => {
            displayRamen();
        });        
    };

    const ramenDetails = document.getElementById("ramen-detail");

    const form = document.getElementById("new-ramen");

    ramenDetails.addEventListener("click", () => 
    {
        handleClick();
    });

    displayRamen();