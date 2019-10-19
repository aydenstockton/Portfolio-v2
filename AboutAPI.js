const AboutAPI = {
    about:[
        {
            title:"WHO AM I?",
            description:"Well, that’s a pretty deep question. In short, my name is Ayden Stockton."
        },
        {
            title:"WHAT DO I DO?",
            description:"I design things, both physical and digital. Right now, I'm working as a Digital Product Designer at AAA Insurance and I'm focusing on end to end product design and product strategy."
        },
        {
            title:"WHEN AM I?",
            description:"I can only be now."
        },
        {
            title:"WHERE AM I?",
            description:"I’m from Long Beach, CA but I’m currently residing in San Francisco, CA. That can change. In fact, if you’re reading this and live somewhere cool, please let me know how I can get there."
        },
        {
            title:"WHERE AM I?",
            description: <strike>Design is a way of life.</strike> + "OK so yeah, that might be true but it’s pretty cliché. So I’ll try to say it in my own way. Design gives me life. When I'm working on something I'm passionate about I can feel the drive pushing me forward and time ceases to matter. I’ve always loved solving problems creatively and design is just that."
        }
    ],
    all: function () {
        return this.about;
    },
    get: function (id) {
        const isABout = p => p.number === id
        return this.projects.find(isAbout);
    }
};

export default AboutAPI