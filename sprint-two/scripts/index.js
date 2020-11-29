// Dynamic Timestamp
// To add a more realistic feel to the site, try updating the timestamp in the comments section to reflect when it was posted in a more human-readable format. Using YouTube as an example, a recently posted comment might display the time posted as "10 minutes ago" or "3 days ago". Apply this type of timestamp to your data without hardcoding the actual message.

let comments = [
  {
    fullName: "Ryan Doubinin",
    profilePictureUrl: "./assets/images/Mohan-muruge3.png",
    timeStamp: "11/28/2020",
    comment: "JS Rules!",
  },
  {
    fullName: "Michael Lyons",
    profilePictureUrl: "./assets/images/Mohan-muruge3.png",
    timeStamp: "12/18/2018",
    comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
  },
];

// create a function that clears all comments from the page
function renderComments() {
  const commentsContainer = document.querySelector(".comments");
  commentsContainer.innerHTML = "";

  // defining the html that we want to place into the comments section
  let html = "";

  // using comments array data with a template to define new html
  comments.forEach((comment) => {
    html =
      html +
      `
    <div class="comments__history">
      <div class="comments__history-profile-container">
        <img class="comments__history-profile" src="${comment.profilePictureUrl}" alt="profile picture for user" />
      </div>
      <div class="comments__history-text-container">
        <div class="comments__history-header-container">
          <div class="comments__history-name">${comment.fullName}</div>
          <div class="comments__history-date">${comment.timeStamp}</div>
        </div>
        <div class="comments__history-body">${comment.comment}</div>
      </div>
    </div>
    `;
  });

  commentsContainer.innerHTML = html;
}

renderComments();

function displayComment(comment) {
  comments.push(comment);
  renderComments();
}

const commentForm = document.querySelector(".comment__form");

commentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInputValue = event.target.name.value;
  const commentInputValue = event.target.comment.value;
  const profilePictureUrl = "./assets/images/Mohan-muruge3.png";
  const timeStamp = "11/28/2020";

  const newComment = {
    fullName: nameInputValue,
    profilePictureUrl: profilePictureUrl,
    timeStamp: timeStamp,
    comment: commentInputValue,
  };

  displayComment(newComment);
});
