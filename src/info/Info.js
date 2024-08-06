import self from "../img/self.png"
import Screenshot1 from "../img/Screenshot1.png"
import Screenshot2 from "../img/Screenshot2.png"
import Screenshot3 from "../img/Screenshot3.png"
import Screenshot4 from "../img/Screenshot4.png"
import Screenshot5 from "../img/Screenshot5.png"
import Screenshot6 from "../img/Screenshot6.png"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(255, 151, 71)", "rgb(255, 151, 158)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Sam",
    lastName: "Muttai",
    initials: "Resume", // the example uses first and last, but feel free to use three or more if you like.
    position: "Full Stack Developer & Cyber Security Professional",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        
        {
            emoji: '☕',
            text: 'Passion to Code, Check out my portfolio'
        },
        {
            emoji: '🌎',
            text: 'based in the KE'
        },
        {
            emoji: "💼",
            text: "Systems Engineer"
        },
        {
            emoji: "📧",
            text: "muttaisammy@gmail.com"
        },
        {
            emoji: "📧",
            text: "Tel, WhatsApp +254 724 052 417"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "This is Sam Muttai. I am currently working as a Software Engineer with a Tech firm based in Kenya. I have a Bachelors in Computer Science from Georgia USA, I have valuable experience in the Tech Industry",
    skills:
    
        {
            FrontEnd: ['Javascript', 'Java Spring Boot', 'Node JS', 'Python','React JS', 'Next JS', 'github', 'bootstrap', 'html5', 'css3', 'figma',],
            BackEnd: ['APIs', 'MySQL', 'FireBase','PostGres','Maria DB','Mongo DB'],
            Internet_Security: ['Pen Testing', 'Defensive Sec', 'DevOps' ]
        }
    ,
    hobbies: [
        {
            label: 'Learning new stuff',
            emoji: '📖'
        },
        {
            label: 'Travelling',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
      
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed

        {
            title: "React JS, BootStrap",
            live: "https://kenstates.netlify.app", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com", // this should be a link to the **repository** of the project, where the code is hosted.
            image: Screenshot1
        },
        {
            title: "React JS, Firebase",
            live: "https://kentours.netlify.app", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com", // this should be a link to the **repository** of the project, where the code is hosted.
            image: Screenshot2
        },
        {
            title: "Java Spring Boot, MySQL",
            live: "https://spot.ampath.or.ke",
            source: "https://github.com",
            image: Screenshot3
        },
        {
            title: "Java Spring Boot, MySQL, BootStrap",
            live: "https://spot.ampath.or.ke/conference/register",
            source: "https://github.com",
            image: Screenshot4
        },
        {
            title: "Next JS, Redux",
            live: "https://autotrac.vercel.app",
            source: "https://github.com",
            image: Screenshot5
        },
        {
            title: "VPN Security Testing, API Testing",
            live: "https://safaricon.co.ke",
            source: "https://safaricon.co.ke",
            image: Screenshot6
        }
    ]
}