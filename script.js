
// ======================================
// ========= global variables =============
//  ======================================

// ======================================
// ========= select dropdown =============
//  ======================================

// const getStories = async () =>{ 
//     let keyWord = document.querySelector("input").value;
//     let api_url = `https://newsapi.org/v2/everything?q=${keyWord}&apiKey=a4001be03ea64ef6981019bb086ecba0`;  
//     const resp = await axios.get(api_url)
//     console.log(resp)
// }
// getStories();
const middle = document.querySelector('.middle')
const form = document.querySelector("form");

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    let keyWord = document.querySelector("input").value;
    let api_url = `https://newsapi.org/v2/everything?q=${keyWord}&apiKey=a4001be03ea64ef6981019bb086ecba0`;   
    const resp = await axios.get(api_url);
    console.log(resp.data.articles);
    
    let articles = resp.data.articles
    articles.map(article => {
        if (article.urlToImage !== null){
        let newDiv = document.createElement("div");
        newDiv.innerHTML += `<img class="article-image" src=${article.urlToImage}>`;
        middle.append(newDiv);

        let newInfo1 = document.createElement("p");
        newInfo1.innerHTML += `<p class="article-info1">Article source: ${article.source.name}</p>`;
        middle.append(newInfo1);

        let newInfo2 = document.createElement("p");
        newInfo2.innerHTML += `<p class="article-info2">Written by: ${article.author}</p>`;
        middle.append(newInfo2);

        let newInfo3 = document.createElement("p");
        newInfo3.innerHTML += `<p class="article-info3">Date published: ${article.publishedAt}</p>`;
        middle.append(newInfo3);

        let newTitle = document.createElement("h4");
        newTitle.innerHTML += `<h4 class="article-title">${article.title}</h4>`;
        middle.append(newTitle);

        let newDek = document.createElement("p");
        newTitle.innerHTML += `<p class="dek">${article.description}</p>`;
        middle.append(newDek);
        }
    })
})

//     article.content > 