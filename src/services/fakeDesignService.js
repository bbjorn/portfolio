import robopopMain from "../img/robopop/Robo-Pop-hands-on.png";
import rpQuestionaire from "../img/robopop/rp-questionaire-square.png";
import rpUniverseum from "../img/robopop/rp-universeum.png";
import rpExhibit from "../img/robopop/rp-exhibit.png";
import rpProgramming from "../img/robopop/rp-programming.png";
import rpFinished from "../img/robopop/rp-finished.png";

import tbTrainbuddy from "../img/trainbuddy/tb-trainbuddy.png";
import tbWhiteBoard from "../img/trainbuddy/tb-whiteboard.JPG";
import tbDesignProcess from "../img/trainbuddy/tb-designprocess.JPG";
import tbSurvey from "../img/trainbuddy/tb-survey.png";
import tbTrainStation from "../img/trainbuddy/tb-trainstation.png";
import tbLogo from "../img/trainbuddy/trainbuddy-logo.png";

import accessLogo from "../img/access/accessLogoTrans.png";
import accessCompAnalys from "../img/access/competitorAnalysisWithBrands.png";
import accessBrandPlatform from "../img/access/brandplatform.png";
import accessPersonas from "../img/access/ac-personas.png";
import accessCustomerJourney from "../img/access/ac-customerjourney-trans.png";
import accessApp from "../img/access/AccessApp.png";

import pcConceptArt from "../img/privacycoin/pc-conceptart.jpg";
import pcWhiteboard from "../img/privacycoin/pc-whiteboard.JPG";
import pcSketches from "../img/privacycoin/pc-sketches.png";
import pcLowFi from "../img/privacycoin/pc-lowfiprototype.jpg";
import pcHiFi from "../img/privacycoin/pc-hifiprototype.JPG";
import pcComputer from "../img/privacycoin/pc-computer.png";
import pcEvaluation from "../img/privacycoin/pc-evaluation.png";
import pcPoster from "../img/privacycoin/pc-poster.jpg";

