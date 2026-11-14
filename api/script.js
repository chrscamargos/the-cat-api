const container = document.getElementById("container")

fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        data.forEach(cat => {
            const card = document.createElement("div")
            card.className = "box"
            card.innerHTML = `
                <img src=${cat}   />
            `
        });
    })