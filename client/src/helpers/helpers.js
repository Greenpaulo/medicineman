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
    const pathWithUnderline = path.replace(/\s+/g, '_');
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

  if(window.innerWidth > 1024) {
    for (let i = 0; i < num; i++) {
      sections.push({
        title: `Section ${ i + 1}`,
        id: `${title}-section-${ i + 1 }`,
        display: "block"
  
      })
    }
  } else {
    for (let i = 0; i < num; i++) {
      sections.push({
        title: `Sec. ${ i + 1}`,
        id: `${title}-section-${ i + 1 }`,
        display: "block"
  
      })
    }
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

export const renderChakraIcon = (chakra) => {
    switch (chakra) {
      case "root":
        return <img className="icon" src="/images/muladhara-2.svg" alt="" />
      case "sacral":
        return <img className="icon" src="/images/svadhisthana-2.svg" alt="" />
      case "solar plexus":
        return <img className="icon" src="/images/manipura-2.svg" alt="" />
      case "heart":
        return <img className="icon" src="/images/anahata-2.svg" alt="" />
      case "inner chamber of the heart":
        return <img className="icon" src="/images/anahata-2.svg" alt="" />
      case "throat":
        return <img className="icon" src="/images/vishuddha-2.svg" alt="" />
      case "back of the throat chakra":
        return <img className="icon" src="/images/vishuddha-2.svg" alt="" />
      case "third eye":
        return <img className="icon" src="/images/ajna-2.svg" alt="" />
      case "crown":
        return <img className="icon" src="/images/sahasrara-2.svg" alt="" />
      case "ba'hui point":
        return <img className="icon" src="/images/lotus-flower.svg" alt="" />
      case "ajana centre":
        return <img className="icon" src="/images/ajana-center.svg" alt="" />
      default:
        return <img className="icon" src="/images/mandala.svg" alt="" />;
    }
  }

  export const renderMeridianIcon = (meridian) => {
    switch (meridian) {
      case "heart":
        return <img className="icon" src="/images/heart.svg" alt="" />
      case "lung":
        return <img className="icon" src="/images/lungs.svg" alt="" />
      case "kidney":
        return <img className="icon" src="/images/kidney.svg" alt="" />
      case "bladder":
        return <img className="icon" src="/images/bladder.svg" alt="" />
      case "spleen":
        return <img className="icon" src="/images/spleen.svg" alt="" />
      case "heart protector":
        return <img className="icon" src="/images/heart-protector.svg" alt="" />
      case "conception vessel":
        return <img className="icon" src="/images/pelvis.svg" alt="" />
      case "governing vessel":
        return <img className="icon" src="/images/spinal-cord.svg" alt="" />
      case "stomach":
        return <img className="icon" src="/images/stomach.svg" alt="" />
      case "gall bladder":
        return <img className="icon" src="/images/gallbladder.svg" alt="" />
      case "liver":
        return <img className="icon" src="/images/liver.svg" alt="" />
      case "large intestine":
        return <img className="icon" src="/images/large-intestine.svg" alt="" />
      case "small intestine":
        return <img className="icon" src="/images/small-intestine.svg" alt="" />
      case "triple warmer":
        return <img className="icon" src="/images/bonfire.svg" alt="" />
      default:
        return null;
    }
  }

  export const scrollToTop = () => {
    document.documentElement.scrollTo(0, -75); // For Chrome, Firefox, IE and Opera
    document.body.scrollTo(0,-75); // For Safari
  }