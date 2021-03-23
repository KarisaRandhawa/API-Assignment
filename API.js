const websiteURL = "http[s]://ergast.com/api/<series>/<season>/<round>/..." ;
const APIKey = "" ;
let web_url;
//homePage
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const searchForm = document.querySelector('form');
const searchBtn = document.querySelector('.searchBtn');
//displayResults
const section = document.querySelector('section');
const nextBtn = document.querySelector('.nextPage');
const previousBtn = document.querySelector('goBack');
const footer = document.querySelector('footer');
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

footer.style.display = 'none';
let pageNumber = 0;
displayFooter = false;

function fetchResults () {

}