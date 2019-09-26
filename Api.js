// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const ProjectAPI = {
    projects:[
        {
            number: 1,
            name: "Q Mobile App",
            type: "Product Design",
            theme: "Universe",
            src: "/img/q-device-thumbnail.png",
            logo:"",
            intro:[
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
                },
                {
                    title:"CONTRIBUTIONS",
                    description:"",
                    list: [
                        "Branding",
                        "Research",
                        "UX Design"
                    ]
                },
                {
                    title:"CONSTRAINTS",
                    list: [
                        "Streaming rights of each platform",
                    ]
                }
            ],
            layout:[
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
                }
            ]
        },
        {
            number: 2,
            name: "Gravity Series",
            type: "Visual Design",
            theme: "Universe",
            src: "/img/choc-thumbnail.png",
            logo:"",
            intro:[
                {
                    banner:"",
                    overview:"The Gravity Series is a 10 board series accompanied by 2 t-shirts and 3 sets of wheels. It was released for sale with the Wallride 32 release for Chocolate Skateboards.",
                    problem:"Every quarter, a new set of skateboard decks get released with their names. In some cases, designs can be individual and unrelated to each other. In most cases, like the gravity series, a system needs to be created where a singular design concept can be manipulated and applied across the entire team of pros.",
                    goal:"",
                    concept:"I've always been fascinated with space, physics, and science in general. In skateboarding, understanding physics, cause and effect, and space are critical to performing the tricks you want to. For this design series, I created a visual system out of particle \"nets\" that simulated forms from warped lines in reference to the way gravity affects particles in space.",
                    contributions:"Concept" + "Graphics",
                    constraints:""
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
            number: 3,
            name: "Preference History",
            type: "Product Design",
            theme: "Canvas",
            src: "/img/p-hist-thumbnail.png",
            logo:"",
            intro:[
                {
                    banner:"",
                    overview:"The preference history project effort consisted of a new UX and UI to log policy changes in regards to paperless settings. The timeline established by Project Managers was 4 weeks for design and testing and 4 weeks for development",
                    problem:"Our existing table pattern was taking agents too long to find information. Because agents have hundreds of calls per day, finding information quickly is critical.",
                    goal:"Create a UI that would scale to future history logging tools within multiple AAA products.",
                    concept:"",
                    contributions:"UX Design" + "Visual Design" + "Research",
                    constraints:"No search" + "No alerts" + "No pulling data out of chronological order"
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
            name: "Swift Shift",
            type: "Product Design",
            theme: "Universe",
            src: "/img/ss-thumbnail.png",
            logo:"",
            intro:[
                {
                    banner:"",
                    overview:"Swift Shift is a smart shift knob that is designed to enhance the driving experience by optimizing shift timing.",
                    problem:"Car enthusists love pushing their vehicles to the limit. For many, there is a desire to have an onboard shift timing assistant. For those of us who don't have the time, money, or knowledge to equip technical mods into our performance vehicles, there is no cheap solution to assist with shift timing.",
                    goal:"Create an easy to install shift timing assistant that uses digital and haptic feedback.",
                    concept:"",
                    contributions:"Concept" + "Branding" + "Industrial Design" + "UX Design" + "Visual Design",
                    constraints:""
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
            number: 5,
            name: "Business Card",
            type: "Product Design",
            theme: "Universe",
            src: "/img/as-card-thumbnail.png",
            logo:"",
            intro:[
                {
                    banner:"",
                    overview:"This is a business card that was designed as a means for self promotion.",
                    problem:"Business cards are supposed to be something that helps people remember you. However, often times, people either lose business cards in the recess of their wallets or throw it away completely.",
                    goal:"Create a business card that represents myself and is so memorable that no one would ever throw it away, stash it, or lose it.",
                    concept:"We all travel through life with our own perspective or lens. As a designer, it is inherent in my process for me to shift my own perspective and to also help others see things from a perspective they may not have considered previously. My card is the literal manifestation of that concept. In the same way that you start to see the same thing differently as you shift your perspectives in life, as you physically alter the lens of the card, the same object begins to look different than what it started as.",
                    contributions:"Concept" + "Production",
                    constraints:""
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
            number: 6,
            name: "Premium Change",
            type: "Product Design",
            theme: "Canvas",
            src: "/img/pct-thumbnail.png",
            logo:"",
            intro:[
                {
                    banner:"",
                    overview:"The premium Change tool project consisted of a UI redesign to enhance usability.",
                    problem:"Agents originally had no functional way to compare changes in premium changes. This led to frustrated customers and agents. A new tool was proposed and piloted but it was developed no UX or UI design input. Although it was more helpful than having nothing, the UX and UI needed improvement.",
                    goal:"Improve usability by prioritizing information and creating a more accessible UI",
                    concept:"",
                    contributions:"Visual Design" + "Research",
                    constraints:"No \"extreme\" UI enhancements" + "No search"
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
            name: "okra",
            type: "Visual Design",
            theme: "Universe",
            src: "/img/okra-thumbnail.png",
            logo:"",
            intro:[
                {
                    banner:"",
                    overview:"okra is a typeface design that combines elements of blackletter calligraphy and modern sans-serif typefaces.",
                    problem:"",
                    goal:"",
                    concept:"The project started by creating a 3D typeface for a set of house numbers. I envisioned the numbers climbing slightly upwards on a wall and used the angles that you see at the top and bottom of the numbers as a way to make an ascending baseline feel natural. After finishing the numbers, I recognized the potential for an entire system to generate a complete typeface and okra was the result.",
                    contributions:"Typeface Design",
                    constraints:""
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
            number: 8,
            name: "MyPolicy Mobile App",
            type: "Visual Design",
            theme: "Universe",
            src: "/img/mp-app-context-thumbnail.png",
            logo:"",
            intro:[
                {
                    banner:"",
                    overview:"The MyPolicy mobile app is AAA's mobile native experience for viewing policy details. This is the logo design process for that app.",
                    problem:"AAA insurance and AAA club are different businesses despite sharing the same logomark. The app needed a logo that did not explicitly reference the AAA logo.",
                    goal:"Create a logo for the AAA MyPolicy Mobile App that stayed true to the brand in an abstract form.",
                    contributions:"Logo Design",
                    constraints:""
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
            number: 9,
            name: "New York Times",
            type: "Visual Design",
            theme: "Canvas",
            src: "/img/nyt-thumbnail.png",
            logo:"",
            intro:[
                {
                    banner:"",
                    overview:"Using three days of the newspaper, this project explores improvements to the design system and experience of the classic publication: The New York Times.",
                    problem:"Deciphering which papers are new and which are old on a newsstand can be difficult if they are haphazardlously tossed around. The heirarchy within the paper is also confusing when so many columns of text are next to each other.",
                    goal:"Create a new system that makes identifying different days of the newspaper and stories within the newspaper easier.",
                    contributions:"Concept" + "Layout Design",
                    constraints:"All content from original must fit into refreshed design"
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
            number: 10,
            name: "Vista",
            type: "Product Design",
            theme: "Canvas",
            src: "/img/vista-thumbnail.png",
            logo:"",
            intro:[
                {
                    banner:"",
                    overview:"The Vista project effort consisted of a UI refresh for the enterprise portal.",
                    problem:"Vista was redesigned because the experience had become too cluttered over the years of adding features and pages. Both he information architecture and hierarchy weren't focused and made it an overall frustrating experience for users.",
                    goal:"Shift towards a modular layout to help focus users on prioritized content  as well as implementing elements of personalization within an enterprise-wide generic content dashboard.",
                    contributions:"UX Design" + "Visual Design" + "Research",
                    constraints:""
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
