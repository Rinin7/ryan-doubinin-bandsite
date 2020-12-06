const apiUrl = "https://project-1-api.herokuapp.com";
const apiKey = "?api_key=7c5f3ee5-b4a4-42c4-99d5-fe66c6b56949";
const endPoint = "/comments";

function renderComments() {
  const commentsContainer = document.querySelector(".comments");
  commentsContainer.innerHTML = "";

  let commentInfo = axios
    .get(apiUrl + endPoint + apiKey)

    .catch((error) => {
      console.log("axios failed");
    })

    .then((res) => {
      let commentsArray = res.data;

      // this function is used to organize the comments from newest to oldest
      commentsArray.sort(function (a, b) {
        let timeA = a.timestamp;
        let timeB = b.timestamp;
        if (timeA > timeB) {
          return -1;
        }
        if (timeA < timeB) {
          return 1;
        }
        return 0;
      });

      commentsArray.forEach((comment) => {
        const commentElement = constructCommentNode(comment);
        commentsContainer.appendChild(commentElement);
      });
    });
}

renderComments();

const commentForm = document.querySelector(".comment__form");
commentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  axios
    .post(apiUrl + endPoint + apiKey, {
      name: document.querySelector(".comment__input-name-field").value,
      comment: document.querySelector(".comment__input-comment-field").value,
    })

    .catch((error) => {
      console.log("axios failed");
    })

    .then((res) => {
      renderComments();
      commentForm.reset();
    });
});

function constructCommentNode(comment) {
  const commentsHistory = document.createElement("div");
  commentsHistory.className = "comments__history";

  const profileContainer = document.createElement("div");
  profileContainer.className = "comments__history-profile-container";
  commentsHistory.appendChild(profileContainer);

  const profile = document.createElement("img");
  profile.setAttribute("src", "./assets/images/emptyprofile.png");
  profile.setAttribute("alt", "profile picture for user");
  profile.className = "comments__history-profile";
  profileContainer.appendChild(profile);

  const textContainer = document.createElement("div");
  textContainer.className = "comments__history-text-container";
  commentsHistory.appendChild(textContainer);

  const headerContainer = document.createElement("div");
  headerContainer.className = "comments__history-header-container";
  textContainer.appendChild(headerContainer);

  const historyName = document.createElement("div");
  historyName.className = "comments__history-name";
  historyName.innerText = comment.name;
  headerContainer.appendChild(historyName);

  const historyDate = document.createElement("div");
  historyDate.className = "comments__history-date";
  historyDate.innerText = timeSince(comment.timestamp);
  headerContainer.appendChild(historyDate);

  const historyBody = document.createElement("div");
  historyBody.className = "comments__history-body";
  historyBody.innerText = comment.comment;
  textContainer.appendChild(historyBody);

  return commentsHistory;
}

//function used to make timestamp more readable
function timeSince(date) {
  let currentTime = Date.now();
  let difference = currentTime - date;
  let num = 0;

  const second = 1000;
  const minute = 60000;
  const hour = 3600000;
  const day = 86400000;
  const week = 604800000;
  const month = 2592000000;
  const year = 31556952000;

  const timeBeforeNow = "moments ago";

  if (difference < minute) {
    return timeBeforeNow;
  } else if (difference < hour) {
    num = Math.floor(difference / minute);
    return num === 1 ? `${num} min ago` : `${num} mins ago`;
  } else if (difference < day) {
    num = Math.floor(difference / hour);
    return num === 1 ? `${num} hour ago` : `${num} hours ago`;
  } else if (difference < week) {
    num = Math.floor(difference / day);
    return num === 1 ? `${num} day ago` : `${num} days ago`;
  } else if (difference < month) {
    num = Math.floor(difference / week);
    return num === 1 ? `${num} week ago` : `${num} weeks ago`;
  } else if (difference < year) {
    num = Math.floor(difference / month);
    return num === 1 ? `${num} month ago` : `${num} months ago`;
  } else if (difference > year) {
    num = Math.floor(difference / year);
    return num === 1 ? `${num} year ago` : `${num} years ago`;
  }
}
