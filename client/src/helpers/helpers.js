export function checkLoading ( resources, loaders) {
  // Check if resources are empty
  const resourcesEmpty = resources.includes(null)
  // Check that resources are not still loading
  const stillLoading = loaders.includes(true);

  if (resourcesEmpty || stillLoading) {
    return true;
  }
  // Else all data is loaded and loaders have completed
  return false;
}

export const renderCompanyName = (company) => {
      switch(company) {
        case 'ABFE':
          return "Australian Bush Flower Essences"
        case 'Alaskan':
          return "Alaskan Essences"
        case 'Bach':
          return "Bach Flower Essences"
        case 'Bailey':
          return "Bailey Essences"
        case 'Indigo':
          return "Indigo Essences"
        case 'Pacific':
          return "Pacific Essences"
        case 'WEAE':
          return "Wild Earth Animal Essences"
        default:
          return `${company}`
      }
  }

  // Function to generate random number 
export const randomNumber = (min, max) => { 
    return Math.floor((Math.random() * (max - min) + min));
}

  // Function to export n random unique numbers
// export const randomUniqueNumbers = (n, min, max) => { 
//   let numbers = [];
//   let checkNumberAndAdd = (number) => {
//     if (!numbers.includes(number)){
//       numbers.push(number)
//     }
//     else {
//       n++;
//     }
//   } 
//   for (let i = 0; i < n; i++ ) {
//     checkNumberAndAdd(randomNumber(min, max))
//   }
//   return numbers;  
// } 

export const renderImagePath = (images, format) => {
    // Just return the first image FOR NOW..................................................
    let path = "";
    if (images[0].includes("ABFE")){
      path = images[1]
    } else {
      path = images[0]
    }
    const pathWithUnderline = path.replaceAll(" ", "_")
    if (format === "200w") {
      return `/images/${format}/${pathWithUnderline}`
    }
    return `/images/${pathWithUnderline}`
  }

export const createEducationSectionsObject = (num, title) => {
  let sections = [{
    title: "Contents",
    id: `${title}-section-contents`,
    display: "block"
  }]

  for (let i = 0; i < num; i++) {
    sections.push({
      title: `Section ${ i + 1}`,
      id: `${title}-section-${ i + 1 }`,
      display: "block"

    })
  }
  if (title === "beginner" || title === "intermediate") {
    sections.push({
      title: "References",
      id: `${title}-section-references`,
      display: "block"
    })
  }
  return sections;
}