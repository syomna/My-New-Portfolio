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
      <p>
I worked on a mobile app built with Flutter and Firebase that allows users to sign up as nannies to find jobs or for families to hire nannies. <br />The app makes use of several Firebase services, including authentication, Firestore, Storage, Dynamic Links and Hosting. <br />In addition, I also built a simple web version of the app using Flutter Web to increase accessibility. <br />The end product was a fully functional, easy-to-use mobile and web app that connected nannies with families providing a valuable resource for both parties.</p>
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
I worked on this mobile app built with Flutter and Firebase . <br />The app was designed to allow users to share their current location or search for a location to find the nearest services available to contact. <br />I integrated Google Maps into the app to provide accurate location data and user-friendly mapping functionality. <br />The Firebase backend was used to store and manage user data, as well as handle authentication and real-time updates. <br />The final product was a polished, user-friendly app that delivered on the client's expectations and provided a valuable service to its users.</p>`,
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
      I had the opportunity to work on this Flutter app, I was responsible for enhancing the app's UI and making it more user-friendly. <br/>Additionally, I integrated null safety into the app to make it more stable and secure.<br/> I also dealt with new endpoints API integration, which allowed for better functionality and performance.<br/>Moreover, I linked the app to Firebase, which enabled dynamic links and Google Analytics, providing valuable insights into user behavior. <br/>Overall, my contributions helped to improve the user experience and functionality of the Ghana Football App.
</p>`,
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
I developed this web app using ReactJS, Material UI and integrated the YouTube API to fetch and display videos. <br />The app provides a user-friendly interface for users to search for videos and watch them. <br />The Material UI components were used to create a modern and intuitive design, and the YouTube API integration ensured that the app is always up-to-date with the latest videos. <br />Overall, the project served as a great opportunity to practice my web development skills and enhance my knowledge of ReactJS and APIs.</p>`,
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
