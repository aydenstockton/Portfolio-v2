// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const ProjectAPI = {
    projects:[
        {
            number: 1,
            id:"q-app",
            name: "Q Mobile App",
            type: "Product Design",
            theme: "universe",
            src: "/img/q-device-thumbnail.png",
            logo:"/img/q-logo.svg",
            hero:"/img/screen-tiles-web.png",
            introLeft:[
                {
                   title:"PROJECT OVERVIEW",
                   description:"The Q design effort entailed the end-to-end creation of a native app that started from a concept and ended at a fully branded product.",
                },
                {
                    title:"THE PROBLEM",
                    description:"Music is one of the most accessible ways to create and share experiences with people. Technology shouldn’t create barriers around shared experiences, it should foster them.",
                },
                {
                    title:"THE GOAL",
                    description:"Create a music app to remedy the inability to collaborate on music playlists across different streaming platforms and devices.",
                }
            ],
            introRight:[
                {
                    title:"CONTRIBUTIONS",
                    description:"",
                    list: [
                        "UX Design",
                        "Branding",
                        "Research"
                    ]
                },
                {
                    title:"CONSTRAINTS",
                    list: [
                        "Creating a viable product that works around streaming ownership",
                    ]
                }
            ],
            layout:[
                {
                    type:"row",
                    video:"/img/q-explanation-1.mp4"
                },
                {
                    type:"row",
                    title:"Defining the Experience",
                    description:"After surveying a group of potential users I found that the priority for users is ease of access into a playlist. This led to two main user flows that I sketched out on paper: Adding a new ‘Q’ and joining an existing ‘Q’.",
                    img:"/img/q-sketch.png"
                },
                {
                    type:"row",
                    title:"Branding the Experience",
                    description:"Once the flow was refined, the visual design and branding process started as small iterations on a few wireframes to help me understand which direction I wanted to go with the brand. After getting a few iterations out of the way, I took a step back and did a deeper branding study on what exactly the product is and how it should feel.",
                    img:"/img/q-branding.png"
                },
                {
                    type:"row",
                    img:"/img/q-mm-quote.png"
                },
                {
                    type:"row",
                    img:"/img/q-moodboard.png"
                },
                {
                    type:"row",
                    img:"/img/q-icons.png"
                },
                {
                   type: "row",
                   title: "Disposability",
                   description: "The main constraint of this project would be getting the approval of different streaming services to use their streaming APIs. The idea is that Q removes playlists are no longer playable after the playlist has been idle for a set amount of time. Any liked songs from past playlists get saved in a user profile, but they only serve as links to the streaming platform as no songs are saved within Q.",
                },
                {
                    type:"row-narrow",
                    title:"Q-code Flow",
                    description:"Q makes joining new friends easy. With each unique Q-code a person can share their playlists on-demand",
                    video:"/img/q-iphone-demo.mp4"
                },
                {
                    type:"row",
                    img:"/img/q-overview.png"
                }
            ]
        },
        {
            number: 2,
            id: "gravity",
            name: "Gravity Series",
            type: "Visual Design",
            theme: "universe",
            src: "/img/choc-thumbnail.png",
            logo:"/img/chocolate-box-logo-color.svg",
            hero:"/img/chocolate-hero-2.png",
            introLeft:[
                {
                    title:"PROJECT OVERVIEW",
                    description:"The Gravity Series is a 10 board series accompanied by 2 t-shirts and 3 sets of wheels. It was released for sale with the Wallride 32 release for Chocolate Skateboards.",
                },
                {
                    title:"THE PROBLEM",
                    description:"Every quarter, a new set of skateboard decks get released with their names. In some cases, designs can be individual and unrelated to each other. In most cases, like the gravity series, a system needs to be created where a singular design concept can be manipulated and applied across the entire team of pros.",
                },
                {
                    title:"THE CONCEPT",
                    description:"I've always been fascinated with space, physics, and science in general. In skateboarding, understanding physics, cause and effect, and space are critical to performing the tricks you want to. For this design series, I created a visual system out of particle \"nets\" that simulated forms from warped lines in reference to the way gravity affects particles in space.",
                }
            ],
            introRight:[
                {
                    title:"CONTRIBUTIONS",
                    description:"",
                    list: [
                        "Concept",
                        "Graphics"
                    ]
                }
            ],
            layout:[
                {
                    type:"row",
                    img:"/img/chocolate-lineup-1.png"
                },
                {
                    type:"row",
                    img:"/img/chocolate-lineup-2.png"
                },
                {
                    type:"row",
                    img:"/img/chocolate-shirt-wheels.png"
                },
                {
                    type:"row",
                    img:"/img/chocolate-insta.png"
                },
            ]
        },
        {
            number: 3,
            id:"preference-history",
            name: "Preference History",
            type: "Product Design",
            theme: "canvas",
            src: "/img/p-hist-thumbnail.png",
            logo:"/img/aaa-logo-color.svg",
            hero:"/img/pref-hist-hero-web.png",
            introLeft:[
                {
                    title:"PROJECT OVERVIEW",
                    description:"The preference history project effort consisted of a new UX and UI to log policy changes in regards to paperless settings. The timeline established by Project Managers was 4 weeks for design and testing and 4 weeks for development.",
                },
                {
                    title:"THE PROBLEM",
                    description:"Our existing table pattern was taking agents too long to find information. Because agents have hundreds of calls per day, finding information quickly is critical.",
                },
                {
                    title:"THE GOAL",
                    description:"Create a UI that would scale to future history logging tools within multiple AAA products.",
                }
            ],
            introRight:[
                {
                    title:"CONTRIBUTIONS",
                    description:"",
                    list: [
                        "UX Design",
                        "Visual Design",
                        "Research"
                    ]
                },
                {
                    title:"CONSTRAINTS",
                    list: [
                        "No search",
                        "No alerts",
                        "Data must stay in chronological order"
                    ]
                }
            ],
            layout:[
                {
                    type:"row",
                    title:"",
                    description:"",
                    img:"/img/0.png"
                },
            ]
        },
        {
            number: 4,
            id:"swift-shift",
            name: "Swift Shift",
            type: "Product Design",
            theme: "universe",
            src: "/img/ss-thumbnail.png",
            logo:"/img/ss-logo.svg",
            hero:"/img/ss-hero-web.png",
            introLeft:[
                {
                    title:"PROJECT OVERVIEW",
                    description:"Swift Shift is a smart shift knob that is designed to enhance the driving experience by optimizing shift timing.",
                },
                {
                    title:"THE PROBLEM",
                    description:"Car enthusists love pushing their vehicles to the limit. For many, there is a desire to have an onboard shift timing assistant. For those of us who don't have the time, money, or knowledge to equip technical mods into our performance vehicles, there is no cheap solution to assist with shift timing.",
                },
                {
                    title:"THE GOAL",
                    description:"Create an easy to install shift timing assistant that uses digital and haptic feedback.",
                }
            ],
            introRight:[
                {
                    title:"CONTRIBUTIONS",
                    description:"",
                    list: [
                        "Concept",
                        "Branding",
                        "Industrial Design",
                        "UX Design"
                    ]
                }
            ],
            layout:[
                {
                    type:"row",
                    img:"/img/ss-gear-indicator.png"
                },
                {
                    type:"row",
                    img:"/img/ss-gear-interface.png"
                },
                {
                    type:"row",
                    img:"/img/ss-shifting-ux.png"
                },
                {
                    type:"row",
                    img:"/img/ss-vibrate-feedback.png"
                },
                {
                    type:"row",
                    img:"/img/ss-profile-settings.png"
                },
                {
                    type:"row",
                    img:"/img/ss-menu-map.png"
                },
                {
                    type:"row",
                    img:"/img/ss-construction.png"
                },
                {
                    type:"row",
                    img:"/img/ss-design-options.png"
                },
                {
                    type:"row",
                    img:"/img/ss-render-context.png"
                },
            ]
        },
        {
            number: 5,
            id:"as-card",
            name: "Business Card",
            type: "Product Design",
            theme: "universe",
            src: "/img/as-card-thumbnail.png",
            logo:"/img/as-card-logo.svg",
            hero:"/img/as-card-tile.png",
            introLeft:[
                {
                    title:"PROJECT OVERVIEW",
                    description:"This is a business card that was designed as a means for self promotion.",
                },
                {
                    title:"THE PROBLEM",
                    description:"Business cards are supposed to be something that helps people remember you. However, often times, people either lose business cards in the recess of their wallets or throw it away completely.",
                },
                {
                    title:"THE GOAL",
                    description:"Create a business card that represents myself and is so memorable that no one would ever throw it away, stash it, or lose it.",
                },
                {
                    title:"THE CONCEPT",
                    description:"We all travel through life with our own perspective or lens. As a designer, it is inherent in my process for me to shift my own perspective and to also help others see things from a perspective they may not have considered previously. My card is the literal manifestation of that concept. In the same way that you start to see the same thing differently as you shift your perspectives in life, as you physically alter the lens of the card, the same object begins to look different than what it started as."
                }
            ],
            introRight:[
                {
                    title:"CONTRIBUTIONS",
                    description:"",
                    list: [
                        "Concept",
                        "Production",
                    ]
                }
            ],
            layout:[
                {
                    type:"row",
                    img:"/img/as-card.gif"
                },
                {
                    type:"row",
                    img:"/img/as-card-triple.png"
                },
                {
                    type:"row",
                    img:"/img/as-card-tile.png"
                },
            ]
        },
        {
            number: 6,
            id:"premium-change-tool",
            name: "Premium Change",
            type: "Product Design",
            theme: "canvas",
            src: "/img/pct-thumbnail.png",
            logo:"/img/aaa-logo-color.svg",
            hero:"/img/pct-hero-web.png",
            introLeft:[
                {
                    title:"PROJECT OVERVIEW",
                    description:"The premium change tool project focused on UI enhancements to a non-designed tool to enhance usability.",
                },
                {
                    title:"THE PROBLEM",
                    description:"Agents originally had no functional way to compare changes in premium changes. This led to frustrated customers and agents. A new tool was proposed and piloted but it was developed no UX or UI design input. Although it was more helpful than having nothing, the UX and UI needed improvement.",
                },
                {
                    title:"THE GOAL",
                    description:"Improve usability by prioritizing information and creating a more accessible UI.",
                }
            ],
            introRight:[
                {
                    title:"CONTRIBUTIONS",
                    description:"",
                    list: [
                        "Visual Design",
                        "Research"
                    ]
                },
                {
                    title:"CONSTRAINTS",
                    list: [
                        "No search",
                        "No \"extreme\" UI enhancements"
                    ]
                }
            ],
            layout:[
                {
                    type:"row",
                    title:"",
                    description:"",
                    img:"/img/0.png"
                },
            ]
        },
        {
            number: 7,
            id:"okra",
            name: "okra",
            type: "Visual Design",
            theme: "universe",
            src: "/img/okra-thumbnail.png",
            logo:"/img/okra-logo.png",
            hero:"/img/okra-hero-web.png",
            introLeft:[
                {
                    title:"PROJECT OVERVIEW",
                    description:"\"okra\" is a typeface design that combines elements of blackletter calligraphy and modern sans-serif typefaces.",
                },
                {
                    title:"THE CONCEPT",
                    description:"The project started by creating a 3D typeface for a set of house numbers. I envisioned the numbers climbing slightly upwards on a wall and used the angles that you see at the top and bottom of the numbers as a way to make an ascending baseline feel natural. After finishing the numbers, I recognized the potential for an entire system to generate a complete typeface and okra was the result.",
                }
            ],
            introRight:[
                {
                    title:"CONTRIBUTIONS",
                    description:"",
                    list: [
                        "Typeface Design"
                    ]
                }
            ],
            layout:[
                {
                    type:"row",
                    img:"/img/okra-dimension.png"
                },
                {
                    type:"row",
                    img:"/img/okra-sample.png"
                },
                {
                    type:"row",
                    img:"/img/okra-full-typeface.png"
                },
            ]
        },
        {
            number: 8,
            id:"mp-mobile-app",
            name: "MyPolicy Mobile App",
            type: "Visual Design",
            theme: "universe",
            src: "/img/mp-app-context-thumbnail.png",
            logo:"/img/mp-app-logo.svg",
            hero:"",
            introLeft:[
                {
                    title:"PROJECT OVERVIEW",
                    description:"The MyPolicy mobile app is AAA's mobile native experience for viewing policy details. This is the logo design process for that app.",
                },
                {
                    title:"THE PROBLEM",
                    description:"AAA insurance and AAA club are different businesses despite sharing the same logomark. The app needed a logo that did not explicitly reference the AAA logo.",
                },
                {
                    title:"THE GOAL",
                    description:"Create a logo for the AAA MyPolicy Mobile App that stayed true to the brand in an abstract form.",
                }
            ],
            introRight:[
                {
                    title:"CONTRIBUTIONS",
                    description:"",
                    list: [
                        "Logo Design"
                    ]
                }
            ],
            layout:[
                {
                    type:"row",
                    img:"/img/mp-app-sketches.png"
                },
                {
                    type:"row",
                    img:"/img/mp-app-logosheet.png"
                },
                {
                    type:"row",
                    title:"Logo Direction",
                    description:"The team explored a lot of possibilities with different forms. I spent my time pushing the most basic element of the AAA logo, the orbit. After manipulating the primitive semi-circle form in various iterations, the team found this final form to be the most conceptually compelling. It abstractly relates to the AAA logo with three orbits to form a shield that symbolizes coverage and protection.",
                    img:"/img/mp-app-grid.png"
                },
                {
                    type:"row",
                    img:"/img/mp-app-iconsheet.png"
                },
                {
                    type:"row",
                    img:"/img/mp-app-iphonex.png"
                },
            ]
        },
        {
            number: 9,
            id:"nyt",
            name: "New York Times",
            type: "Visual Design",
            theme: "universe",
            src: "/img/nyt-thumbnail.png",
            logo:"/img/nyt-t-logo.svg",
            hero:"/img/nyt-triple.png",
            introLeft:[
                {
                    title:"PROJECT OVERVIEW",
                    description:"Using three days of the newspaper, this project explores improvements to the design system and experience of the classic publication: The New York Times.",
                },
                {
                    title:"THE PROBLEM",
                    description:"Deciphering which papers are new and which are old on a newsstand can be difficult if they are haphazardlously tossed around. The heirarchy within the paper is also confusing when so many columns of text are next to each other.",
                },
                {
                    title:"THE GOAL",
                    description:"Create a new system that makes identifying different days of the newspaper and stories within the newspaper easier.",
                }
            ],
            introRight:[
                {
                    title:"CONTRIBUTIONS",
                    description:"",
                    list: [
                        "Concept",
                        "Layout Design"
                    ]
                },
                {
                    title:"CONSTRAINTS",
                    list: [
                        "All content from original must fit into refreshed design"
                    ]
                }
            ],
            layout:[
                {
                    type:"row",
                    img:"/img/nyt-wed.png"
                },
                {
                    type:"row",
                    img:"/img/nyt-thurs.png"
                },
                {
                    type:"row",
                    img:"/img/nyt-fri.png"
                },
                {
                    type:"row",
                    img:"/img/nyt-dutch.png"
                },
                {
                    type:"row",
                    img:"/img/nyt-triple.png"
                },

            ]
        },
        {
            number: 10,
            id:"vista",
            name: "Vista",
            type: "Product Design",
            theme: "canvas",
            src: "/img/vista-thumbnail.png",
            logo:"/img/aaa-logo-color.svg",
            hero:"",
            introLeft:[
                {
                    title:"PROJECT OVERVIEW",
                    description:"The Vista project effort consisted of a UI refresh for the enterprise portal.",
                },
                {
                    title:"THE PROBLEM",
                    description:"Vista was redesigned because the experience had become too cluttered over the years of adding features and pages. Both the information architecture and hierarchy weren't focused and made it an overall frustrating experience for users.",
                },
                {
                    title:"THE GOAL",
                    description:"Shift towards a modular layout to help focus users on prioritized content as well as implementing elements of personalization within an enterprise-wide generic content dashboard.",
                }
            ],
            introRight:[
                {
                    title:"CONTRIBUTIONS",
                    description:"",
                    list: [
                        "UX Design",
                        "Visual Design",
                        "Research"
                    ]
                },
                {
                    title:"CONSTRAINTS",
                    list: [
                        "Enterprise templating software"
                    ]
                }
            ],
            layout:[
                {
                    type:"row",
                    title:"Shift Towards Modularity",
                    description:"Before joining the project, other members of the UX team had done an initial redesign of the page that shifted towards a modular format. Although the design was an improvement, it did not meet all of the requirements and would not be technically feasible. I took inspiration from the redesign and worked with stakeholders and developers to come up with a modular approach that met all the requirements and would be possible to build within scope.",
                    img:"/img/vista-v2.png"
                },
            ]
        },
    ],
    all: function () {
        return this.projects;
    },
    get: function (id) {
        const isProject = p => p.number === id
        return this.projects.find(isProject);
    }
};

export default ProjectAPI
