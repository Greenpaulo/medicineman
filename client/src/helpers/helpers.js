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

export const renderImagePath = (path, format) => {
    // Just return the first image FOR NOW..................................................
    const pathWithUnderline = path.replaceAll(" ", "_")
    if (format === "200w") {
      return `/images/${format}/${pathWithUnderline}`
    }
    return `/images/${pathWithUnderline}`
  }