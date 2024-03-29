//dropdown functionality
function menuToggle() {
  const dropdown = document.querySelector(".dropdown-menu");
  dropdown.classList.toggle("open");
}

//scroll functionality
function smoothScroll(element) {
  const targetElement = document.querySelector(element);

  if (screen.width <= 480) {
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    targetElement.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  menuToggle();
}

//projects section
const projectURL = "./assets/projects/",
  projects = [
    {
      name: "My Canyon",
      type: "featured",
      image: `${projectURL}mycanyon.png`,
      description:
        "PERN based web application to allow users to rate, post and chat with other users about canyons",
      gitHub: "https://github.com/dansilvaUT/my-canyon",
      liveSite: "",
    },
    {
      name: "Message Box",
      type: "featured",
      image: `${projectURL}message-box-logo.png`,
      description:
        "Chat application that allows users to chat with other users either as a pair or in groups.",
      gitHub: "https://github.com/dansilvaUT/Message-Box",
      liveSite: "",
    },
  ];

for (let j = 0; j < projects.length; j++) {
  const featuredProjectDisplay = document.querySelector(
    ".featured-project-display"
  );
  (miniProjectDisplay = document.querySelector(".mini-project-display")),
    (projectCard = document.createElement("div")),
    (projectImage = document.createElement("img")),
    (projectTextContainer = document.createElement("div")),
    (projectText = document.createElement("p")),
    (btnContainer = document.createElement("div"));

  projectCard.classList.add("project-card");
  projectImage.classList.add("project-image");
  projectTextContainer.classList.add("project-text-container");
  projectText.classList.add("project-text");

  projectImage.src = projects[j].image;
  projectImage.alt = projects[j].name;
  projectCard.appendChild(projectImage);

  projectText.innerText = projects[j].description;
  projectTextContainer.appendChild(projectText);
  projectCard.appendChild(projectTextContainer);

  if (projects[j].gitHub) {
    const gitHubLink = document.createElement("a"),
      gitHubBtn = document.createElement("button");

    gitHubBtn.classList.add("link-button");

    gitHubBtn.innerText = "GitHub Repo";
    gitHubLink.href = projects[j].gitHub;
    gitHubLink.target = "_blank";
    gitHubLink.rel = "noreferrer";

    gitHubLink.appendChild(gitHubBtn);
    btnContainer.appendChild(gitHubLink);
  }

  if (projects[j].liveSite) {
    const liveSiteLink = document.createElement("a"),
      liveLinkBtn = document.createElement("button");

    liveLinkBtn.classList.add("link-button");

    liveLinkBtn.innerText = "View Live";

    liveSiteLink.href = projects[j].liveSite;
    liveSiteLink.target = "_blank";
    liveSiteLink.rel = "noreferrer";

    liveSiteLink.appendChild(liveLinkBtn);
    btnContainer.appendChild(liveSiteLink);
  }

  projectTextContainer.appendChild(btnContainer);
  if (projects[j].type === "featured") {
    featuredProjectDisplay.appendChild(projectCard);
  } else {
    miniProjectDisplay.appendChild(projectCard);
  }
}
