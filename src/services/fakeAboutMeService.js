import me from "../img/me.jpg";

const aboutMe = [
  {
    _id: 1,
    title: "About Me",
    text: [
      "I have just finished writing my master's thesis regarding trust in robotic vacuum cleaners at the department of Design and Human Factors at Chalmers University of Technology. I have a bachelor's degree in Software Engineering and a master's degree in Interaction Design. I enjoy creating things, both digital och physical.",
      "I am a social and creative person who likes to get things done, and my friends have often described me as a ”doer”. I also have leadership experience from my time of being chairman in the Student Educational Committee and as a member of the Student Division Board, and I enjoy working with other people a lot. I have done some design work for companies twice through different courses at Chalmers and once as a part time job where I was coaching a fifth grade class during a design competition.",
    ],
    image: me,
    imageAlt: "A picture of me",
  },
  {
    _id: 2,
    title: "Background",
    text: [
      "I was born in Gothenburg and have lived all my life in or around the city. From a young age I was interested in science and technology. During high school I specialized in technology and mathematics, with the goal of studying at Chalmers University of Technology. I started out studying Chemistry with Physics, but after a while I realized that that wasn’t really my thing and switched programme to a bachelor in Software Engineering.",
      "During my bachelor I was very active in the student union. Doing everything from organizing parties, maintaining student premises, and writing two plays, as well as taking on leadership positions within the Student Educational Committee and Student Division Board. As well as organizing monthly LARP events for kids ages 12-15.",
      "After a close relative to me went through a severe stroke and had to spend a lot of time in hospitals, I re-evaluated my life. I think I became a more empathic person and people became more important to me. As such I started to take my studies more seriously and started taking more human centric courses. When it became time to select master programme I decided to study Interaction Design and had a blast studying those courses. During my masters I joined a mentorship programme and got to see experience how a real designer worked, and I also was member of the programme's reception committee.",
      "Now I have handed in my master thesis and I am looking forward to starting working.",
    ],
  },
  {
    _id: 3,
    title: "Motivation",
    text: [
      "I became interested in UX design when a close relative of mine was going through rehabilitation after a stroke. During this period she was using a lot of digital tools to retrain her brain with things like reading, memory and speaking. These programs generally had solid back-end functionality, but lacked in several UI aspects. For example they often hadn’t adapted the size of the interface in order to make sure that someone with restricted finger movement could use them. Another common problem was that they often overwhelmed the user with information that was not relevant to the task at hand. Lots of menus and options were visible while therapy part of the program, which would distract the user. Not a big problem for a neurotypical user, but it would make the task significantly harder for a stroke patient.",
      "All in all this experience had shown me the importance of good design. Before this period I was more interested in algorithms and back-end programming, and had at that time thought that design was something that only hipsters cared about. But I now seen first hand how bad design could really lower the overall impact of an otherwise good program. During this time I also rediscovered myself and I realized that I wanted to work more closely with people and as such I decided to study to become an interaction designer.",
      "During my studies and through being part of a mentorship programme I learned that the end-user is not the only person you are designing for. Take the customer as an example, it may or may not be the same person as the end user, and the customer of the product may not be the same as the customer for the design. As a designer you need to know who you are designing for and when I say that my motivation as a designer is that I want to help people, I don’t mean just the end-user, but everyone who is affected by my design.",
    ],
  },
];

export function getAboutMe() {
  return aboutMe;
}
