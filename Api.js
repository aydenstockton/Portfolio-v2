// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const ProjectAPI = {
    projects: [
        {
            number: 1,
            name: "Q Mobile App",
            description: "Lorem",
            type: "Product Design",
            theme: "Universe",
            src: "/img/q-device-thumbnail.png",
            layout:[
                {
                    type:"row",
                    title:"Defining the Experience",
                    description:"After surveying a group of potential users I found that the priority for users is ease of access into a playlist. This lead to two main user flows that I sketched out on paper: Adding a new ‘Q’ and joining an existing ‘Q’.",
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
            description: "Ipsum",
            type: "Product Design",
            theme: "Universe",
            src: "/img/choc-thumbnail.png"
        },
        {
            number: 3,
            name: "Preference History",
            description: "Hola",
            type: "Product Design",
            theme: "Canvas",
            src: "/img/p-hist-thumbnail.png"
        },
        {
            number: 4,
            name: "Swift Shift",
            description: "Dola",
            type: "Product Design",
            theme: "Universe",
            src: "/img/ss-thumbnail.png"
        },
        {
            number: 5,
            name: "Business Card",
            description: "Uno dos tres",
            type: "Product Design",
            theme: "Universe",
            src: "/img/as-card-thumbnail.png"
        },
        {
            number: 6,
            name: "Premium Change",
            description: "cuatro",
            type: "Product Design",
            theme: "Canvas",
            src: "/img/pct-thumbnail.png"
        },
        {
            number: 7,
            name: "okra",
            description: "cuatro",
            type: "Visual Design",
            theme: "Universe",
            src: "/img/okra-thumbnail.png"
        },
        {
            number: 8,
            name: "MyPolicy Mobile App",
            description: "cuatro",
            type: "Visual Design",
            theme: "Universe",
            src: "/img/mp-app-context-thumbnail.png"
        },
        {
            number: 9,
            name: "New York Times",
            description: "cuatro",
            type: "Visual Design",
            theme: "Canvas",
            src: "/img/nyt-thumbnail.png"
        },
        {
            number: 10,
            name: "Vista",
            description: "cuatro",
            type: "Product Design",
            theme: "Canvas",
            src: "/img/vista-thumbnail.png"
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
