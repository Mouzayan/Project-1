
// ======================================
// ========= global variables =============
//  ======================================

// ======================================
// ========= select dropdown =============
//  ======================================

const middle = document.querySelector('.middle')
const form = document.querySelector("form");

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    let keyWord = document.querySelector("#keyword").value;


    let api_url = `https://newsapi.org/v2/everything?q=${keyWord}&pageSize=100&apiKey=a4001be03ea64ef6981019bb086ecba0`; 

    const resp = await axios.get(api_url);

    console.log(resp.data.articles);
    
    let articles = resp.data.articles;
    let middle = document.querySelector('.middle')
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

    // articles.map(article => {

        for (let i = 0; i < 5; i +=1){
         
        if (articles[i].urlToImage !== null){

            let newDiv = document.createElement("div");
            let newDek = document.createElement("p");
            let newTitle = document.createElement("h4");
            let newInfo3 = document.createElement("h6");
            let newInfo2 = document.createElement("h6");
            let newInfo1 = document.createElement("h6");
            
            newDiv.classList.add("story");
            newDiv.innerHTML += `<img class="article-image" src=${articles[i].urlToImage}>`;
            middle.append(newDiv);

        newInfo1.innerHTML += `<h6 class="article-dtls">Article source: ${articles[i].source.name}</h6>`;
        middle.append(newInfo1);

        newInfo2.innerHTML += `<h6 class="article-dtls">Written by: ${articles[i].author}</h6>`;
        middle.append(newInfo2);

        newInfo3.innerHTML += `<h6 class="article-dtls">Date
        published: ${articles[i].publishedAt}</h6>`;
        middle.append(newInfo3);

        newTitle.classList.add("article-title");
        newTitle.innerHTML += `<h4 class="article-title">${articles[i].title}</h4>`;
        middle.append(newTitle);

        newDek.classList.add("dek");
        newTitle.innerHTML += `<p class="dek">${articles[i].description}</p>`;
        middle.append(newDek);
         } 
 
}

})

