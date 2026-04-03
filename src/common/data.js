import healthClinicPic from "../img/project_healthClinicSystem.png";
import squadTrackrApp from "../img/squadTrackrApp.png";
import java from '../img/java.png';
import css from '../img/css.png';
import js from '../img/js.png';
import react from '../img/react.png';
import redux from '../img/redux.png';
import typescript from '../img/typescript.png';
import node from '../img/node.png';
import nextjs from '../img/next-js.png';
import responsive from '../img/responsive.png';
import github from '../img/github.png';
import agile from '../img/agile.png';

const projects = [
  {
    id: 1,
    title: "Health Clinic App",
    description:
      "A full-stack health clinic management application built with React, Next.js and SQLite via Prisma allowing the viewing, creating and deleting of appointments.",
    pic: healthClinicPic,
    githubUrl: "https://github.com/final-bot/HealthClinicApi",
    technologies: ["react", "next-js", "sqlite", "prisma"]
  },
  {
    id: 2,
    title: "Sports Team App",
    description:
      "An sports team application built with React and Next.js. It allows captains, users, players etc to track matchs they're attending or played in. Tracks availability for upcoming matches and stats for previous matches.",
    pic: squadTrackrApp,
    githubUrl: "https://github.com/final-bot/SquadTrackr",
    technologies: ["react", "next-js", "supabase"]
  },
];

const skills = [
  {
    name: 'Java',
    pic: java,
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
    name: 'Next.js',
    pic: nextjs,
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
  },
  {
    name: 'Agile',
    pic: agile,
    animation: 'jello'
  }
]

export { projects, skills };
