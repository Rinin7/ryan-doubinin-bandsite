let shows = [
  {
    date: "Mon Dec 17 2018",
    venueName: "Ronald Lane",
    locationName: "San Francisco, CA",
  },
  {
    date: "Tue Jul 18 2019",
    venueName: "Pier 3 East",
    locationName: "San Francisco, CA",
  },
  {
    date: "Fri Jul 22 2019",
    venueName: "View Lounge",
    locationName: "San Francisco, CA",
  },
  {
    date: "Sat Aug 12 2019",
    venueName: "Hyatt Agency",
    locationName: "San Francisco, CA",
  },
  {
    date: "Fri Sep 05 2019",
    venueName: "Moscow Center",
    locationName: "San Francisco, CA",
  },
  {
    date: "Wed Aug 11 2019",
    venueName: "Pres Club",
    locationName: "San Francisco, CA",
  },
];

function renderShows() {
  const showsContainer = document.querySelector(".shows__table-container");

  const containerTop = document.createElement("ul");
  containerTop.className = "shows__container-top";
  showsContainer.appendChild(containerTop);

  const dateContainer = document.createElement("li");
  dateContainer.className = "shows__date-container";
  containerTop.appendChild(dateContainer);

  const showsHeadingDates = document.createElement("div");
  showsHeadingDates.className = "shows__heading";
  showsHeadingDates.innerText = "DATES";
  dateContainer.appendChild(showsHeadingDates);

  const venueContainer = document.createElement("li");
  venueContainer.className = "shows__venue-container";
  containerTop.appendChild(venueContainer);

  const showsHeadingVenue = document.createElement("div");
  showsHeadingVenue.className = "shows__heading";
  showsHeadingVenue.innerText = "VENUE";
  venueContainer.appendChild(showsHeadingVenue);

  const locationContainer = document.createElement("li");
  locationContainer.className = "shows__location-container";
  containerTop.appendChild(locationContainer);

  const showsHeadingLoc = document.createElement("div");
  showsHeadingLoc.className = "shows__heading";
  showsHeadingLoc.innerText = "LOCATION";
  locationContainer.appendChild(showsHeadingLoc);

  shows.forEach((show) => {
    const showsContainerTable = document.createElement("ul");
    showsContainerTable.className = "shows__container";
    showsContainer.appendChild(showsContainerTable);

    const dateContainerTable = document.createElement("li");
    dateContainerTable.className = "shows__date-container";
    showsContainerTable.appendChild(dateContainerTable);

    const dateHeadingTable = document.createElement("div");
    dateHeadingTable.className = "shows__heading shows__heading-line";
    dateHeadingTable.innerText = "DATE";
    dateContainerTable.appendChild(dateHeadingTable);

    const dateContentTable = document.createElement("div");
    dateContentTable.className = "shows__content";
    dateContentTable.innerText = show.date;
    dateContainerTable.appendChild(dateContentTable);

    const venueContainerTable = document.createElement("li");
    venueContainerTable.className = "shows__venue-container";
    showsContainerTable.appendChild(venueContainerTable);

    const venueHeadingTable = document.createElement("div");
    venueHeadingTable.className = "shows__heading shows__heading-line";
    venueHeadingTable.innerText = "VENUE";
    venueContainerTable.appendChild(venueHeadingTable);

    const venueContentTable = document.createElement("div");
    venueContentTable.className = "shows__content";
    venueContentTable.innerText = show.venueName;
    venueContainerTable.appendChild(venueContentTable);

    const locationContainerTable = document.createElement("li");
    locationContainerTable.className = "shows__location-container";
    showsContainerTable.appendChild(locationContainerTable);

    const locationHeadingTable = document.createElement("div");
    locationHeadingTable.className = "shows__heading shows__heading-line";
    locationHeadingTable.innerText = "LOCATION";
    locationContainerTable.appendChild(locationHeadingTable);

    const locationContentTable = document.createElement("div");
    locationContentTable.className = "shows__content";
    locationContentTable.innerText = show.locationName;
    locationContainerTable.appendChild(locationContentTable);

    const buttonContainer = document.createElement("li");
    buttonContainer.className = "shows__button-container";
    showsContainerTable.appendChild(buttonContainer);

    const buttonContent = document.createElement("div");
    buttonContent.className = "shows__button-content";
    buttonContainer.appendChild(buttonContent);

    const showsButton = document.createElement("button");
    showsButton.className = "shows__button";
    showsButton.innerText = "BUY TICKETS";
    buttonContent.appendChild(showsButton);
  });
}

renderShows();

const apiUrl = "https://project-1-api.herokuapp.com";
const apiKey = "?api_key=7c5f3ee5-b4a4-42c4-99d5-fe66c6b56949";
const endPoint = "/showdates";

let showInfo = axios
  .get(apiUrl + endPoint + apiKey)

  .then((res) => {
    console.log(res.request.response);
    let showsArray = res.request.response;
  })

  .catch((error) => {
    console.log("axios failed");
  });
