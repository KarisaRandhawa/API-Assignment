//linking API
const websiteURL = "https://ergast.com/api/f1";
let url;

//homePage
const searchTerm = document.querySelector("#Year");
const raceYear = document.querySelector(".raceYear");
const searchForm = document.querySelector("form");
const searchBtn = document.querySelector(".searchBtn");

//displayResults
const section = document.querySelector("section");
searchForm.addEventListener("submit", fetchResults);

//fetching results from API
function fetchResults(event) {
  event.preventDefault();
  console.log(searchTerm);
  url = `${websiteURL}/${searchTerm.value}.json`;
  fetch(url, {
    method: "GET",
  })
    .then((results) => {
      return results.json();
    })
    .then((json) => {
      displayResults(json);
    });
}
//limiting display results
function displayResults(results) {
  let raceResults = results.MRData.RaceTable.Races;
  for (i = 0; i <= 6; i++) {
    console.log(raceResults[i]);
    let current = raceResults[i];
    section.style.display = "block";

    //Manipulating html
    let result = document.createElement("div");
    let raceName = document.createElement("h3");
    let date = document.createElement("p");
    let season = document.createElement("p");
    let round = document.createElement("p");
    let raceLink = document.createElement("a");

    //displaying API result link
    raceLink.href = current.url;
    raceLink.innerHTML = `<a> View Full Doc </a>`;

    // displaying search result content
    raceName.textContent = current.raceName;
    season.innerHTML = `<p> Season ${current.season}</p>`;
    round.innerHTML = `<p> Rounds: ${current.round}</p>`;
    date.innerHTML = `<p><i>Race Date ${current.date}</i><p/>`;

    // linking to html & setting display result order
    result.appendChild(raceName);
    result.appendChild(date);
    result.appendChild(season);
    result.appendChild(round);
    result.appendChild(raceLink);
    section.appendChild(result);
  }
}
