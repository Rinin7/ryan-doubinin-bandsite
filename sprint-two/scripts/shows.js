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

  const htmlHeaders = `
  <ul class="shows__container-top">
  <li class="shows__date-container">
    <div class="shows__heading">DATES</div>
  </li>

  <li class="shows__venue-container">
    <div class="shows__heading">VENUE</div>
  </li>

  <li class="shows__location-container">
    <div class="shows__heading">LOCATION</div>
  </li>
</ul>
  `;

  let html = "";

  shows.forEach((show) => {
    html =
      html +
      `
      <ul class="shows__container">
              <li class="shows__date-container">
                <div class="shows__heading shows__heading-line">DATE</div>
                <div class="shows__content shows__content-date">${show.date}</div>
              </li>

              <li class="shows__venue-container">
                <div class="shows__heading shows__heading-line">VENUE</div>
                <div class="shows__content">${show.venueName}</div>
              </li>

              <li class="shows__location-container">
                <div class="shows__heading shows__heading-line">LOCATION</div>
                <div class="shows__content">${show.locationName}</div>
              </li>

              <li class="shows__button-container">
                <div class="shows__button-content">
                  <button class="shows__button">BUY TICKETS</button>
                </div>
              </li>
            </ul>
      `;
  });

  html = htmlHeaders + html;
  showsContainer.innerHTML = html;
}

renderShows();