const DesignPortfolio = [
  {
    _id: 10,
    title: "Robo Pop",
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
        layout: "double", //top, side, double
        parts: [
          {
            _id: 110,
            image: rpQuestionaire,
            imagealt: "A screenshot of a questionnaire used during the project",
            text: [
              "To get a better perspective on our main target group, teenage girls, we did go to school and did short interviews in the form of a questionnaire. It included questions about knowledge of Internet of Things, as well as habits around household items.",
            ],
          },
          {
            _id: 111,
            image: rpUniverseum,
            imagealt: "A photo of the science centre where we did the project",

            text: [
              "A secondary, but very important, user group that we had to consider were young children as our design needed to be durable enough to survive interaction with them. As such we followed a school class to the science centre and did observational studies such as the shadowing protocol.",
            ],
          },
        ],
      },
      {
        _id: 12,
        title: "Prototyping",
        layout: "double",
        parts: [
          {
            _id: 120,
            image: rpExhibit,
            imagealt: "A photo of the Robo Pop exhibition",
            text: [
              "During this project we constructed real working physical prototypes that included all the functionality that an IoT band needed. Robotic arms, sensors and the ability to send message to a server were things I worked on.",
            ],
          },
          {
            _id: 121,
            image: rpProgramming,
            imagealt: "A photo of someone programming a drum for Robo Pop",
            text: [
              "This meant that we did a lot more coding during this project than I usually do, and as it was a very machine oriented project it meant that I had to learn Arduino during this course.",
            ],
          },
        ],
      },
      {
        _id: 13,
        title: "Results",
        layout: "top",
        parts: [
          {
            _id: 130,
            image: rpFinished,
            imagealt: "A photo of the Robo Pop exhibition",
            text: [
              "The prototype we created turned out great. It got lots of attention during the exhibition and was one of the more popular installations. ",
              "However, as successful as it was with the visitors of the science centre, we did not succeed to the extent that we wanted to in attracting our main target group. There were very few preteend and teenage girls at the science center during the exhibition and we succeeded a bit too well in attracting our secondary user group in young children.",
              "All in all I am happy with the project, but it could benefit from another iteration to expand upon the ideas.",
              "More information about the project can be found at this website:",
            ],
            link: "http://idxpo.se/2018/robopop/",
          },
        ],
      },
    ],
  },
  {
    _id: 20,
    title: "Train Buddy",
    date: "September to October 2017",
    problem:
      "To come up with a design for a user group in a certain situation, in our case “immigrants” and “the train”.",
    design:
      "An app that help immigrants by introducing them to helpful natives on the train.",
    role: "Design Student",
    responsibilities: [
      "Ideation",
      "Creating a Design Process",
      "User Research",
    ],
    image: tbTrainbuddy,
    imagealt: "Two icons representing a train and a person with suitcases.",
    entires: [
      {
        _id: 21,
        title: "Ideation",
        layout: "double",
        parts: [
          {
            _id: 210,
            image: tbWhiteBoard,
            imagealt: "A picture of a whiteboard",
            text: [
              "The project started with a large brainstorming session, which was then augmented a sketch storming technique that incorporated concepts from the 635 brainwriting technique.",
            ],
          },
          {
            _id: 211,
            image: tbDesignProcess,
            imagealt:
              "A picture of a design process dawn on paper and sticky notes",
            text: [
              "An important part of this project was that we were for the first time creating our own design process",
            ],
          },
        ],
      },
      {
        _id: 22,
        title: "User Studies",
        layout: "double",
        parts: [
          {
            _id: 220,
            image: tbSurvey,
            imagealt: "A picture of a survey",
            text: [
              "I together with another student wrote a questionnaire to investigate how train habits differ between immigrants and natives.",
            ],
          },
          {
            _id: 221,
            image: tbTrainStation,
            imagealt: "A picture of a trainstation",
            text: [
              "This survey was conducted both on the internet and also done on location at a train station. This taught me how to approach people",
            ],
          },
        ],
      },
      {
        _id: 23,
        title: "Results",
        layout: "top",
        parts: [
          {
            _id: 230,
            image: tbLogo,
            imagealt: "The logo of the TrainBuddy project",
            text: [
              "The Train Buddy project was important to me as it was the first time I got to feel like I was responsible for the project. In earlier projects we had been told what methods to use and when to use them, and this time it was all up to us.",
              "There are some things that could have been improved though. We had very tight time constraints, and as such we didn’t have time to implement the findings of the user studies into the prototype properly.",
              "Overall this project taught me a lot.This was the first time I interviewed real people and tried to come up with ideas to solve real problems, rather than working with other students pretending to be users. And I learn a lot of valuable lessons regarding how to structure a design project.",
            ],
          },
        ],
      },
    ],
  },
  {
    _id: 30,
    title: "Access",
    date: "August to October 2018",
    problem:
      "A company that made paper towel and related products wanted rebrand themselves as more inclusive and have that reflected in their products",
    design:
      "An app that helped facility managers and installers with find and placing the correct products to increase inclusivity.",
    role: "Design Student",
    responsibilities: ["Brand Redesign", "User Studies", "Prototyping"],
    image: accessLogo,
    imagealt: "The logo for the redesigned version of Access",
    entires: [
      {
        _id: 31,
        title: "Brand Redesign",
        layout: "double",
        parts: [
          {
            _id: 310,
            image: accessCompAnalys,
            imagealt: "An image displaying a tool to compare brands",
            text: [
              "As this project was not just about designing a product, but to design an entire brand we were introduced to tools to help with that. For example we conducted competitor brand analysis together with moodboards to understand what was important aspect to our brands and its competitors.",
            ],
          },
          {
            _id: 311,
            image: accessBrandPlatform,
            imagealt: "An image displaying the brand platform tool",
            text: [
              "At the end of the project we had created a new Brand Platform for Access, and had written a set of guidelines for how to design for this new brand, that we then had to follow as we our primary focus shifted to create a product for the new brand.",
            ],
          },
        ],
      },
      {
        _id: 32,
        title: "User Studies",
        layout: "double",
        parts: [
          {
            _id: 320,
            image: accessPersonas,
            imagealt:
              "An image displaying pictures used for personas during the Access project",
            text: [
              "In order to understand what it was that made the current version of products appear less inclusive than desired we interviewed people who had come in contact with existing products of the brand and constructed simple personas that highlighted issues with inclusivity.",
            ],
          },
          {
            _id: 321,
            image: accessCustomerJourney,
            imagealt: "A screenshot of a customer journey.",
            text: [
              "These personas were then used to construct Customer Journeys, where we simulated a normal interaction with the existing products and tried to estimate the emotional experience at each instance of the interaction.",
            ],
          },
        ],
      },
      {
        _id: 33,
        title: "Results",
        layout: "side",
        parts: [
          {
            _id: 330,
            image: accessApp,
            imagealt:
              "A high fidelity image of the starting screen of the Access app made in illustrator",
            text: [
              "Access was one of the last projects I worked on before I started with my master’s thesis and as it was a project I did for a real company it made the project feel very real.",
              "The final product we presented was an app that had been sketched out in Illustrator. As a group we did put more of our focus into the brand redesign than the product design, and I honestly think the product suffered from that. Had I been able to redo the project I would have used Figma or XD to create a higher fidelity prototype with some actual functionality. ",
              "I am happy with the rebranding. I picked up some valuable lessons on how to work with a brand, and an understanding on how brands work.",
            ],
          },
        ],
      },
    ],
  },
  {
    _id: 40,
    title: "Privacy Coin",
    date: "January to March 2018",
    problem: "Design a tangible interface on the theme of internet safety.",
    design:
      "An installation that aims to make people think about how they are paying with their personal data by making that transaction tangible.",
    role: "Design Student",
    responsibilities: ["Ideation", "Physical Prototyping", "Evaluation"],
    image: pcConceptArt,
    imagealt: "Concept art for the finalized version of privacy coin.",
    imagecredit: "Image by Gregory Axton",
    entires: [
      {
        _id: 41,
        title: "Ideation",
        layout: "double",
        parts: [
          {
            _id: 410,
            image: pcWhiteboard,
            imagealt:
              "A photo of one of the whiteboards used during this project.",
            text: [
              "This project used different brainstorming techniques at many points of process. Not only did we use it to come up with the initial idea, but we went back kept using them to flesh out different details.",
            ],
          },
          {
            _id: 411,
            image: pcSketches,
            imagealt:
              "A photo of some of the sketches made during the project.",
            text: [
              "We also used a lot of sketches during this project. Many things were very conceptual in their natures, and sketches helped us realize them into tangible prototypes.",
            ],
          },
        ],
      },
      {
        _id: 42,
        title: "Prototyping",
        layout: "double",
        parts: [
          {
            _id: 420,
            image: pcLowFi,
            imagealt: "Three low-fi prototypes side by side.",
            text: [
              "Physical prototyping was a very important aspect of this project and we used different levels of fidelity at different points of the project. Starting really Low-fi, with paper and junk we found in the studio.",
            ],
          },
          {
            _id: 421,
            image: pcHiFi,
            imagealt: "The hi-fi prototype displayed in a classroom.",
            text: [
              "In the end we had a working Hi-fi prototype with all of the functionality we wanted, apart from perhaps needing a better paint job. This could then be used for our evaluation sessions.",
            ],
          },
        ],
      },
      {
        _id: 43,
        title: "Evaluation",
        layout: "double",
        parts: [
          {
            _id: 430,
            image: pcComputer,
            imagealt: "A computer used simulate the collections of data.",
            text: [
              "Once the prototype was complete we had an test session where the part of the experience that we couldn’t create with the prototype was simulated with the Wizard of Oz protocol.",
            ],
          },
          {
            _id: 431,
            image: pcEvaluation,
            imagealt: "The evaluation form used during this project.",
            text: [
              "We then evaluated the test session using the Semantic Differential Method, this had the benefit from say a Likert Scale by the presupposing that a higher number is better than a lower number.",
            ],
          },
        ],
      },
      {
        _id: 44,
        title: "Results",
        layout: "side",
        parts: [
          {
            _id: 440,
            image: pcPoster,
            imagealt: "A poster used for Privacy Coin",
            text: [
              "This was an interesting project as it were tasked with creating a tangible interface for something that is generally considered a digital problem. Also we have really good cohesion within the team, and I think that a lot of it stemmed from the creative environment that we had created during the project, which is something I try to bring with me into future projects.",
              "The idea we came up with was also very different from what the other groups did during the project, most of them doing authentication devices and tangible password managers. Though it may be a bit too artsy for a corporate setting.",
            ],
          },
        ],
      },
    ],
  },
];

export function getDesignPortfolio() {
  return DesignPortfolio;
}
