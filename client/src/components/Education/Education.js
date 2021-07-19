import { Link } from 'react-router-dom'

const Education = () => {
  return (
    <div className="container">
      <h1 className="section-heading">Education</h1>
      <section id="education-intro">
        <div id="text-section-1">
          {/* <p>Welcome to the education section of the website!</p> */}
          <p>Here you will find information on medicine, health and disease. This information is the summary of the main findings from my study of medicine for the last 20 years, and is continually growing.</p>

          <p className="mt-1">PLEASE NOTE: If you were born in the Western world then this information, especially in the Advanced Section, will most likely be VERY different from what has been presented to you as “medicine” previously, and we will get into the reason why that is.</p>
        </div>
        {/* <img src="images/ayahuasca.jpg" alt="" /> */}
        {/* <img src="images/ayahuasca2.jpg" alt="" /> */}
        <div id="text-section-2" className="bg-primary py-1 px-2 my-1 br-10">
          <p>This information has been split up into 2 sections:</p>

          <div className="section-link mt-2">
            <Link to="/education/beginner" className="btn btn-secondary mr-1">BEGINNER</Link>
            <p>If you are totally new to traditional medicine and you’ve only ever taken prescription drugs from your doctor, then start here.</p>
          </div>

          <div className="section-link mt-2">
            <Link to="/education/advanced" className="btn btn-secondary mr-1">ADVANCED</Link>
            <p>This section is for those who have been previously using traditional medicine and understand the body/mind/spirit paradigm and have moved beyond “body = machine”. Here you will find in-depth information on my understanding on health and disease, and ultimately life itself.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Education
