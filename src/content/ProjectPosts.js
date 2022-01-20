import img1 from "../images/osu_clone.gif";
import img2 from "../images/personal_pi.png";
import img3 from "../images/watch_codeo.png"
import img4 from "../images/bridges_app.gif"

export const ProjectPosts = [
  {
    title: "Ambient Mouse Trainer",
    date: "2021-10-14",
    img: img1,
    gh_url: "",
    deploy_url: "",
    stack: "Vanilla JS, Canvas",
    tags: "#JS, #Animation",
    description:
      "<strong> Description: </strong> Ambient Mouse Trainer was written with Vanilla JS and Canvas during the second week of bootcamp. The targets are expanding and contracting circles whose hitboxes are the circumference of the circle at any given time. You have to click these circles before they dissapear! <br/><br/><strong>Challenges:</strong> The draw/animation logic was initially a big obstacle. Initially, we were instructed to use setInterval for the game loop, but I used Canvas' built-in method, <code>requestAnimationFrame()</code>, in order to get steadier animation updates.",
  },
  {
    title: "Personal.pi",
    date: "2021-10-14",
    img: img2,
    gh_url: "https://github.com/dryutsun/timemapclone",
    deploy_url: "https://timemapclone.herokuapp.com/",
    stack: "Postgres, Express, Node.js, MapBox API",
    tags: "#JS, #PEN, #OSINT",
    description:
      "An implementation of the the <code>timemap</code> software developed by Forensic Architecture but in the PEN stack. Personal.pi allows you to keep track of the location and places of events and the 'entities'. This sort of dashboarding is common in Open Source Intelligence software. I developed Personal.pi to be as flexible and open to the user as possible, i.e. it could be used to track a missing cat or alternatively, a 'place' journal to track the location where the user had certain thoughts.",
  },
  {
    title: "Watch Codeo",
    date: "2021-10-14",
    img: img3,
    gh_url: "https://github.com/dryutsun/timemapclone",
    deploy_url: "https://timemapclone.herokuapp.com/",
    stack: "Postgres, Express, Node.js, MapBox API",
    tags: "#JS, #PEN, #OSINT",
    description:
      "An implementation of the the <code>timemap</code> software developed by Forensic Architecture but in the PEN stack. Personal.pi allows you to keep track of the location and places of events and the 'entities'. This sort of dashboarding is common in Open Source Intelligence software. I developed Personal.pi to be as flexible and open to the user as possible, i.e. it could be used to track a missing cat or alternatively, a 'place' journal to track the location where the user had certain thoughts.",
  },
  {
    title: "B.R.I.D.G.E.S App",
    date: "2021-10-14",
    img: img4,
    gh_url: "https://github.com/dryutsun/timemapclone",
    deploy_url: "https://timemapclone.herokuapp.com/",
    stack: "Postgres, Express, Node.js, MapBox API",
    tags: "#JS, #PEN, #OSINT",
    description:
      "An implementation of the the <code>timemap</code> software developed by Forensic Architecture but in the PEN stack. Personal.pi allows you to keep track of the location and places of events and the 'entities'. This sort of dashboarding is common in Open Source Intelligence software. I developed Personal.pi to be as flexible and open to the user as possible, i.e. it could be used to track a missing cat or alternatively, a 'place' journal to track the location where the user had certain thoughts.",
  },
];
