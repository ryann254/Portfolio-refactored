const initialState = {
    myWork: [
        {
            netlifyLink: "https://ryann254.github.io/Ryan-Covid19-Deploy/",
            githubLink: "https://github.com/ryann254/Ryan-Covid19-Challenge",
            image: "images/Estimator-app.webp",
            technologis: ["IconHtml", "IconCss", "IconJs"],
            title: "Covid-19 Estimator App",
            description: "In recent times we've been hit by a pandemic, corona virus, and the main issues have been stopping the spread of the virus and estimating how hard each country will be hit.",
            solution: "This small website helps in estimating how much money the economy will lose, number of hospital beds needed and the number, ventilators needed and the number of people who'll be infected. This is after certain numbers are provided e.g. the number of infected people at the moment, the time you want to estimate(do you want to see the results after a month), population and hospital beds available at the moment.",
            noteableFeatures:
                "On the homepage when you cursor is on the page the background is focused but when you move your cursor out of the page the background is no longer focused. On the form when you click the submit button, the components slide over each other.",
        },
        {
            netlifyLink: "https://ecstatic-colden-597ec2.netlify.app/",
            githubLink: "https://github.com/ryann254/React-Messenger-Deployed",
            image: "images/Messenger-app-coverphoto.webp",
            technologis: ["IconReactjs", "IconNodejs"],
            title: "React Messenger",
            description: "It's a messenger app built on react, it makes queries to a graphql server to allow user to communicate with each other. The frontend is hosted on Netlify and the backend on heroku.",
            usage: "Multiple users can communicate with each other, each user just has to state their name in the first textbox usually labelled Ryan.",
            noteableFeatures:
                "You can send mesages like in a chatroom. When you tap your messages, an x button pops that allows you to delete your messages.",
        },
        {
            netlifyLink: "https://compassionate-einstein-9ec9cd.netlify.app/",
            githubLink: "https://github.com/ryann254/React-Messenger-Deployed",
            image: "images/Wedding-template.webp",
            technologis: ["IconHtml", "IconNodejs","IconCss", "IconJs", "IconJquery"],
            title: "Wedding Planner Template",
            description: "This is Wedding Planner template built with html,css,js,bootstrap and a touch of jquery.It's fully mobile responsive and can be adapted to any wedding planner theme or specification.",
            noteableFeatures:
                "The template has a contact form at the bottom of the homepage which is fully functional and can be used to contact me. It also has a smooth scrolling effect.",
        },
        {
            netlifyLink: "https://expense-tracker-frontend-001.herokuapp.com/",
            githubLink: "https://github.com/ryann254/Daily-Expenditure-App-Front-End",
            image: "images/Expense-app.webp",
            technologis: ["IconReactjs", "IconNodejs"],
            title: "Daily Expenditure App",
            description: "In today's world we constantly spending money hence there's need to track all this spending. Yes, you can use simple notebook apps to record all your transactions but notebooks won't do the calculations for you and calculator apps won't keep records for you.",
            solution: "This is a simple and useful combination of a calculator and a notebook.",
            usage: "You simply state name the transaction you made and then state the amount, for an income you would input(+30,000 or 30,000) and for an expense you would input(-30,000),the negative has to be present",
            noteableFeatures:
                "When you enter a transaction and click add transaction its automatically sorted as an expense or income and based on that your balance is displayed at the top. This project also has an active backend",
        },
        {
            netlifyLink: "https://dreamy-sammet-3a0674.netlify.app/",
            githubLink: "https://github.com/ryann254/Bakery",
            image: "images/Bakery template.webp",
            technologis: ["IconHtml", "IconCss", "IconJs", "IconJquery"],
            title: "Bakery Template",
            description: "This is bakery template built with html,css,js,bootstrap and a touch of jquery.It\'s fully mobile responsive and can be adapted to any bakery theme or specification.",
            noteableFeatures:
                "The template has a contact form at the bottom of the homepage which is fully functional and can be used to contact me. There's also a blog page that gives a recipe decription when you click read more.",
        },
        {
            netlifyLink: "https://ryanfancyform.cf/",
            githubLink: "https://github.com/ryann254/FancyUI",
            image: "images/Fancy-form.webp",
            technologis: ["IconHtml", "IconCss", "IconJs"],
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
  