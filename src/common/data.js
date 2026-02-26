import eCommercePic from "../img/projects_honey.jpg";
import faceRecPic from "../img/projects_face.png";
import catsPic from "../img/projects_cats.png";
import backgroundGenPic from "../img/projects_bggen.png";
import html from '../img/html.png';
import css from '../img/css.png';
import js from '../img/js.png';
import react from '../img/react.png';
import redux from '../img/redux.png';
import typescript from '../img/typescript.png';
import node from '../img/node.png';
import firebase from '../img/firebase.png';
import responsive from '../img/responsive.png';
import github from '../img/github.png';

const projects = [
  {
    id: 1,
    title: "e-Commerce App",
    description:
      "A small webshop I made for a friend, to help him selling his honey products online. Front-end is created with React, used Redux-Sagas for state management. Backend is provided by FireBase, online payments by Stripe.",
    url: "https://github.com/borosati85/project-honey",
    pic: eCommercePic,
    githubUrl: "https://github.com/borosati85/project-honey",
    technologies: ["react", "redux", "firebase", "stripe"]
  },
  {
    id: 2,
    title: "Face Recognition App",
    description:
      "A face recognition app, using the power of face-api-js, and React.",
    url: "https://borosati85.github.io/face-app/",
    pic: faceRecPic,
    githubUrl: "https://github.com/borosati85/face-app",
    technologies: ["react", "face-api-js"]
  },
  {
    id: 3,
    title: "Contacts App",
    description:
      "A fun little app, with endless random users generated with random-data-api.com and robohash.com. Created with React and used Redux-Sagas for state management.",
    url: "https://borosati85.github.io/cat-contacts/",
    pic: catsPic,
    githubUrl: "https://github.com/borosati85/cat-contacts",
    technologies: ["react", "redux", "random-data-api.com", "robohash.com"]
  },
  {
    id: 4,
    title: "Gradient Background Generator",
    description:
      "A simple application that helps select the right gradient background combination. Created with HTML, CSS, and Javascript.",
    url: "https://borosati85.github.io/background-generator/",
    pic: backgroundGenPic,
    githubUrl: "https://github.com/borosati85/background-generator",
    technologies: ["HTML", "CSS", "JavaScript"]
  }
];

const skills = [
  {
    name: 'HTML5',
    pic: html,
    animation: 'jello'
  },
  {
    name: 'CSS3',
    pic: css,
    animation: 'jello'
  },
  {
    name: 'JavaScript',
    pic: js,
    animation: 'jello'
  },
  {
    name: 'React',
    pic: react,
    animation: 'jello'
  },
  {
    name: 'Redux',
    pic: redux,
    animation: 'jello'
  },
/*  
  {
    name: 'TypeScript',
    pic: typescript,
    animation: 'jello'
  },
  {
    name: 'Node.js',
    pic: node,
    animation: 'jello'
  },
*/
  {
    name: 'Firebase',
    pic: firebase,
    animation: 'jello'
  },
  {
    name: 'Responsive Design',
    pic: responsive,
    animation: 'jello'
  },
  {
    name: 'Github',
    pic: github,
    animation: 'jello'
  }
]

export { projects, skills };
