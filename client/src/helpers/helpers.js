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
          return <h1 id="company-heading">Australian Bush Flower Essences</h1> 
        case 'Alaskan':
          return <h1 id="company-heading">Alaskan Essences</h1> 
        case 'Bach':
          return <h1 id="company-heading">Bach Flower Essences</h1> 
        case 'Bailey':
          return <h1 id="company-heading">Bailey Essences</h1> 
        case 'Indigo':
          return <h1 id="company-heading">Indigo Essences</h1> 
        case 'Pacific':
          return <h1 id="company-heading">Pacific Essences</h1> 
        case 'WEAE':
          return <h1 id="company-heading">Wild Earth Animal Essences</h1> 
        default:
          return <h1 id="company-heading">{company}</h1> 
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