import {
  ADD_WORK_EDUCATION,
  ADD_EVENT_ACHIEVEMENTS,
  EVENT_OR_WORK_ADDED,
  SCROLL_TO_ELEMENT,
  CHANGE_SCROLL_STATUS,
} from "../action-types";

const initialState = {
  scrollToElement: { state: false, section: "" },
  eventORWorkStatus: false,
  workEducationData: [
    {
      title: "Intern at Softsearch(2020-)",
      subtitle: "Front-End Developer",
      content:
        "As of January 23rd 2020, I started my internship at Softsearch Limited, a software development and consultancy start-up. At Softsearch I work with another front-end developer to develop and deliver well designed and optimized websites. We are currently working on product to ease transportation of bulky goods to and fro a place.",
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
        "I'm also an active member of Rotaract club, our main agenda is to mostly make the society and environment around us a better place. We go for activities like taking clothes to children's home, cleaning up the environment, painting primary schools that are near us.",
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
    default:
      return state;
  }
}

export default AboutReducer;
