import {
  ADD_WORK_EDUCATION,
  ADD_EVENT_ACHIEVEMENTS,
  EVENT_OR_WORK_ADDED,
  SCROLL_TO_ELEMENT,
  CHANGE_SCROLL_STATUS,
  ADD_COMMENTS_SECTION,
  DELETE_COMMENT,
} from "../action-types";

const initialState = {
  scrollToElement: { state: false, section: "" },
  eventORWorkStatus: false,
  workEducationData: [
    {
      title: "HNG Internship(2020)",
      subtitle: "HNGI7 International Organization",
      content:
        "In June I joined an international organization named HNG Internship as one of the selected interns to participate in its various training activities. The internship was very informative and challenging as I had to use technologies that I had not used before e.g. bootstrap and PHP. No frameworks i.e. React/Angular, were to be used and we had to rely on good old html,css and js for the frontend team. I got to interact and work with people from the whole developer cycle i.e. Designers, Backend developers, Devops, Mobile Developers and other frontend developers. I left the internship in July as I was unable to make it to stage 7 of the internship.",
    },
    {
      title: "Intern at Softsearch(2020)",
      subtitle: "Front-End Developer",
      content:
        "As of January 23rd 2020, I started my internship at Softsearch Limited, a software development and consultancy start-up. At Softsearch I worked with another front-end developer to develop and deliver well designed and optimized websites using mainly react. We worked on a product/website to ease transportation of bulky goods to and from a place. I learnt a lot skills from this internship e.g. using git to collaborate with other developers, writing user stories, and  just to mention a few. I ended the internship in May.",
    },
    {
      title: "JKUAT(2017-2021)",
      subtitle: "Degree",
      content:
        "I'm also still studying at Jomo Kenyatta University of Agriculture and Technology, taking Bachelor of Science Innovation and Technology Management. I graduate in 2021.",
    },
    {
      title: "Upperhill Secondary School(2013-2016)",
      subtitle: "Kcse Certificate",
      content: "I did my highschool studies at Upperhill school.",
    },
  ],
  eventsAchievements: [
    {
      title: "SDG Challenge(2020)",
      subtitle: "Facebook",
      content:
        "On April 2020, I applied to a challenge by Facebook and got in.The first challenge given to us, was to make a function that receives data about the corona virus e.g. no. of people infected,hospital beds available in the region and give out an estimate how many more people will be infected given the current rate of infections and whether or not the hospital beds will be enough.",
    },
    {
      title: "Andela Learning Community",
      subtitle: "Finalists",
      content:
        "Between the months of September and December in 2019, I enrolled in another programmed called ALC. It's sponsored by google and is aimed at equiping young talented Africans with skills in Mobile-Web, Android and Cloud Technologies. I went with the Mobile-Web track and learnt how to make websites that are not only pleasing but also optimized and have high performance.Another important skill I acquired is making a website accessible and user friendly to anyone.",
    },
    {
      title: "Huawei Training at Huawei Technologies Kenya(2019)",
      subtitle: "Huawei Certificate",
      content:
        "In June 2019, I went for a two week bootcamp at Huawei's main offices, the training was about a new platform the planned to avail, namely OWS. It's a cloud platform that they hope will large and small businesses to grow with technology more, they are also using it themselves in their day to day activities. The program ended and we did our official exams in July and gor our certificates in August.",
    },
    {
      title: "Rotaract Club of JKUAT(2019-)",
      subtitle: "Clubs and Societies",
      content:
        "I was an active member of Rotaract club, our main agenda was to mostly make the society and environment around us a better place. We went for activities like taking clothes to children's home, cleaning up the environment, painting primary schools that were near us.",
    },
  ],
  commentsSection: [
    {
      title: "Footer",
      subtitle: "Good font there",
      content:
        "I like the font used in the footer, also the logo looks really good.",
    },
  ],
};

function AboutReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_WORK_EDUCATION:
      return {
        ...state,
        workEducationData: [...state.workEducationData, action.payload],
      };
    case ADD_EVENT_ACHIEVEMENTS:
      return {
        ...state,
        eventsAchievements: [...state.eventsAchievements, action.payload],
      };
    case ADD_COMMENTS_SECTION:
      return {
        ...state,
        commentsSection: [...state.commentsSection, action.payload],
      };
    case EVENT_OR_WORK_ADDED:
      return {
        ...state,
        eventORWorkStatus: !state.eventORWorkStatus,
      };
    case SCROLL_TO_ELEMENT:
      return {
        ...state,
        scrollToElement: action.payload,
      };
    case CHANGE_SCROLL_STATUS:
      return {
        ...state,
        scrollToElement: { ...state.scrollToElement, state: false },
      };
    case DELETE_COMMENT:
      return {
        ...state,
        commentsSection: [
          ...state.commentsSection.filter(
            (comment) => comment.title !== action.payload
          ),
        ],
      };
    default:
      return state;
  }
}

export default AboutReducer;
