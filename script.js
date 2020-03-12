
// ======================================
// ========= global variables ===========
// ======================================

const middle = document.querySelector('.middle')
const form = document.querySelector("form");

// ======================================
// =============add event ===============
// ======================================

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    let keyWord = document.querySelector("#keyword").value;
    
    let api_url = `https://newsapi.org/v2/everything?q=${keyWord}&pageSize=100&apiKey=a4001be03ea64ef6981019bb086ecba0`; 
    
    const resp = await axios.get(api_url);
    
    console.log(resp.data.articles);
    
    let articles = resp.data.articles;
    let middle = document.querySelector('.middle');
    middle.innerHTML = ''
    
    
    function shuffle(articles) {
        let currentIndex = articles.length;
        let temporaryValue = null;
        let randomIndex = null;
        while (currentIndex > 0){
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = articles[currentIndex];
            articles[currentIndex] = articles[randomIndex];
            articles[randomIndex] = temporaryValue;
        }
        return shuffle;
    }
    shuffle(articles);
    
    
    for (let i = 0; i < 5; i +=1){
        
        if (articles[i].urlToImage !== null){
            

            let newDiv = document.createElement("div");
            let newDiv2 = document.createElement('div');
            let newDiv3 = document.createElement('div');
            let newDiv4 = document.createElement('div');
            let newDiv5 = document.createElement('hr');
            let newDek = document.createElement("p");
            let newTitle = document.createElement("h4");
            let newInfo3 = document.createElement("p");
            let newInfo2 = document.createElement("p");
            let newInfo1 = document.createElement("p");
            
            newDiv2.classList.add('article-info')
            newDiv3.classList.add('article-info2')
            newDiv4.classList.add('article-text')
            newDiv5.classList.add('story-hr');
            newDiv.classList.add("story");

            newDiv.innerHTML += `<img class="article-image" src=${articles[i].urlToImage}>`;
            middle.append(newDiv);

            newInfo1.innerHTML += `<p class="article-detail">Source: ${articles[i].source.name}</p>`;
            newDiv2.appendChild(newInfo1);

            newInfo2.innerHTML += `<p class="article-detail">By: ${articles[i].author}</p>`;
            newDiv2.appendChild(newInfo2);

            newInfo3.innerHTML += `<p class="article-detail">On: ${articles[i].publishedAt}</p>`;
            newDiv2.appendChild(newInfo3);

            newTitle.classList.add("article-title");
            newTitle.innerHTML += `<h4 class="article-title">${articles[i].title}</h4>`;
            newDiv3.append(newTitle);

            newDek.classList.add("dek");
            newTitle.innerHTML += `<p class="dek">${articles[i].description}</p>`;
            newDiv3.append(newDek);

            newDiv4.appendChild(newDiv2);
            newDiv4.appendChild(newDiv3)
            newDiv.appendChild(newDiv4);

            if (newDiv[i] !== 4){
            middle.appendChild(newDiv5);
            };
            
         } 
 
}

})

