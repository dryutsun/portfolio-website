import img1 from "../images/osu_clone.gif";
import img2 from "../images/personal_pi.png";
import img3 from "../images/watch_codeo.png"
import img4 from "../images/bridges_app.gif"

export const ProjectPosts = [
  {
    title: "Ambient Mouse Trainer",
    date: "Fall 2021",
    img: img1,
    gh_url: "https://github.com/dryutsun/SEI-Project-OSU-Clone",
    deploy_url: "https://dryutsun.github.io/SEI-Project-OSU-Clone/",
    stack: "Vanilla JS, Canvas",
    tags: "#JS, #Animation",
    description:
      "<strong> Description: </strong> Ambient Mouse Trainer was written with Vanilla JS and Canvas during the second week of bootcamp. The targets are expanding and contracting circles whose hitboxes are the circumference of the circle at any given time. You have to click these circles before they dissapear! <br/><br/><strong>Challenges:</strong> The draw/animation logic was initially a big obstacle. Initially, we were instructed to use setInterval for the game loop, but I used Canvas' built-in method, <code>requestAnimationFrame()</code>, in order to get steadier animation updates.",
  },
  {
    title: "Personal.pi",
    date: "Fall 2021",
    img: img2,
    gh_url: "https://github.com/dryutsun/timemapclone",
    deploy_url: "https://timemapclone.herokuapp.com/",
    stack: "Postgres, Express, Node.js, MapBox API",
    tags: "#JS, #PEN, #OSINT",
    description:
      "<strong> Description: </strong> An implementation of the the <code>timemap</code> software developed by Forensic Architecture but in the PEN stack. Personal.pi allows you to keep track of the location and places of events and the 'entities'. I developed Personal.pi to be as flexible and open to the user as possible, i.e. it could be used to track a missing cat or alternatively, a 'place' journal to track the location where the user had certain thoughts. <br><br><strong>Challenges:</strong> There were some bumps in integrating the MapBox API into my application because of the express view/rendering layer. After some research, I decided that I would integrate it via their CDN as a proof-of-concept.",
  },
  {
    title: "Watch Codeo",
    date: "Winter 2021",
    img: img3,
    gh_url: "https://github.com/dryutsun/timemapclone",
    deploy_url: "https://watchcodeo.herokuapp.com/",
    stack: "MongoDb, Express, React, Node.js",
    tags: "#JS, #PEN, #OSINT",
    description:
      "<strong>Description: </strong>Watch Codeo is a social video sharing platform for coders to share videos they found the most useful. This was the first team project built over a week. <br> <br> <strong>Challenges: </strong> We were trying to coerce a NOSQL database to act like a relational database. Our team was new to React so there were also many obstacles in handling state and prop passing but these pain-points were resolved as this allowed us to better understand best practices.",
  },
  {
    title: "B.R.I.D.G.E.S App",
    date: "Winter 2022",
    img: img4,
    gh_url: "https://github.com/dryutsun/bokka-frontend",
    deploy_url: "https://bokka-bridges-client.herokuapp.com/",
    stack: "MongoDb, Express, React, Node.js",
    tags: "#JS, #PEN, #OSINT",
    description:
      "<strong>Description: </strong> B.R.I.D.G.E.S. App was a tribute to the game Death Stranding and all the delivery workers who made the last few years less painful. I wanted to challenge myself in this one and build an app with multiple user flows: One for the person requesting a delivery and another flow for the delivery person. This allowed me to study the uses of data from multiple user perspectives and experiences.<br><br><strong>Challenges:</strong> The library I wanted to use was not being maintained and fell out of compatability for my version of npm and react. As a result, I will have to build this integration myself.",
  },
];
