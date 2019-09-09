// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const ProjectAPI = {
  projects: [
    { number: 1, name: "Q Mobile App", description: "Lorem", type: "Product Design", theme: "Universe" },
    { number: 2, name: "Chocolate", description: "Ipsum", type: "Product Design", theme: "Universe" },
    { number: 3, name: "Preference History", description: "Hola", type: "Product Design", theme: "Canvas" },
    { number: 4, name: "Swift Shift", description: "Dola", type: "Product Design", theme: "Universe"},
    { number: 5, name: "Business Card", description: "Uno dos tres", type: "Product Design", theme: "Universe" },
    { number: 6, name: "Premium Change Tool", description: "cuatro", type: "Product Design", theme: "Canvas" },
    { number: 7, name: "okra", description: "cuatro", type: "Visual Design", theme: "Universe" },
    { number: 8, name: "MyPolicy Mobile App Branding", description: "cuatro", type: "Visual Design", theme: "Universe" },
    { number: 9, name: "New York Times", description: "cuatro", type: "Visual Design", theme: "Canvas" },
    { number: 10, name: "Vista", description: "cuatro", type: "Product Design", theme: "Canvas" },
  ],
  all: function() { return this.projects},
  get: function(id) {
    const isProject = p => p.number === id
    return this.projects.find(isProject);
  }
};

export default ProjectAPI
