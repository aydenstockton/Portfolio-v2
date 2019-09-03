// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const ProjectAPI = {
  projects: [
    { number: 1, name: "Insurance Portal Tables", description: "Lorem" },
    { number: 2, name: "Cat Claims v1", description: "Ipsum" },
    { number: 3, name: "Salt Squad Branding", description: "Hola" },
    { number: 4, name: "Skatetastic", description: "Dola" },
    { number: 5, name: "Little Possum Man", description: "Uno dos tres" },
    { number: 6, name: "I wish I was", description: "cuatro" }
  ],
  all: function() { return this.projects},
  get: function(id) {
    const isProject = p => p.number === id
    return this.projects.find(isProject)
  }
}

export default ProjectAPI
