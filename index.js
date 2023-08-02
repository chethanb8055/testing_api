const generalBtn = document.getElementById("general");
const businessBtn = document.getElementById("business");
const sportBtn = document.getElementById("sport");
const technologyBtn = document.getElementById("technology");
const entertainmentBtn = document.getElementById("entertainment"); 
const searchBtn = document.getElementById("searchBtn");


const newQuery =document.getElementById("newQuery")
const newsType =document.getElementById("newsType")
const newsdetails =document.getElementById('newsdetails')


// ARRAY
var newsDataArr=[]


// api Key
const API_KEY ="7c7e3e4d6907444fa8bebd89d79e3ec8"
const HEADLINES_NEWS ="https://newsapi.org/v2/top-headlines?country=in&apiKey="
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=de&category=general&apiKey="
const BUSINESS_NEWS ="https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey="
const ENTERTAINMENT_NEWS ="https://newsapi.org/v2/top-headlines?country=de&category=entertainment&apiKey="
const SPORT_NEWS ="https://newsapi.org/v2/top-headlines?country=de&category=sports&apiKey="
const TECHNOLOGY_NEWS ="https://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey="
const SEARCH_NEWS= "https://newsapi.org/v2/everything?q=bitcoin&apiKey="


// Event listeners for each button
generalBtn.addEventListener("click", function() {
  // Handle the click event for the general button here
  fetchGeneralNews();
});

businessBtn.addEventListener("click", function() {
    fetchBusinessNews()
  // Handle the click event for the business button here
  
});

sportBtn.addEventListener("click", function() {
  // Handle the click event for the sport button here
  fetchSportsNews()
});

technologyBtn.addEventListener("click", function() {
  // Handle the click event for the technology button here
  fetchTechnologyNews()
});

entertainmentBtn.addEventListener("click", function() {
  // Handle the click event for the entertainment button here
  fetchEntertainmentNews()
});

searchBtn.addEventListener("click", function() {
  // Handle the click event for the search button here
  fetchQueryNews()
});

const fetchGeneralNews =async ()=>{
    const response = await fetch(GENERAL_NEWS+API_KEY)
    newsDataArr =[]
    if(response.status >=200 && response.status <300){
        const myJson =await response.json()
        newsDataArr = myJson.articles
        console.log(newsDataArr)
    }else{
        //handle 
        console.log(response.status,response.statusText)
    }
    displayNews();
}

const fetchBusinessNews =async ()=>{
  const response = await fetch(BUSINESS_NEWS+API_KEY)
  newsDataArr =[]
  if(response.status >=200 && response.status <300){
      const myJson =await response.json()
      newsDataArr = myJson.articles
  }else{
      //handle 
      console.log(response.status,response.statusText)
  }
  displayNews();
}


const fetchEntertainmentNews =async ()=>{
  const response = await fetch(ENTERTAINMENT_NEWS+API_KEY)
  newsDataArr =[]
  if(response.status >=200 && response.status <300){
      const myJson =await response.json()
      newsDataArr = myJson.articles
  }else{
      //handle 
      console.log(response.status,response.statusText)
  }
  displayNews();
}

const fetchSportsNews=async ()=>{
  const response = await fetch(SPORT_NEWS+API_KEY)
  newsDataArr =[]
  if(response.status >=200 && response.status <300){
      const myJson =await response.json()
      newsDataArr = myJson.articles
  }else{
      //handle 
      console.log(response.status,response.statusText)
  }
  displayNews();
}


const fetchTechnologyNews =async ()=>{
  const response = await fetch(TECHNOLOGY_NEWS+API_KEY)
  newsDataArr =[]
  if(response.status >=200 && response.status <300){
      const myJson =await response.json()
      newsDataArr = myJson.articles
  }else{
      //handle 
      console.log(response.status,response.statusText)
  }
  displayNews();
}
const fetchQueryNews =async ()=>{
  const response = await fetch(SEARCH_NEWS+newQuery.value+"&apiKey"+API_KEY)
  newsDataArr =[]
  if(response.status >=200 && response.status <300){
      const myJson =await response.json()
      newsDataArr = myJson.articles
      console.log(newsDataArr)
  }else{
      //handle 
      console.log(response.status,response.statusText)
  }
  displayNews();
}

function displayNews(){
  newsdetails.innerHTML = "";

  if(newsDataArr.length == 0) {
      newsdetails.innerHTML = "<h5>No data found.</h5>"
      return;
  }else{
  newsDataArr.forEach(news => {

      var date = news.publishedAt.split("T");
      
      var col = document.createElement('div');
      col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

      var card = document.createElement('div');
      card.className = "p-2";

      var image = document.createElement('img');
      image.setAttribute("height","matchparent");
      image.setAttribute("width","100%");
      image.src=news.urlToImage;

      var cardBody = document.createElement('div');
      
      var newsHeading = document.createElement('h5');
      newsHeading.className = "card-title";
      newsHeading.innerHTML = news.title;

      var dateHeading = document.createElement('h6');
      dateHeading.className = "text-primary";
      dateHeading.innerHTML = date[0];

      var discription = document.createElement('p');
      discription.className="text-muted";
      discription.innerHTML = news.description;

      var link = document.createElement('a');
      link.className="btn btn-dark";
      link.setAttribute("target", "_blank");
      link.href = news.url;
      link.innerHTML="Read more";

      cardBody.appendChild(newsHeading);
      cardBody.appendChild(dateHeading);
      cardBody.appendChild(discription);
      cardBody.appendChild(link);

      card.appendChild(image);
      card.appendChild(cardBody);

      col.appendChild(card);

      newsdetails.appendChild(col);
  });
}

}


// cricket API

// https://api.cricapi.com/v1/currentMatches?apikey=9104f68f-d647-4ff8-89e5-76d6d4a11b46&offset=0