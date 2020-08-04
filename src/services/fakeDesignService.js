import robopopMain from "../img/robopop/Robo-Pop-hands-on.png";
import rpQuestionaire from "../img/robopop/rp-questionaire-square-png";
import rpUniverseum from "../img/robopop/rp-universeum.png";
import rpExhibit from "../img/robopop/rp-exhibit.png";
import rpProgramming from "../img/robopop/rp-programming.png";
import rpFinished from "../img/robopop/rp-finished.png";

const DesignPortfolio = [
  {
    _id: 10,
    title: "Robo Pop",
    layout: "side", //top, side, double
    date: "August to September 2018",
    problem:
      "Design installation aimed at making girls (age 12-16) interested in sensory technology and Internet of things.",
    design:
      "A robotic band controlled either a website or smart household items.",
    role: "Design Student",
    responsibilities: [
      "Ideation and User research",
      "Physical Prototyping and Programming",
    ],
    image: robopopMain,
    imagealt: "Girls playing music with a pillow and hairbrushes. Illustration",
    imagecredit: "Illustration by Connie Khan",
    entires: [
      {
        _id: 11,
        title: "User Research",
        layout: "double",
        image1: rpQuestionaire,
        image1alt: "A screenshot of a questionnaire used during the project",
        image2: rpUniverseum,
        image2alt: "A photo of the science centre where we did the project",
        text: [
          "To get a better perspective on our main target group, teenage girls, we did go to school and did short interviews in the form of a questionnaire. It included questions about knowledge of Internet of Things, as well as habits around household items.",
          "A secondary, but very important, user group that we had to consider were young children as our design needed to be durable enough to survive interaction with them. As such we followed a school class to the science centre and did observational studies such as the shadowing protocol.",
        ],
      },
      {
        _id: 12,
        title: "Prototyping",
        layout: "double",
        image1: rpExhibit,
        image1alt: "A photo of the Robo Pop exhibition",
        image2: rpProgramming,
        image2alt: "A photo of someone programming a drum for Robo Pop",
        text: [
          "During this project we constructed real working physical prototypes that included all the functionality that an IoT band needed. Robotic arms, sensors and the ability to send message to a server were things I worked on.",
          "This meant that we did a lot more coding during this project than I usually do, and as it was a very machine oriented project it meant that I had to learn Arduino during this course.",
        ],
      },
      {
        _id: 13,
        title: "Results",
        layout: "top",
        image1: rpFinished,
        image1alt: "A photo of the Robo Pop exhibition",
        text: [
          "The prototype we created turned out great. It got lots of attention during the exhibition and was one of the more popular installations. And more information about it can be found at this website:",
          <a href="http://idxpo.se/2018/robopop/">
            http://idxpo.se/2018/robopop/
          </a>,
          "However, as successful as it was with the visitors of the science centre, we did not succeed to the extent that we wanted to in attracting our main target group. There were very few preteend and teenage girls at the science center during the exhibition and we succeeded a bit too well in attracting our secondary user group in young children.",
          "All in all I am happy with the project, but it could benefit from another iteration to expand upon the ideas.",
        ],
      },
    ],
  },
]; /*
  {
    _id: 20,
    title: "",
    layout: "", //top, side, double
    date: "",
    problem: "",
    design: "",
    role: "",
    responsibilities: ["", "", ""],
    image: "",
    imagealt: "",
    imagecredit: "",
    entires: [
      {
        _id: 21,
        title: "",
        layout: "",
        image1: "",
        image1alt: "",
        text: [""],
      },
    ],
  },
  {
    _id: 30,
    title: "",
    layout: "", //top, side, double
    date: "",
    problem: "",
    design: "",
    role: "",
    responsibilities: ["", "", ""],
    image: "",
    imagealt: "",
    imagecredit: "",
    entires: [
      {
        _id: 31,
        title: "",
        layout: "",
        image1: "",
        image1alt: "",
        text: [""],
      },
    ],
  },
  {
    _id: 40,
    title: "",
    layout: "", //top, side, double
    date: "",
    problem: "",
    design: "",
    role: "",
    responsibilities: ["", "", ""],
    image: "",
    imagealt: "",
    imagecredit: "",
    entires: [
      {
        _id: 41,
        title: "",
        layout: "",
        image1: "",
        image1alt: "",
        text: [""],
      },
    ],
  },
];
*/

export function getDesignPortfolio() {
  return DesignPortfolio;
}
