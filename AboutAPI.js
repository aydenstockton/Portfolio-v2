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
            title:"WHY DO I DO WHAT I DO?",
            description: "Design is something I found when I was 15. It's always made sense. I have always loved solving problems and design is just that. Only, there's no one answer to any of the problems. It's the perfect blend of logic and creativity that makes me feel at home."
        }
    ],
    all: function () {
        return this.about;
    }
};

export default AboutAPI