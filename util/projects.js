import IRD from "@images/projects/ird.png";
import Flociti from "@images/projects/flociti.png";
import BDC from "@images/projects/bdc.png";
import Alana from "@images/projects/alana.png";
import Indomaret from "@images/projects/indomaret.png";
import Bootstrap from "@images/logo/bootstrap.png";
import Reactjs from "@images/logo/logo192.png";
import Firebase from "@images/logo/firebase.svg";
import Express from "@images/logo/express.svg";
import MUI from "@images/logo/mui.png";
import HTML5 from "@images/logo/html5.svg";
import CSS3 from "@images/logo/css-3.svg";
import Codeigniter from "@images/logo/codeigniter.png";
import Javascript from "@images/logo/javascript.svg";
import PHP from "@images/logo/php.svg";

const projects = [
  {
    key: 1,
    image: Alana,
    name: "Facial Clinic Website",
    subname: "Company Profile / Online Shop",
    link: "https://alana-clinic.web.app",
    provider: "Website",
    description:
      "My responsibilities in this project are to create a fully functionally online shop website including company profile and dashboard.",
    tools: [
      {
        key: 1,
        image: Firebase,
        text: "Firebase",
      },
      {
        key: 2,
        image: Express,
        text: "Express",
      },
      {
        key: 3,
        image: Reactjs,
        text: "React.js",
      },
      {
        key: 4,
        image: Bootstrap,
        text: "Bootstrap",
      },
    ],
  },
  {
    key: 2,
    image: Indomaret,
    name: "Grocery Store Dashboard",
    subname: "Dashboard",
    link: "https://indomaret-dashboard.web.app",
    provider: "Website",
    description:
      "In this project, my job is to create a dashboard with a feature to change a product price and send a notification to the user of what product that has been changed.",
    tools: [
      {
        key: 1,
        image: Firebase,
        text: "Firebase",
      },
      {
        key: 2,
        image: Express,
        text: "Express",
      },
      {
        key: 3,
        image: Reactjs,
        text: "React.js",
      },
      {
        key: 4,
        image: MUI,
        text: "Material UI",
      },
    ],
  },
  {
    key: 3,
    image: IRD,
    name: "Informatics Research Development Website",
    subname: "Company Profile / Content Management System",
    link: "http://ird.widyatama.ac.id",
    provider: "Website",
    description:
      "I worked with Informatics Research and Development Widyatama to create their company profile website with Content System Management feature.",
    tools: [
      {
        key: 1,
        image: HTML5,
        text: "HTML5",
      },
      {
        key: 2,
        image: CSS3,
        text: "CSS3",
      },
      {
        key: 3,
        image: Javascript,
        text: "Javascript",
      },
      {
        key: 4,
        image: Codeigniter,
        text: "Codeigniter",
      },
    ],
  },
  {
    key: 4,
    image: Flociti,
    name: "Shuttle Website",
    subname: "Reservation System / Prototype",
    link: "https://github.com/muhammadkevinpf/website-flociti",
    provider: "on Github",
    description:
      "In this project, my job is to create a functionally prototype website that will be used for shuttle reservation system.",
    tools: [
      {
        key: 1,
        image: HTML5,
        text: "HTML5",
      },
      {
        key: 2,
        image: CSS3,
        text: "CSS3",
      },
      {
        key: 3,
        image: Javascript,
        text: "Javascript",
      },
      {
        key: 4,
        image: PHP,
        text: "PHP",
      },
    ],
  },
  {
    key: 5,
    image: BDC,
    name: "Dental Clinic Website",
    subname: "Reservation System / Prototype",
    link: "https://github.com/muhammadkevinpf/Website-Klinik",
    provider: "on Github",
    description:
      "In this project my job is pretty similar to shuttle reservation website, my job is to create reservation system to book an appointment with doctor.",
    tools: [
      {
        key: 1,
        image: HTML5,
        text: "HTML5",
      },
      {
        key: 2,
        image: CSS3,
        text: "CSS3",
      },
      {
        key: 3,
        image: Javascript,
        text: "Javascript",
      },
      {
        key: 4,
        image: PHP,
        text: "PHP",
      },
    ],
  },
];

export { projects };
