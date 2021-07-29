import { Link } from 'react-router-dom'

const Education = (props) => {
  return (
    <div className="container animate__animated animate__fadeIn">
      <h1 className="section-heading">Education</h1>
      <div className="heading-underline"></div>
      <section id="education-intro" className="pb-2" >
        <div id="text-section-1">
          <p>In the Western education system we have no real teachings on medicine. We are not taught about it in school, and we are never introduced to it at college. We do not even cover it in science classes that teach biology. We basically grow up with no real understanding of the causes of health and disease and we hand all our power over to the decisions of doctors. Such an important topic, which is literally life or death, should be taught in schools. </p>

          <p>The aim of this Education section is to fill in this missing information and enable you to take your power back and make your own decisions about your health. This information is the summary of the main findings from my study of medicine for the last 20 years, and is continually growing.</p>

          <p className="mt-1">PLEASE NOTE: If you were born in the Western world then this information, especially in the Advanced Section, will most likely be VERY different from what has been presented to you as “medicine” previously, and we will get into the reason why that is.</p>
        </div>
        {/* <img src="images/ayahuasca.jpg" alt="" /> */}
        {/* <img src="images/ayahuasca2.jpg" alt="" /> */}
        <div id="text-section-2" className="bg-primary py-1 px-2 my-1 br-10">
          <p>This information has been split up into 3 sections:</p>

          <div className="section-link mt-2">
            <div className="btn-container">
              <Link to="/education/beginner" className="btn btn-secondary mr-2">BEGINNER</Link>
            </div>
            <p>If you are totally new to traditional medicine and you’ve only ever taken prescription drugs from your doctor, then start here. You will find an introduction to traditional medicine and the use of flower essences.</p>
          </div>

          <div className="section-link mt-2">
            <div className="btn-container">
              <Link to="/education/intermediate" className="btn btn-secondary mr-2">INTERMEDIATE</Link>
            </div>
            <p>Here we will delve into the history of our current medical system and take a look at how we got here. We will also expand our knowledge of the human body, the role of emotions in health and take a deeper look at essences.</p>
          </div>

          <div className="section-link mt-2">
            <div className="btn-container">
              <Link to="/education/advanced" className="btn btn-secondary mr-2">ADVANCED</Link>
            </div>
            <p>This section is for those who have moved way beyond “body = machine”, and towards a body/mind/spirit paradigm. Here you will find in-depth information on my current understanding on health and disease, and ultimately life itself.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Education
