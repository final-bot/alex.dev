import eCommercePic from "../img/projects_honey.jpg";
import faceRecPic from "../img/projects_face.png";
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
    title: "Sport Teams App",
    description:
      "A full-stack sports squad availability & match stat tracking application built with React, Next.js and Supabase.",
    pic: eCommercePic,
    githubUrl: "https://github.com/final-bot/SquadTrackr",
    technologies: ["react", "next-js", "supabase"]
  },
  {
    id: 2,
    title: "Football Match Tracking App",
    description:
      "A football match tracking application built with React and Next.js. It allows users to track matchs they've attended across the world.",
    pic: faceRecPic,
    githubUrl: "https://github.com/final-bot/AwayDays",
    technologies: ["react", "next-js"]
  },
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
