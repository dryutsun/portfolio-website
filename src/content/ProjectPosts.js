import img1 from "../images/osu_clone.gif";
import img2 from "../images/personal_pi.png";
import img3 from "../images/watch_codeo.png"
import img4 from "../images/bridges_app.gif"

export const ProjectPosts = [
  {
    title: "Ambient Mouse Trainer",
    date: "Fall 2021",
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
    date: "Fall 2021",
    img: img2,
    gh_url: "https://github.com/dryutsun/timemapclone",
    deploy_url: "https://timemapclone.herokuapp.com/",
    stack: "Postgres, Express, Node.js, MapBox API",
    tags: "#JS, #PEN, #OSINT",
    description:
      "An implementation of the the <code>timemap</code> software developed by Forensic Architecture but in the PEN stack. Personal.pi allows you to keep track of the location and places of events and the 'entities'. I developed Personal.pi to be as flexible and open to the user as possible, i.e. it could be used to track a missing cat or alternatively, a 'place' journal to track the location where the user had certain thoughts. <strong>Challenges:</strong>",
  },
  {
    title: "Watch Codeo",
    date: "Winter 2021",
    img: img3,
    gh_url: "https://github.com/dryutsun/timemapclone",
    deploy_url: "https://timemapclone.herokuapp.com/",
    stack: "Postgres, Express, Node.js, MapBox API",
    tags: "#JS, #PEN, #OSINT",
    description:
      "Watch Codeo is a social video sharing platform for coders to share videos they found the most useful. ",
  },
  {
    title: "B.R.I.D.G.E.S App",
    date: "Winter 2022",
    img: img4,
    gh_url: "https://github.com/dryutsun/timemapclone",
    deploy_url: "https://timemapclone.herokuapp.com/",
    stack: "Postgres, Express, Node.js, MapBox API",
    tags: "#JS, #PEN, #OSINT",
    description:
      "During the pandemic, I played a game called 'Death Stranding' which had a profound effect on my ability to deal with our bleak circumstance. I did not have to imagine that we were living in the world that Death Stranding presented because in a sense, we were already living that reality. I decided that the best tribute to this painful experience would be to build a 'two-layered' courier application. With some applications like doordash, the user and the 'deliverer' have completely different experiences and I wanted to reflect that in the application that I wrote.",
  },
];
