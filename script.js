var navMobile = document.getElementById("nav-mobile");
var mobileMenu = document.getElementById("mobile-menu");

navMobile.addEventListener("click", function () {
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
});

const skills = [
  { image: "flutter", title: "Flutter" },
  { image: "firebase", title: "Firebase" },
  { image: "html", title: "HTML5" },
  { image: "css", title: "CSS3" },
  { image: "javascript", title: "JavaScript" },
  { image: "typescript", title: "TypeScript" },
  { image: "reactjs", title: "ReactJs" },
  { image: "redux", title: "Redux" },
  { image: "nextjs", title: "NextJs" },
  { image: "bootstrap", title: "Bootstrap" },
  { image: "tailwind", title: "Tailwind" },
  { image: "materialui", title: "Material UI" },
];
let skillsHTML = "";
skills.forEach((e) => {
  skillsHTML += `<div class="skill"">
            <img src="./assets/icons/${e.image}.svg" alt=${e.image} />
            <p>${e.title}</p>
          </div>`;
});
document.getElementById("skills").innerHTML = skillsHTML;

const projects = [
  {
    image: "./assets/images/nanny-finder.png",
    title: "Nanny Finder App",
    description: `
      <p> This app connects nannies with families, simplifying childcare hiring. It fosters valuable connections, while the web version expands accessibility.</p>
    <p><strong>Technologies:</strong> Flutter - Flutter Web - Firebase (Authentication, Firestore, Storage, Dynamic Links, Hosting) </p>
    `,
    hasStoresLinks: true,
    appStore: "https://apps.apple.com/app/id6443669769",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.mickaelrobin.nannyfinderuae",
  },
  {
    image: "./assets/images/whosapp.png",
    title: "Whos App",
    description: `
      <p>
This app enables effortless location sharing and service discovery. With a user-friendly interface and powerful features, it connects users to nearby services seamlessly.<p><strong>Technologies:</strong> Flutter - Google Cloud (Maps, Places) - Firebase (Authentication, Firestore, Storage, FCM) </p>`,
    hasStoresLinks: true,
    appStore: "https://apps.apple.com/eg/app/whosapp-app/id1642543173",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.whos.whosapp",
  },
  {
    image: "./assets/images/ghana-football.png",
    title: "Ghana Football App",
    description: `
      <p>
      In this app, I enhanced the UI for a more user-friendly experience. Implementing null safety improved stability and security. Integration of new API endpoints enhanced functionality and performance, while Firebase integration provided valuable insights into user behavior.</p>
          <p><strong>Technologies:</strong> Flutter - API Integeration - Firebase (Google Analytics) </p>
`,
    hasStoresLinks: true,
    appStore: "https://apps.apple.com/eg/app/ghana-football-app/id1586234457",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.ghfootballapp.app&hl=en&gl=US",
  },
  {
    image: "./assets/images/youtube-clone.png",
    title: "Youtube Clone App",
    description: `
      <p>
This app is a user-friendly web application for seamless video searching and watching. With ReactJS and Material UI, it provides an intuitive interface and modern design. Integration of the YouTube API ensures up-to-date video content for an engaging experience.</p>
          <p><strong>Technologies:</strong> React JS - Material UI - API Integeration </p>
`,
    hasStoresLinks: false,
    websiteLink: "https://syomna.github.io/Youtube-Clone-ReactJS/",
  },
];
let list = "";
projects.forEach((e) => (list += displayProject(e)));
document.getElementById("projects").innerHTML = list;
function displayProject(project) {
  var html = `
    <div class="project">
      <img src=${project.image} alt="nanny-finder" />
      <div class="description">
        <h3>${project.title}</h3>
        <hr />
        ${project.description}
        <br />
        ${
          project.hasStoresLinks
            ? `
            <i class="fa fa-link"></i>
           <a href=${project.appStore} target="_blank">App Store</a>
           <i class="fa fa-link"></i>
           <a href=${project.googlePlay} target="_blank">Google Play</a>
        `
            : `
            <i class="fa fa-link"></i>
           <a href=${project.websiteLink} target="_blank">Website Link</a>
        
        `
        }
      </div>
    </div>
  `;
  return html;
}

const downloadButton = document.querySelector('.resume');
downloadButton.addEventListener('click', () => {
  const fileName = "Yomna_Salah_Attallah_Front-end_Developer.pdf";
  const filePath = "assets/cv/Yomna_Salah_Attallah_Front-end_Developer.pdf";
  const link = document.createElement('a');
  link.setAttribute('download', fileName);
  link.setAttribute('href', filePath);
  link.click();
});

