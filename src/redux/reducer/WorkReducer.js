const initialState = {
    myWork: [
        {
            netlifyLink: "https://adjustable-threejs-keyboard.netlify.app/",
            githubLink: "https://github.com/ryann254/Threejs-Keyboard",
            title: "Adjustable Threejs Keyboard",
            description: "The client’s request was to fork a keyboard repository originally made to help users improve on their typing accuracy and speed and turn into an extension of his website that allowed users to see the keyboard they’re buying then purchase it on his site.",
            solution: "I forked the repository, worked on updating the translations(allowing different languages on the keyboard) and colour scheme to allow only a select blend of colours. I also launched the site on vercel and on boarded the client on how to make future changes.",
            languages: "The project consisted of the following programming languages: Three.js, typescript, reactjs, python and electronjs.",
        },
        {
            netlifyLink: "https://ntf-market-place.netlify.app/",
            githubLink: "https://github.com/ryann254/flask-app-frontend-pancake",
            title: "Crypto marketplace",
            description: "The client’s plan was to create a cryptocurrency platform that allowed people to come and trade tokens.",
            solution: "I forked the Pancake Swap repository as a starting point, added the tokens that the client wanted, updated the translations(allowing users to switch between different languages) and connected the site to the backend apis.",
            languages: "The project was made up of the following languages: Reactjs, typescript, flask and protocol buffers were used instead of json.",
        },
        {
            netlifyLink: "https://techive.co.ke",
            githubLink: "https://github.com/Developer-Square/Dev_square_Frontend",
            title: "Startup Website",
            description: "A startup CEO wanted a stunning site to showcase her designs and services offered by her company. She also wanted the site to have a dashboard where she could track tasks, users and the company's projects.",
            solution: "I converted her website design to code, built out the backend apis in Nodejs and connected the apis to the frontend to allow selected users to register, login, create and tasks and projects.",
            languages: "The project was made of the following languages: Reactjs, Nodejs, Express and jest for testing.",
        },
        {
            netlifyLink: "https://vimeo.com/538273834",
            githubLink: "https://github.com/Developer-Square/Park254-s-Parking-App-Frontend",
            title: "Park254 Parking App",
            description: "The client wanted to expand his business and help ease the parking issue in Nairobi, Kenya's capital city.",
            solution: "I built a parking app(both android and iOS) that allowed drivers to register, login and book parking slots in Nairobi ahead of schedule. I have attached a video of how the app is working as of the day of writing.",
            languages:"The project was made of the following languages: Flutter, Nodejs and jest for testing.",
        },
        {
            netlifyLink: "https://vimeo.com/620492772",
            githubLink: "https://github.com/Developer-Square/Salon_App_Frontend",
            title: "Salon App",
            description: "The client’s wanted to expand his salon business and create a sense of order as his business was going very fast.",
            solution: "I built a salon app to allow users to book services ahead of schedule, the salon app also had a social media like feature that allowed the owner to post different hairstyles and others could like and comment on them.",
            languages: "The project was built using the following: Flutter, Django Rest, jest for testing."
        },
        {
            netlifyLink: "https://portfolio-donation.netlify.app/",
            githubLink: "https://github.com/ryann254/Portfolio-website-Client",
            title: "Portfolio donation website",
            description: "The client wanted a basic site to post news articles and events for his Non-profit organisation with a section where people could donate.",
            solution: "I built him a site from his design, added authentication and backend logic to allow him to add events and news articles and integrated stripe payments to allow for donations.",
            languages:"The project consisted of: Reactjs, Nodejs and jest for testing",
        },
        {
            netlifyLink: "https://edmund-eastfield.netlify.app/",
            githubLink: "https://github.com/ryann254/Client-Edumund-EastField",
            title: "Edmund Document Manager",
            description: "The client wanted a way for her customers to contact her directly through her Whatsapp and sliding effects on her contact form.",
            solution: "I integrated a whatsapp plugin to allow website visitors to contact the site owner. I connected the contact page so that the client would get an email every time a user left a message on the contact form. I also integrated react-animated-slider to add the sliding effect for the contact page.",
            languages:"Languages used were: Gatsby, Scss",
        },
        // Older Projects
        {
            netlifyLink: "https://ryann254.github.io/Ryan-Covid19-Deploy/",
            githubLink: "https://github.com/ryann254/Ryan-Covid19-Challenge",
            languages: "Languages used were: Html, Css and Js",
            title: "Covid-19 Estimator App",
            description: "In recent times we've been hit by a pandemic, corona virus, and the main issues have been stopping the spread of the virus and estimating how hard each country will be hit.",
            solution: "This small website helps in estimating how much money the economy will lose, number of hospital beds needed and the number, ventilators needed and the number of people who'll be infected. This is after certain numbers are provided e.g. the number of infected people at the moment, the time you want to estimate(do you want to see the results after a month), population and hospital beds available at the moment.",
            noteableFeatures:
                "On the homepage when you cursor is on the page the background is focused but when you move your cursor out of the page the background is no longer focused. On the form when you click the submit button, the components slide over each other.",
        },
        {
            netlifyLink: "https://react-messenger-trial.netlify.app/",
            githubLink: "https://github.com/ryann254/React-Messenger-Deployed",
            languages: "Languages used were: Reactjs, Nodejs, ChakraUI and Graphql",
            title: "React Messenger",
            description: "It's a messenger app built on react, it makes queries to a graphql server to allow user to communicate with each other. The frontend is hosted on Netlify and the backend on heroku.",
            usage: "Multiple users can communicate with each other, each user just has to state their name in the first textbox usually labelled Ryan.",
            noteableFeatures:
                "You can send mesages like in a chatroom. When you tap your messages, an x button pops that allows you to delete your messages.",
        },
        {
            netlifyLink: "https://wedding-template-trial.netlify.app/",
            githubLink: "https://github.com/ryann254/React-Messenger-Deployed",
            languages: "Languages used were: Html, Css, Js and Jquery",
            title: "Wedding Planner Template",
            description: "This is Wedding Planner template built with html,css,js,bootstrap and a touch of jquery.It's fully mobile responsive and can be adapted to any wedding planner theme or specification.",
            noteableFeatures:
                "The template has a contact form at the bottom of the homepage which is fully functional and can be used to contact me. It also has a smooth scrolling effect.",
        },
        {
            netlifyLink: "https://expense-tracker-frontend-001.herokuapp.com/",
            githubLink: "https://github.com/ryann254/Daily-Expenditure-App-Front-End",
            languages: "Languages used were: Reactjs and Nodejs",
            title: "Daily Expenditure App",
            description: "In today's world we constantly spending money hence there's need to track all this spending. Yes, you can use simple notebook apps to record all your transactions but notebooks won't do the calculations for you and calculator apps won't keep records for you.",
            solution: "This is a simple and useful combination of a calculator and a notebook.",
            usage: "You simply state name the transaction you made and then state the amount, for an income you would input(+30,000 or 30,000) and for an expense you would input(-30,000),the negative has to be present",
            noteableFeatures:
                "When you enter a transaction and click add transaction its automatically sorted as an expense or income and based on that your balance is displayed at the top. This project also has an active backend",
        },
        {
            netlifyLink: "https://bakery-website-1.netlify.app/",
            githubLink: "https://github.com/ryann254/Bakery",
            languages: "Languages used were: Html, Css, Vanillajs and Jquery",
            title: "Bakery Template",
            description: "This is bakery template built with html,css,js,bootstrap and a touch of jquery.It\'s fully mobile responsive and can be adapted to any bakery theme or specification.",
            noteableFeatures:
                "The template has a contact form at the bottom of the homepage which is fully functional and can be used to contact me. There's also a blog page that gives a recipe decription when you click read more.",
        },
        {
            netlifyLink: "https://ryanfancyform.cf/",
            githubLink: "https://github.com/ryann254/FancyUI",
            languages: "Languages used were: Html, Css and Js",
            title: "Fancy Form",
            description: "This project does not solve any particular problem in society, its just a well-designed ui for a form. It gives you a different perspective on how forms can look",
            noteableFeatures:
                "When you try and move to the next question without submitting any data or submitting the wrong type of data, there's an effect that takes place. On completing the form it disappear and gives you a message.",
        },
    ]
}

function WorkReducer(state = initialState, action) {
    return state;
}

export default WorkReducer;
  