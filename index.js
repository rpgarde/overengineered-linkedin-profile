const inputs = {
    yearsOfExperience:8,
    industry:"Food & Beverage, Ridesharing, and PropTech",
    newCareer:"Software Engineering",
    reason:"my desire to get closer to the inner workings of the tech that I use and work on everyday",
    certification:"Certificate in Full Stack Web Development",
    school:"The University of Sydney",
    gitHubUrl:"https://www.github.com/rpgarde"
}

const summary = (inputs) => {
    const {yearsOfExperience,
        industry,
        newCareer,
        reason,
        certification,
        school,
        gitHubUrl} = inputs

return `I’ve had ${yearsOfExperience} years of tech startup experience in ${industry}, and have recently decided to switch to a career in ${newCareer} because of ${reason}.

I've just completed a ${certification} at ${school}. Check out my Github profile at ${gitHubUrl}, or linked below.`
}

console.log(summary(inputs))