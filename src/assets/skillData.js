import { faDatabase, faServer, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

export const skills = [
  {
    icon: faLaptopCode,
    title: "Front-end",
    description: "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
    languages: "HTML, CSS, JavaScript",
    software: {
      name: "Frameworks & Libraries",
      items: "React, Redux, Bootstrap, Tachyons",
    },
    tools: "VSCode, Atom"
  },
  {
    icon: faServer,
    title: "Back-end",
    description: "When someone requests me someting I couldn't wait to response. ",
    languages: "Python, JavaScript(NodeJs)",
    software: {
      name: "Frameworks & Libraries",
      items: "Django, Node, Express, KnexJs",
    },
    tools: "Pycharm, Postman, Sublime"
  },
  {
    icon: faDatabase,
    title: "DBMS",
    description: "Data is everything. Keeping it safe, secure and organized is my priority I reckon.",
    languages: "SQL",
    software: {
      name: "Databases",
      items: "Postgres, MySQL, SQLite"
    },
    tools: "Valentina Studio, CLI"
  }
]
