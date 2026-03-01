const modulesContainer = document.querySelector(".course-container");

const modules =[
    {
        title : "Module 1",
        image : "webdev1.jpeg",
        link :  "#"
    },
    {
        title : "Module 2",
        image : "webdev1.jpeg",
        link :  "#"
    },
    {
        title : "Module 3",
        image : "webdev1.jpeg",
        link :  "#"
    },
    {
        title : "Module 4",
        image : "webdev1.jpeg",
        link :  "#"
    },
    {
        title : "Module 5",
        image : "webdev1.jpeg",
        link :  "#"
    },
    {
        title : "Module 6",
        image : "webdev1.jpeg",
        link :  "#"
    }
]

modules.forEach(module => {
    
    const card = document.createElement("div");
    
    card.className = "modules"
    
    card.innerHTML = `
    <img src="${module.image}">
    <p class="text">${module.title}</p>
    <a href="${module.link}" class="btn">Click</a>
    `;
    modulesContainer.appendChild(card);
})
