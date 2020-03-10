
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


    let api_url = `https://newsapi.org/v2/everything?q=${keyWord}&pageSize=40&apiKey=a4001be03ea64ef6981019bb086ecba0`; 

    const resp = await axios.get(api_url);

    console.log(resp.data.articles);
    
    let articles = resp.data.articles;

    articles.map(article => {

    
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



        if (article.urlToImage !== null){

        let newDiv = document.createElement("div");
        newDiv.classList.add("story");
        newDiv.innerHTML += `<img class="article-image" src=${article.urlToImage}>`;
        middle.append(newDiv);

        let newInfo1 = document.createElement("h6");
        newInfo1.innerHTML += `<h6 class="article-dtls">Article source: ${article.source.name}</h6>`;
        middle.append(newInfo1);

        let newInfo2 = document.createElement("h6");
        newInfo2.innerHTML += `<h6 class="article-dtls">Written by: ${article.author}</h6>`;
        middle.append(newInfo2);

        let newInfo3 = document.createElement("h6");
        newInfo3.innerHTML += `<h6 class="article-dtls">Date
        published: ${article.publishedAt}</h6>`;
        middle.append(newInfo3);

        let newTitle = document.createElement("h4");
        newTitle.classList.add("article-title");
        newTitle.innerHTML += `<h4 class="article-title">${article.title}</h4>`;
        middle.append(newTitle);

        let newDek = document.createElement("p");
        newDek.classList.add("dek");
        newTitle.innerHTML += `<p class="dek">${article.description}</p>`;
        middle.append(newDek);
         } 
 
})

})

