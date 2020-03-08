
// ======================================
// ========= global variables =============
//  ======================================
const api_url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=a4001be03ea64ef6981019bb086ecba0";

// const api_key = a4001be03ea64ef6981019bb086ecba0;
// const searchWord = document.querySelector("input");

// const button = document.querySelector("#try-me");
// const select = document.querySelector("select");
// const div = document.querySelector("div");

// ======================================
// ========= select dropdown =============
//  ======================================

const getHeadlines = async () =>{  
    const resp = await axios.get(api_url)
    console.log(resp)
}
getHeadlines();

// button.addEventListener('click', async () => {
//  let word = searchWord.value;'   
//  const resp = await axios.get("https://api.thecatapi.com/v1/categories", api_key)
//  console.log(resp)

// }


