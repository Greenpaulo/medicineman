import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import TopNav from "../TopNav/TopNav"
import VineUnderline from '../VineUnderline/VineUnderline'
import { createEducationSectionsObject } from "../../helpers/helpers"

const Intermediate = (props) => {
  return (
    <div className="container animate__animated animate__fadeIn">
      <Breadcrumbs props={props} crumbs={props.crumbs} />
      <TopNav heading="Intermediate" sections={createEducationSectionsObject(7, "intermediate")}/>
      <div className="heading-underline"></div>
      <section id="intermediate-education" className="my-2">
        <section id="intermediate-section-contents" className="pb-2 animate__animated animate__fadeIn">
          <div className="contents">
            <h3>Section 1 – How Did We Get Our Current Healthcare Model?</h3>
            <h3>Section 2 - Why Modern "Medicine" is Not Medicine</h3>
            <h3>Section 3 – A Change in Thinking</h3>
            <h3>Section 4 – Human Multidimensional Anatomy</h3>
            <h3>Section 5 – The Chakras</h3>
            <h3>Section 6 – The Role of Emotions in Health</h3>
            <h3>Section 7 – Widening Our Perspective On Essences</h3>
          </div>
          <VineUnderline />
        </section>

        <section id="intermediate-section-1" className="animate__animated animate__fadeIn">
          <div className="my-2">
            <h3>HOW DID WE GET TO OUR CURRENT HEALTHCARE MODEL?</h3>

            <p>Human nature is to trust. The willingness to trust others is built into our DNA. Working together has always been key to the survival of our species. Having faith in one another is in the best interest of both the individual and the collective. </p>

            <p>As a child we trust our parents, we trust our teachers, we trust authority. We quickly learn then when it comes to medicine then our doctor is the person to trust. At a young age we learn to give our power of looking after our own health away to authority. Throughout our entire lives most people never question whether the doctor is right. Whether the doctor actually understands medicine, and how the doctor came across this “knowledge”. We blindly trust the doctor and our current healthcare model.</p>

            <p>However, the truth is that pretty much all of what the doctor learned about medicine is wrong. The doctor is just another human that went through the “education system” and then chose to go to “medical school”, and the majority blindly trusted what they were taught <i>without question</i>. Their understanding of medicine is not experiential, it’s a learned system based on the teaching of others. To begin to understand how we got our current healthcare model, we need to understand who decides what model is taught.</p>

            <p>A massive change in Western healthcare education came after the “Flexner Report” in 1910. This was the beginning of the end for traditional medicine and the start of a massive takeover by John D. Rockefeller and the oil industry.</p>

            <p>This is excerpt of an article written by Rev. Dennis Shipman<sup>1</sup> :</p>

            <div id="flexner-article" className="px-2 py-2 bg-secondary br-10 mb-3">
              <h4 className="mb-2">The Flexner Report of 1910 – The Rockefeller-Carnegie Big Pharma Scam</h4>
              
              <p>John Davidson Rockefeller (1839-1937) was an American oil industry business magnate, industrialist, and philanthropist. His net worth is estimated at USD $409 Billion in 2018 dollars, adjusted for inflation. He is widely considered the wealthiest American of all time, and the richest person in modern history.</p>
              
              <p>In the 1870’s, John D Rockefeller became friends with Andrew Carnegie (1835-1919), a Scottish-American industrialist, business magnate, and philanthropist. Carnegie was a steel industry tycoon in the late 19th century – and became one of the richest people in America and the world. His net worth is estimated at USD $372 Billion in 2014 dollars, adjusted for inflation.</p>

            <img src="/images/apothecary.jpg" alt="1900's Apothecary" />

              <p>In the late 1800’s, early 1900’s, there existed different kinds of natural medicine schools: homeopathic, osteopathy, naturopathic, eclectic herbal medicine schools, diet, midwives, steam baths, and so forth. It was all there, both allopathic and naturopathic medicine, co-existing together. There was not just one way. Rockefeller and Carnegie changed all that. They were interested in establishing only one way. They knew they could patent the drugs, but they couldn’t patent natural medicine or any source coming from nature. To achieve their goal, they knew they had to eliminate the competition: natural medicine (homeopathy, herbal therapies, naturopathy, etc.).They captured the medical education system and created a monopoly by eliminating all the competition that threatened their brand of medical education which was to teach patented pharmaceutical drugs as the only way to cure illness. The Flexner Report of 1910 was a setup. Abraham Flexner were hired and paid by Rockefeller and Carnegie (through the AMA) to publish a report to denounce and eliminate the competition. And, it worked.</p>
              
              <p>Abraham Flexner (1866-1959) was not a physician or scientist or medical educator. He was a former school teacher, expert on educational practices, had specialized training in psychology, held a bachelor of arts degree, and was founder and operator of a for-profit college-prep school in Louisville, Kentucky. Flexner published a critical assessment of the state of the American educational system in 1908 titled “The American College: A Criticism.” His work attracted the attention of Henry Pritchett, president of the Carnegie Foundation, and a staunch advocate of medical school reform. Flexner’s book consistently cited Pritchett in discussions of views on educational reform, and soon thereafter, Flexner joined the research staff at the Carnegie Foundation in 1908. Flexner was selected by Pritchett for his scholarly reputation, evaluation skills, critical thinking, writing ability and his dislike for traditional education.</p>

            <img src="/images/flexner-report.png" id="flexner" alt="Front cover of the flexner report" />


              <p>The American Medical Association (AMA) was founded in 1847. In 1910, with financial support from Rockefeller and Carnegie, the AMA funded the Flexner Report which evaluated the various medical colleges. The Flexner Report was a book-length study entitled "Medical education in the United States and Canada", written by Abraham Flexner, published and given to the U.S. Congress in 1910 under the endorsement and financial support of the Carnegie Foundation. Congress acted on the report's conclusions and made them law. The report was slanted in favor of the outcome that Rockefeller and Carnegie envisioned. It stated that most medical schools were not teaching sound medicine, which in the eyes of Rockefeller and Carnegie meant that the natural health colleges were not pushing enough chemical drugs manufactured by Carnegie and Rockefeller. The AMA made it their self-appointed job to target and shut down the larger respected homeopathic colleges that did not comply with the Flexner Report. Carnegie and Rockefeller began to immediately shower hundreds of millions of dollars through their tax-exempt foundations on these medical schools that were teaching drug-intensive medicine.</p>

              <p>To ensure the medical schools swung completely in the direction of teaching and pushing pharmaceutical drugs, the donors (Rockefeller and Carnegie) made it a condition to appoint one of their staff to the school’s board of directors in order for the school to receive the grants and donations. Rockefeller and Carnegie justified this by saying that they wanted to make sure the school was spending their money in the right way. If the school wanted the money, it would comply with the request. So Rockefeller and Carnegie began to load up the schools board of directors with their staff members who were on the payroll of the donors. In return for the grants and donations, Rockefeller and Carnegie required the schools to continue teaching course material that was exclusively pharmaceutical drug-oriented, with no emphasis on natural medicine. Once that was in place, the pendulum swung in favor of the Rockefeller-Carnegie Big Pharma Scam, and it has remained that way ever since.</p>

              <p>By 1925, over 10,000 herbalists were out of business. By 1940, over 1,500 chiropractors had been prosecuted for practicing "quackery". The 22 homeopathic medical schools that flourished in the 1900’s dwindled down to just two by 1923. By 1950, all the schools teaching homeopathy were closed. If a physician did not graduate and receive an M.D. degree from a “Flexner approved” medical school, he or she could not find a job anywhere. This is why today, medical doctors lean heavily towards and favor synthetic drug therapy, and know little about the natural healing properties of nutrition and natural healing cures found in nature.</p>

              <img src="/images/prescription-drugs.jpg" id="prescription-drugs" alt="Prescription drugs" />

              <p>As a result of the Flexner Report, medical research got the green light onto the never-ending treadmill of searching for newer and so-called better drugs to treat illness. Although its toxicity is deadly, and in some cases patients die, chemotherapy became the new treatment for cancer patients in the 1940’s.</p>

              <p>The entire medical field has been skewed in the direction of pharmaceutical drugs. These drugs can be patented and produced at great profits for the big pharma capitalistic bigwigs wearing horse blinders who have no regard for any healing properties that nature can provide. Yet, there is a growing awareness among many allopathic doctors that believe the promise of healing and cures are found in nature’s herbs and plants and trees and seeds. And, probably it was meant to be that way. Today, there is a robust resurgence and an ever-growing industry of natural medicine remedies and therapies throughout the U.S.</p>

              <p>When all is said and done, after all the analysis has been scrutinized and after all the history has been revealed, it’s difficult not to come away with the realization that the medical profession is really like a house of prostitution for the pharmaceutical industry. And, most doctors have no idea that this is the case because they don’t understand the perverted history of Big Pharma.</p>
            </div>

            <p>So our current medical model that is taught in all western medical schools was not the outcome of thousands of years of study into the human body and medicine. It was not the teaching of our ancestors passed down by medicine men from generation to generation. It was not even a collaboration of all the doctors of the time. It was the outcome of a book written by one man, Abraham Flexner, who was not even medically trained, funded by oil and steel tycoons.</p>

            <p>We can clearly see how it was a calculated takeover of the healthcare system by John D. Rockefeller and Andrew Carnagie, to create a new system based on the prescribing of patentable petrochemical drugs, and the creation of a pharmaceutical monopoly in order to accrue huge wealth and power to the detriment of the health of humanity.</p>

            <p>It is this model of “health” that all our Western doctors are trained in.</p>

          </div>
        </section>

        <section id="intermediate-section-2" className="animate__animated animate__fadeIn">
          <div className="bg-primary py-2 px-2 br-10 mb-2">
            <h3>WHY MODERN "MEDICINE" IS NOT MEDICINE</h3>

            <p>The healthcare model that came out of the Flexner Report was not a healing model. It was never designed to be. It doesn’t make “business” sense to heal customers. What Rockefeller and Carnagie wanted were lifelong customers so they built a medical model that perpetuated fear and only ever managed symptoms without ever getting to the root of the dis-ease. They knew they couldn’t patent nature, so they demonised all natural remedies, replaced them with petrochemical drugs, and created medical schools solely to train doctors to match these new drugs with symptoms. The medicine men, the old herbalists, were labelled “Quacks”. The result of this new system was patients who would never heal. They would only ever be “managing symptoms” with petrochemical drugs, and be kept in a chronic state of dis-ease for years. The average 65yr old in the US, is now on 6 different prescription drugs. Exactly what Rockefeller and Carnagie had envisioned. (We will look deeper into the intent behind this medical takeover and the suppression of health in the Advanced Section.)</p>

            <p></p>
          </div>
        </section>

        <section id="intermediate-section-3" className="animate__animated animate__fadeIn">
          <div  className="bg-primary py-2 px-2 br-10 mb-2">
            <h3>A CHANGE IN THINKING</h3>

            <p>Despite this current monopolisation of our healthcare system and scientific worldview, there are many scientists who are coming back to the knowledge of our ancestors, that the universe is not just material.</p>

            <p>In recent years the population of the western world are now beginning to see that science, especially in the area of quantum physics, is coming to the same view of the world as shamanic healers in traditional societies - that everything in the universe is energy. The shamanic view, which is anything up to 400,000 years old, is that matter and energy are one and everything is connected through the energetic matrix, the great web of life.<sup>2</sup> The Navajo people of North America believe that “we and the land are one...the same substance, the same being, and cannot be separated”.  They apply this to all living things, and further this by saying “the earth is part of the universe, so, you see, all things in the universe are linked together for all time.”<sup>3</sup></p>

            <p>The famous demonstration of this concept was made by Albert Einstein with his equation E=mc<sup>2</sup>, which shows that energy and matter are dual expressions of the same universal substance.<sup>2</sup>  This universal substance being a primal energy or vibration.  If the entire universe and everything in it is made of energy then the human body itself must consist entirely of energy, vibrating at different speeds or frequencies.  Far from being just a physical body the human body is actually made up of a network of complex energy fields that interconnect with the cellular/physical system.  Vibrational medicine can be thought of as attempting to heal the human body by manipulating the basic vibrational level of substance.<sup>4</sup>
            </p>

            <p>In the latter half of the 20th century scientific thinking seemed to enter the beginning of a paradigm shift. A paradigm shift is defined as a change in the basic assumptions within the current ruling theory of science.<sup>5</sup>  Michael Talbot in his book ‘The Holographic Universe’ describes a new way of viewing the universe which has emerged from scientific research. This new evidence comes from experiments performed by physicists such as David Bohm, at The University of London, Alain Aspect, at the Institute of Theoretical and Applied Optics, and also neuroscientist Karl Pribram at Stanford University.<sup>6</sup></p>

            <p>Through observation of subatomic particles these physicists saw that some of the particles seemed to be communicating instantaneously and no matter the distance between the particles, their movements would be synchronised.  The particles seemed to be communicating to each other faster than the speed of light over seemingly immense distances to each other.  However according to Einstein the speed of light is a constant which cannot be superseded.  Eventually they came to the conclusion that the two particles were not communicating at all but were actually the same particle.<sup>6</sup></p>

            <p>From findings such as these, Bohm and Pribram came up with a new model of the universe as a giant floating hologram largely formed by our own consciousness and our lives as a projection within this hologram.<sup>6</sup>  Gerber (2001) points out that the property of a hologram is that every piece contains the whole, and takes this point further by applying this to the physical body, where we can see that every cell should contain the information to replicate the whole body – and it does in the form of DNA.  This backs up the holographic view of the universe and provides us with a new scientific model to understand the energetic structure of the universe as well as the multidimensional nature of human beings.<sup>4</sup></p>

          </div>
        </section>

        <section id="intermediate-section-4" className="animate__animated animate__fadeIn">
          <div className="bg-secondary py-2 px-2 br-10">
            <h3>HUMAN MULTIDIMENSIONAL ANATOMY</h3>

            <img src="/images/human_energy_body.gif" alt="The Human Energy Body" />

            <p>Traditional societies perceive a more direct relationship between energy and the physical body than is the case in western societies.<sup>7</sup>  A study of ninety seven different cultures across the world found that each had its own name for life energy fields.<sup>8</sup>  To take an example, the Q’ero people, the last remaining Inca, see that all human beings possess a luminous energy field that surrounds our physical body.  To the Q’ero shamans it appears as a torus shaped translucent, multi-coloured orb surrounding you to the width of your outstretched arms with a narrow axis or tunnel in the centre.  This mimics the Earth’s magnetic field with the North and South Pole representing the head and feet respectively.  Interestingly the Q’ero have also identified what appear to be streams of golden light that flow through the body just above the skin which are argued to correspond with the Chinese meridian system.<sup>9</sup></p>

            <p>Until recently this way of seeing the human body was dismissed by western society and still is in orthodox medicine, due to a seeming lack of scientific evidence proving the existence of what is now being referred to as “Human Multidimensional Anatomy”. However that scientific evidence has existed for over sixty years but is yet to be acknowledged by western mainstream medical practice<sup>4</sup> (for reasons we shall get to in the Advanced section). </p>

            <p>Gerber bases this argument on his review of evidence provided by experimental work. Between the years of 1919-1958, Burr (1972) a professor of neuroanatomy, conducted several experiments into the electromagnetic potential of living plants and animals.  In a series of experiments studying the energy fields around salamanders he discovered that all salamanders possess an energy field roughly shaped like the adult salamander and in trying to find the origin of this field he found that it originated in the unfertilized egg.  After more studies on other plants and animals he concluded that all living things possess an electrodynamic field.  This field acts as a growth template which exists before the physical body and on which the physical body is formed, and is responsible for each organism’s development.  He named these “fields of life” or “L-fields”.<sup>10</sup></p>

            <img src="/images/kirlian_leaf.jpg" alt="Kirlian photograph of a leaf" />

            <p>Further research into these bioenergetic growth templates was conducted by Russian researchers in 1966 using an electrophotography technique developed by Semyon Kirlian. The researchers discovered an interesting phenomenon called the “Phantom Leaf Effect”.   In their experiment they photographed the energy field of a leaf using the electrographic process and then cut off the upper third of the leaf and destroyed it. They then took another photograph of the remaining leaf and discovered that the energy field of the cut leaf was still whole.  The amputated portion of the leaf still appears in the photograph even though it had been physically destroyed. <sup>4</sup></p>

            <p>Barbara Brennan is an ex-NASA scientist, who investigated human energy fields over a twenty year period. She argues that the work using Kirlian photography supports the arguments of Burr, that the energy field could not arise from the physical, rather the physical arises from the energetic.<sup>11</sup></p>

            <p>The growth template discovered by Dr Burr seems to be well known in metaphysical literature as the blueprint of the physical body and is named the “etheric body”.  The etheric body is said to be one of many energy bodies that make up the full human form and is the closest subtle body to the physical body.<sup>7</sup> It hugs the physical body like a second skin and it is the interface between the physical body and the rest of the subtle energy system. <sup>12</sup> The Inca shamans also experience this to be the blueprint for the anatomy of the physical body.<sup>9</sup></p>

            {/* <img src="/images/etheric_body.gif" alt="The Etheric Body" /> */}

            <p>Brennan has come to the conclusion, after twenty years of research, that everything that is created in the physical world must be first formed in the structural levels of the energy fields.  Therefore all physical disease in the human body must first exist as a disease or distortion of the energy fields surrounding and interpenetrating the physical form. Brennan continues to point out that if we wish to change the state of the human body or any organ within it, from an unhealthy state to a healthy one, then we must work with the underlying energies that are the foundation for our bodies.<sup>11</sup> </p>
          </div>
        </section>

        <section id="intermediate-section-5" className="animate__animated animate__fadeIn">
          <div className="py-2">
            <h3>THE CHAKRAS</h3>

            <img id="chakras_front" src="/images/chakras_front.jpg" alt="The Chakras" />

            <p>An example of a traditional belief system which has been investigated is the concept of chakras. The research and scientific discovery of the chakras is another finding that is starting to bring scientific thinking more in-line with the traditional world. Chakras are the major energy centres in the body located at the main branching of the nervous system.  They are said to resemble swirling vortices of energy, hence the name “chakra” comes from the Sanskrit word meaning “wheels”.<sup>13</sup> It is worth noting here, that even though the Hindu people are recognised as the discoverers of chakras, chakra systems are to be found in traditional societies in all corners of the globe, the Mayans, Cherokee and Inca being examples.<sup>7</sup></p>

            <p>The chakras are said to take in subtle energies of high frequency and translate it into a useable form within the human body, which occurs as nervous and glandular function.<sup>4</sup> Each of the seven major chakras is anatomically associated with a major endocrine gland and major nerve plexus.  Two chains of nerve bundles have been found on either side of the spine correlating to the location of chakras.<sup>14</sup></p>
              
            <p>Scientific research into the existence of these energy centres has been conducted by Dr Valerie Hunt, a professor at the University of California.  For the past twenty years Hunt has measured bioelectrical energy variations at various points of the human body, using an electromyograph (used for measuring the electrical output of muscles). From this research Hunt discovered that the physical body emanated regular, high frequency sinusoidal electrical oscillations in areas of skin corresponding to the positions of the chakras.  Muscle frequency is usually a maximum of 225 cycles per second (cps) but these emanations went up to 1600cps, higher than anything previously found radiating from the physical body.<sup>14</sup></p>

            <p>In another experiment Hunt collaborated with a well-known trained psychic observer, Rosalyn Bruyere. Bruyere was asked to observe changes in the subject’s subtle energetic field while at the same time the chakras were being monitored, electronically. Hunt found that Bruyere’s observations of colour change in the “aura” of the subjects correlated exactly with the readings from the electromyograph. The colours that Bruyere observed were matched by the recorded wave pattern associated with that colour.  During the experiments the immediate feedback from the electromyography was kept out of view of Bruyere at all times.<sup>14</sup></p>

            {/* <img src="/images/chakras_side.jpg" alt="The Chakras - side view" /> */}

          </div>
        </section>

        <section id="intermediate-section-6" className="animate__animated animate__fadeIn">
          <div className="bg-primary px-2 py-2 br-10">
            <h3>THE ROLE OF EMOTIONS IN HEALTH</h3>

            <p>The chakras have also been associated with the emotions. Emotions are actually energy-in-motion (e-motion).<sup>15</sup> Western medicine, especially Endocrinologists have already acknowledged that particular emotional patterns relate to specific types of glandular dysfunction such as thyroid dysfunction.  Gerber (2001) furthers this concept to say that that what western medicine has been missing is the fact that the major endocrine glands and their hormonal activity are actually dependent upon the energizing influence of their associated chakras.  He argues that emotional imbalances are actually due to abnormal patterns of energy flow (emotion as energy-in-motion) in the subtle bodies and chakras.<sup>4</sup></p>

            <p>Candace Pert Ph.D is a neuroscientist who has spent nearly forty years studying neuropeptides or what she calls the ‘molecules of emotion’. Pert’s research seems to provide the missing scientific evidence for the link between mind and body, and how our emotions are actually the number one factor in health or disease.  Pert is a mainstream neuroscientist who started her work in 1972 searching for the opiate receptor in the brain.  From this discovery she continued her research into neuropeptides and their receptors.  Peptides are small chains of amino acids, and this category includes all hormones and neurotransmitters.</p>

            <p>In the 1980’s neuropeptides were thought to be the chemicals secreted by the brain (only) that were known to mediate mood and behaviour e.g. endorphins, dopamine. Through her continued research in the then, new area of psychoneuroimmunology, Pert discovered that these emotion-affecting peptides or ‘information substances’ and their receptors were not only to be found in the brain but were actually found in cells all over the body including the immune system and the endocrine system.  These cells and their systems were actually shown to be in communication with each other by the release of neuropeptides and the receipt of them through their cell surface receptors.</p>

            <p>This had a major impact on how cutting-edge science viewed the role of emotions in the health of the organism.  For example, Pert discovered that on the surface of monocytes, a key cell in the immune system, were receptors for all the neuropeptides found in the brain e.g. endorphins, serotonin.  These ‘molecules of emotion’ appeared to be actually controlling the migration and routing of the monocytes and were therefore pivotal to the health of the human organism.  Pert argues that this finding demonstrated the scientific connection behind stress and a weakened immune system.</p>

            <p>In Pert’s view, the discovery of neuropeptides was a major breakthrough towards the understanding that the body and mind are one.  If the mind under the old scientific model is defined by brain-cell communication through neuropeptides and their receptors, then this can now be naturally extended to include the entire body.  Since neuropeptides and their receptors are in the body then science can now say that the mind is the body, or there exists one “body-mind”.  The ‘molecules of emotion’ literally run the physiology and communicate from one cell to another, integrating the systems.</p>

            <p>Pert believes that emotional expression is always linked to the flow of peptides in the body which seems to be the physical counterpart of the subtle energy-in-motion.  Pert says the emotions and peptides are in two way communication.  An example of emotions affecting peptides is the action of blushing - the thought and emotion comes first and then the peptides follow, causing the blood vessels in the face to expand.  The release of endorphins in the body causing pain relief and euphoria is an example of peptides affecting emotions.</p>

            <p>From this viewpoint, expression of all the emotions is a healthy way to live as it lets the subtle energy and its physical counterpart, the peptides, flow freely around the network of communication in the body, maintaining homeostasis.  It can be thus argued that it is the chronic suppression of emotions that energetically results in a disturbance of the flow of subtle energy, through the chakras, into the body.  The physical result is an insufficient flow of peptides and a disturbance of function at the cellular level, setting up a weakened condition of the organism that can lead to disease.<sup>14</sup><sup>16</sup></p>

            <p>Kissen and Eysenck (1962) carried out research into personality differences in male lung cancer patients.  The research looked into the connection between lung cancer, cigarette smoking and the repression of emotion.  They discovered that smokers who were unable to express emotion were five times as likely to develop cancer and that the greater the repression, the less amount of cigarette smoking required to be at the risk of cancer.<sup>17</sup></p>

            <p>Another similar study was carried out in the former Yugoslavian industrial town of Crvenka over a ten year period.  In this study Grossarth-Maticek et al. (1985) utilized what they called rationality and antiemotionality (R/A), a factor related to the suppression of aggression.  The researchers used a questionnaire of 109 questions.  It was found that in the group of smokers who answered the 11 questions relating to a high level of suppression of aggression in the affirmative, the level of cancer was 40 times higher.  Conversely, it was found that no smokers had any incidence of cancer unless they had R/A scores of 10 or 11.  The researchers suggested that smoking alone is not sufficient to cause cancer and suppression of emotions is an important factor in disease.<sup>18</sup></p>

            <p>Further research found that trauma and blockage of emotional information can be stored indefinitely at the cellular level.<sup>14</sup>  An example of this is the proposed link between early childhood emotional trauma and subsequent cancer.  Harris (2006) has compiled evidence which argues that trauma before the age of seven is an important factor in the aetiology of cancer.<sup>19</sup> Almost every other culture but ours recognises the role played by some kind of emotional energy release in healing.<sup>7</sup></p>
          </div>
        </section>

        <section id="intermediate-section-7" className="animate__animated animate__fadeIn">
          <div className="py-2 mt-2">
            <h3>WIDENING OUR PERSPECTVE ON ESSENCES</h3>

            <p>To work with the energy bodies discussed above we need to know how to recognise when they have become distorted. We can notice this by a change in our emotional and psychological behaviour and patterns.<sup>20</sup> Emotions are energy-in-motion and to work with these underlying energies we can use medicines that are vibrational/energetic in nature.<sup>15</sup> Flower essences are one such body of medicine. </p>

            <p>We have already discussed essences in the Beginner section, but now with our new found understanding of human multidimensional anatomy, we can begin to look deeper into essences.</p>

            <p>The following is fantastic article<sup>21</sup> by Peter Tadd, a clairvoyant that has worked as “quality control” for several flower essence producers. Using his psychic abilities to view human multidimensional anatomy and understand how essences work at a deeper level of awareness. We can learn a lot from contemplating his perspective:</p>

            <div id="peter-tadd-article" className="px-2 py-2 mt-2 bg-secondary br-10">
              <h4>Flowers - the Essence of Consciousness</h4>

              <p>During my first trip to visit the avatar Mother Meera, three years ago, I was sequestered by an old friend, Don Dennis, in a very tidy German B&B. Don, the director of the International Flower Essence Repertoire (IFER), presented me with a number of bottles of flower essences to analyse. Flower essences are not like essential oils; they are 'merely' energetic patterns of flowers held in water and alcohol. I instantly discovered that I could align myself to the vibrational frequencies of flower essences made by various people from around the world. Like many individuals who choose alternative medicine as a primary protocol, my wife, family and I had used the Bach flower remedies for years, but this was the first time that I had used my clairvoyant abilities to 'read' an essence directly. I and my 'third eye' have become a 'quality control department', analysing essence line consistency and assessing new candidate flower essence lines.</p>

              <p>My profession as a healer and therapist centres around my clairvoyant skills. I can see the aura and chakra system of humans, animals, plants, and even standing stones. This innate ability has been refined from childhood over the years. It also applies to my experiences in nature. On the subtle or etheric levels, I see beings in the landscape, in trees and in the smallest flowers. Without getting into a complex description of nature's hierarchy, one can simply imagine that we are surrounded by the constant presence of etheric intelligences. The more natural and undisturbed the spot, the 'higher the energy', the greater the number and the more complex the orchestration of these luminous beings. Some of the most powerful places are in England, which reflects a culture in love with plants and the land. Yet most of us are veiled from this perception due to our overly rational minds, which are occupied with the limits of the world of physical sense. The fact that invisible beings cohabit with us is no less real than the fact that we are constantly being bombarded by images of and information in invisible wavelengths from television, radio and microwave frequencies that we do not perceive directly. The etheric realm can be contacted by our peripheral vision and our own etheric bodies.</p>

              <p>Sensitive people have expanded etheric fields. They unintentionally receive information from their environment. The experience of nature reaching out to us is a central theme in the lives of many of the flower essence makers. Ian White, developer of the Australian Bush Flower Essences, for example, while on a walk was stopped dead in his tracks two years ago by a plant of Sydney Rose, which demanded that an essence be made of it immediately. Sandra Epstein, of the Araretama Rainforest Essences of Brazil was informed by a type of lichen, which produced an essence called Moara; Tanmaya of the Himalayan Flower Enhancers had never heard of the Bach remedies, and thought he had 'lost it' while trekking in the Himalayas as flowers began to 'speak', instructing him how to make flower essences. What I have discovered in my teaching is that one very real way to learn how to 're-attune to the invisible intelligences in nature', who are constantly reaching out to us, is by taking flower essences. Turn off the cell phone, shut down the laptop and tune in to the real ethernet.</p>

              <h4>Ethernet.ess</h4>
              <p>In order to understand the way flower essences interact with us we have to define what is ether – what are its properties and functions. Ether is the bridge between the physical world and all other dimensions of the self – emotional, mental and spiritual. The etheric body appears as a self-luminous, holographic, three-dimensional, monochromatic, laser-like silhouette of light. Ether is harmonious, interactive and equi-polarized. It can appear as any colour of the light spectrum, but primarily appears as whitish yellow or whitish blue. Yellow colour tones indicate set patterns and are a means to access memories, and bluish colours reveal our new or future potentials. These etheric spatial forms are alive and intelligent. In humans, physical ether is found just under skin and highly concentrated in the iris of the eyes and the palms of the hands. It is the energetic structural basis of the acupuncture meridian system and the seven major embodied chakras, as well as numerous minor chakras.</p>

              <p>Physical ethers support cellular structure in every kingdom from the mineral, plant and animal to ourselves. For example, 'an etheric leaf', which can be captured by Kirlian photography, provides the blueprint for the actual leaf as it develops each spring. If you mark the branch of that leaf and save the leaf, you will discover that an identical one will appear each year. The physical etheric leaf holds its pattern. Ether substrates our physical reality. These etheric forces can be labelled evolutionary, meaning that they maintain the pattern of biological history. It is the etheric forces that make herbal remedies more effective than their pharmaceutically-synthesized counterparts. What remains of a high potency homeopathic remedy when all of the actual material has been diluted beyond any trace? Simply ether.</p>

              <p>Ether can be damaged by radiation, as found in cases of leukaemia in children living downstream from nuclear power plants, electro-magnetism again creating leukaemia in children living too close to electrical power lines, and industrial chemicals, drugs and tobacco smoke extract the vital prana from the etheric field. Ether is distorted or even destroyed by microwave ovens, thus wrecking the immune system of those who ingest microwaved food, and is also inexorably altered by genetic engineering. In my opinion, ether is the sole medium for epigenetic programming. (see New Scientist for an amazing article on the unseen forces in genome methylation.)[1]</p>

              <p>What I see is that there are two etheric grids, one on the surface of the earth and the other in the sky. The earth grid is more closely related to David Bohm's explicate order and the sky grid is the transformer of the deep implicate order. The earth's etheric energies flow through the 'ley lines' and sacred sites. This is mirrored in the blue sky by a grid, which is suspended at an altitude of 2.5 miles. This complementary dimension of etheric energies to the physical etheric is termed 'involutionary', as they are an absolute state of potential realities. These 'sky-like' forces infuse our time-space three-dimensional reality with 'spiritual intensity and expansiveness'. These ethers are activated when we meditate or pray. One function of the throat chakra is to integrate these two etheric grids. This is one reason why flower essences and homeopathics are placed just under the tongue, sublingually. The termination of the conceptual vessel meridian 'downloads' the information of the flower essence directly into our etheric bodies. Blue is a colour that can appear to the mind's eye and indicates an 'up-link' to the higher self. Swami Muktanada often wrote about the blue pearl.</p>

              <p>Some flower essences are 'designed' to connect to the higher self through spiritual ethers to make contact to the transcendental chakras, which are a second and third set of sevens chakras stacked up over the head, looking very southeast Asian pagoda-like. One essence line, Dancing Light Orchid Essences, does just that by "bringing us back to our original blueprint", according to the developer Shabd-sangeet Kalsa. Shabd-sangeet Kalsa's silver diamond- like outer aura infuses her essences with a presence that augments the already transcendental frequencies of the orchid range. Orchids are considered to be at the pinnacle of plant evolution. The expansive silver of Shabd-sangeet Kalsa's aura or the golden radiance of Ian White's aura indicate a very powerful alignment with the devas. At IFER all of the 23 lines, a combined total of over 2,500 unique flower essences, maintain various devic attunements.</p>

              <h4>What a Difference a Deva Makes</h4>
              <p>The devic aspect of the flower essence is the key to a successful range of essences. The energetic imprint of a flower or plant is simple enough to make; anyone can do it. But to reach into the 'spiritual waters' to invite the devic realm requires an evolved human soul and devic guidance. Whereas yellow white physical ether correlates to the past and the spiritual blue ether to the future, devic ether (which is gold or silver or diamond colour) has no relationship to time whatsoever. Devic presence is all pervasive and overlighting. It is very much like the Taoist immortals, who have attained the wisdom of the ages. Yet for the devas to manifest into our bodies or into trees or in animals they have to work through physical and spiritual ethers. These ethers are utilized as carrier wave forms, which are properly aligned to the earth and to the sky. Carrier waves are any baseline directed forces that can transport a second set of wave frequencies. The devic manifests through these two primary etheric wave forms of the past and the potential. In doing so, the devas 'want us to see the bigger picture', which has to do with our own deeper spiritual identity and the essential involvement of that awareness in everyday life. In fact the devic resides in an interior aspect of the heart chakra. The Tibetan Buddhists refer to this as "the undefilable self".[2] Swami Sri Yukteswar, the mentor of Parmahansa Yogananda, termed it Devata.[3] Deva is the Sanskrit root of divine. Deva is divine presence.</p>

              <h4>The Quality Control Department</h4>

              <p>In my procedure in analysing flower essences, I hold a bottle and then look at its aura. This allows me to feel the developer's state of mind and at times the method of making. Then I take that dropper or pipette out. It is here that I make a deeper connection to the actual flower essence. What appear to my mind's eye are often very bright intense colours of blues, whites, pinks, golds and purples. In some instances there are actually miniaturized spirit beings even within the dropper itself or just surrounding it. Sometimes there are explosions of colour like a huge firework display, reduced to a cubic centimetre. Then the intelligence of this essence will inform me as to the use and the purpose of the essence. This is the procedure that I have created to analyse essences for some of the major developers in the world. While employed by Ian White of the Australian Bush Flower Essences range I discovered that one of his 62 essences, Yellow Cowslip Orchid did not contain his personal signature. Ian's essence line is very powerful due to a number of factors, which include his own connection to the devic realm as well as the pristine environment of Australia. When I received feedback from Ian, he mentioned that indeed this was the one essence that he did not personally create due to the fact that it was created by a group of 60 students on a workshop with him in Australia. He has since remade that mother tincture on his own.</p>

              <p>One of my discoveries in the German B&B was an essence that displayed musical tones. Each time I lifted the dropper out of the bottle there was not only light but sound. Don later informed me that indeed Lila Devi who created the Master Flower Essence line sings to the essences while they are forming. A year later whilst analysing the Dancing Light Flower Essence line I was immediately brought to a newer state of awareness, that of a direct relationship to the higher or transcendental chakras. Initially, I felt that these essences should only be used by those who seriously followed a spiritual path. And in fact they are marvellous for those who have developed strong intuitive or clairvoyant abilities and for those needing higher attunement or clearing.</p>

              <p>In each essence there are a number of influences which are recorded at the time of its preparation: the flower, the location, the time of day and of year, and the intention and state of mind of the developer. Even after an essence is made the developer remains mysteriously connected to his or her essences. Should their ability to commune with the devic realm become confused or weakened due to personal circumstances, this change in the developer affects the quality of all the essences they have made, no matter where their bottles are.</p>

              <p>The greater the devic presence, the more in-depth and profound the essence. There are some essences made from plants which themselves are devic beings. Unfortunately, like in all industries, there are those who seek to influence the market by trying to 'enhance' their product lines. Under this guise, essences are activated by pyramids or electronic machines or aligned to other cosmic sources of energy to give them a 'buzz'. This rarely works for long-term solutions. Do you like your espresso with two or four spoons of sugar?</p>

              <h4>The Delicate Intricacy of Being</h4>

              <p>Flower essences are made from flowers that are at their peak of bloom. (Occasionally essences are created when the plant is in bud.) The traditional manner to create what is called the mother essence was established by Dr Edward Bach. He floated flower petals in water under a full sun whose rays infused the water with the essence of that plant's flowers. This practice has been abandoned by some developers who pour water over the blossoms into a bowl. In this way the flowers remain on the plant, and the devas are said to remain happy. Both procedures work; the significant element is respect. The flower essence ranges that I have analysed vary greatly as to the strengths and effectiveness. Strength doesn't always mean effectiveness. We could say some flower essence lines are more masculine or 'yang' while others are more feminine and refined or 'yin'. In choosing essences for my clients I will sometimes create combinations of different lines with yin and yang or essences from both southern and northern hemispheres. What is obviously true is that flowers from different parts of the world and some species are very powerful. And when flowers are in bloom they are at the peak of the plant's life cycle. For orchids the experience of being in bloom is like an orgasm that goes on non-stop for as long as two months. (If you want to know more about orchids please read Orchid Fever by Eric Hansen.)[4]</p>

              <p>Without wanting to create a picture that is too complicated or convoluted, flower essence making simply requires a growing sensitivity. One needs to pay attention to the subtleties that provide a level of interaction from the developmental stages to its use. It is almost as if mother nature is having fun with us, demanding our full attention to the moment and to the delicate yet essential forces within nature. There are no formula approaches to this process. It is very difficult for the educated Westerner not to want to formulate an on-demand response to better ourselves and our health and personal lives. This rational approach often oversimplifies and even skeletonizes our relationship with life. All flower essences are Taoist by nature.</p>

              <h4>The Importance of Being Cheeky</h4>

              <p>As an example of the intricacy and uniqueness of the moment and attunement involved in this process I offer an example of making a flower essences with Don Dennis. One evening after a lecture Don introduced me to an orchid known as Phragmipedium Hanne Popow. He was excited because he had actually heard this flower 'speak' to him, requesting that an essence be made. He resisted this idea feeling that he was in the business of distributing essences and not making them. But it was Don's heartfelt connection with the plant that had given rise to the request. When I was shown the plant I got the clear impression it wanted the essence to be made that very evening. Making an essence at night, of course, goes against the standard procedure. I felt that the early morning rays of the summer sun through an eastern exposure would somehow be more than adequate. We proceeded by placing a glass bowl of water underneath the long spike full of buds and one opened flower. In the morning, at about 9.00 am, we discovered that a new bud had opened and this new blossom was now touching, as it were, cheek to cheek with the first flower. This gesture of opening and making contact became the central theme of this flower essence, which we named 'Unveiling Affection'. When taking this flower essence people feel the emotional aspect of the heart chakra opening, a sense of being nurtured and at home with oneself, and open to others at the same time – a great salve for those suffering from a history of unhappy intimate relationships and fearing only 'more of the same' and lost in a sense of personal unworthiness.</p>

              <h4>The Nature of Intelligence</h4>

              <p>Don and I poured water from the glass bowl over the two orchid blossoms. The etheric energy of these blooms, which appeared as an amber-coloured mist floating above the bowl, folded into the water. The water was then infused with this energetic presence. Water will hold this encoded template for a month or so. If cognac/brandy is added, the alcohol will preserve the pattern for many years. Water has an ability to absorb and be transformed by ether. The fact that water can hold healing vibrations was known in America in the early 19th century and utilized by a New Englander, Phineus Parkhurst Quimby, who transmitted spiritual healing into water, which he bottled and then posted to clients. In the 1980s The Mobius of Society in Santa Monica, California, ran a number of trials of an experiment using nine different healers. These unrelated individuals transmitted healing 'vibrations' into sealed bottles of water, which were then sent to a laboratory for spectrographic analysis. In this double-blind study, there was a consistency in the degree of change in the spatial relationship of the water molecules. The greater the healing force, the greater the 'space' in between the water molecules. This space is the etheric space, which is the very sense of expansiveness that one has after a good meditation. We 'feel' lighter and, indeed, the water in our bodies is.</p>

              <h4>Genies in a Bottle</h4>

              <p>Etheric and devic forces which have an enormous range of application are all contained in wee bottles, like miniaturized genies ready to serve our needs. Their very presence creates an effect. Here is an example. Since I have become more familiar with flower essences, they appear more and more often in the auras of my clients. Now that a few essence lines are in stock in a Swiss clinic in which I work, they are even more present. They make themselves known in a big silent way. Flower essences enter the body/mind, unlike homeopathic remedies. A homeopathic will calibrate one's etheric body to its frequency, whereas flower essences will accommodate to the individual needs by tailoring their interactions. The devic intelligence of the flower essence knows exactly what to do. If you pay attention you can feel just where the essence is travelling. This sensation lasts for 30-60 seconds. Here are some examples.</p>

              <h5>Radiant Strength; Dancing Light Flower Essences; by SSK Alaska</h5>

              <p>For 80% of my clients and students an essence will perform in the same way. For example, when taking Radiant Strength one feels a warmth in the centre of the chest. The essence will move directly into the heart chakra at the level of divine presence. One feels confident and centred in self. But if there is a severe blockage in the throat chakra, maintaining deep issues about personal self-esteem, it will focus there. Initially, I was surprised – shocked – by the degree of awareness or consciousness of the flower essences.</p>

              <h5>Chiton; Pacific Essences; by Sabina Pettitt, Canada</h5>

              <p>This essence is not from a flower but a sea creature and creates 'gentleness which serves to break up and to dissolve blockages and tension'. A quadriplegic sixteen-year-old immediately began to open her left hand, which was held in a tight fist. Her hand slowly opened over a five-minute period to be completely tension free. This treatment has had to be repeated many times and this hand is improving. This essence stays in the throat and expands the throat chakra to attune to the vastness of the causal field.</p>

              <h5>Fringed Violet Australian Bush Flower Essence; by Ian White</h5>

              <p>The best psychic protection around. There is an envelope of the aura, which is made of ether. This is normally underdeveloped, torn, flabby or hardly formed at all. Fringed Violet sends a devic shock wave to reconstruct this essential level of the aura. Great for kids with nightmares, or when very sensitive personality types get overwhelmed by high street shopping, or for those who are generally overly emotionally sensitive.</p>

              <h5>Golden Radiance; IFER; by Don Dennis and Heather Decam, England</h5>

              <p>What a honey of an orchid essence. Everyone feels the mind's eye clear and a gentleness pass over the sides of the head. I see an amber coloured etheric ring appear on the forehead of everyone who has tried it. A wonderful way to clear the mind to receive higher instruction.</p>

              <h4>Conclusion</h4>

              <p>My work at IFER continues with Don in ongoing research into flower essence combinations and his passion for orchids and their etheric healing qualities. There are many avenues for exploration and research of these essences. I am very grateful for all the flower essence developers and practitioners whose energy and talents have created an opportunity for all of us to experience and realign to the purity of nature.</p>

              <h4>References</h4>

              <ul>
                <li>1. Vines Gail. Hidden Inheritance. New Scientist. 28 Nov 1998.</li>
                <li>2. Rinpoche Sogyal. The Tibetan Book of Living and Dying. Rider. 1994.</li>
                <li>3. Sri Yukteswar Swami. The Holy Science. Self Realization Fellowship. 1949.</li>
                <li>4. Hansen Eric. Orchid Fever. Methuen. 2000.</li>
              </ul>

            </div>
          </div>
        </section>

        <section id="intermediate-section-references" className="animate__animated animate__fadeIn">
          <ul className="pt-2">
            <li>1. http://www.blissfulvisions.com/articles/Rockefeller-Carnegie-Big-Pharma-Scam.html</li>
            <li>2. Heaven, R. (2001) The Journey To You  London: Bantam Books.</li>
            <li>3. Langley, C. (2008) Meeting the Medicine Men  Boston: Nicolas Brealey Publishing</li>
            <li>4. Gerber, R. (2001) Vibrational Medicine (3rd edition) Vermont: Bear & Company</li>
            <li>5. Kuhn, T.S. (1996) The Structure of Scientific Revolutions (3rd edition) Chicago: University of Chicago Press.</li>
            <li>6. Talbot, M. (1996) The Holographic Universe  London: Harper Collins</li>
            <li>7. Dale, C. (2009) The Subtle Body: An Encyclopedia of Your Energetic Anatomy  Boulder, CO: Sounds True</li>
            <li>8. White, J.W. and S. Krippner (1977) Future Science: Life Energies and the Physics of Paranormal Phenomena  New York: Anchor Books</li>
            <li>9. Villoldo, A. (2000) Shaman, Healer, Sage  London: Bantam Books.</li>
            <li>10. Burr, H.S. (1972) Blueprint for Immortality: The Electric Patterns of Life  London: Spearman</li>
            <li>11. Brennan, B.A. (1993) Light Emerging: The Journey of Personal Healing  London: Bantam</li>
            <li>12. Johnson, S. (2000) The Essence of Healing (2nd edition)  Alaska: Alaskan Flower Essence Project</li>
            <li>13. Arewa, C.S. (2001) Way of The Chakras  London: Thorsons</li>
            <li>14. Pert, C.B. (1999) Molecules of Emotion  London: Pocket Books</li>
            <li>14. Hunt, V.V. (1996) Infinite Mind: Science of the Human Vibrations of Consciousness  Malibu, CA: Malibu Publishing</li>
            <li>15. Sky, M. (2002) The Power of Emotion: Using Your Emotional Energy To Transform Your Life  Vermont: Bear & Company  </li>
            <li>16. Brennan, B.A. (1988) Hands of Light  London: Bantam</li>
            <li>17. Kissen, D.M. and H.J. Eysenck (1962) ‘Personality in male lung cancer patients’, Journal of Psychosomatic Research, 6(2), pp. 123-127</li>
            <li>18. Grossarth-Maticek, R., J. Bastiaans and D. T. Kanazir (1985) ‘Psychosocial factors as strong predictors of mortality from cancer, ischaemic heart disease and stroke: The Yugoslav prospective study’, Journal of Psychosomatic Research, 29(2), pp. 167-176</li>
            <li>19. Harris, G.A. (2006) ‘Early childhood emotional trauma: an important factor in the aetiology of cancer and other diseases’, European Journal of Clinical Hypnosis, 7(2)</li>
            <li>20. White, I. (2009) Happy Healthy Kids: From Conception to Age 7 With Australian Bush Flower Essences  New South Wales: Allen & Unwin</li>
            <li>21. http://www.positivehealth.com/article/bach/flowers-the-essence-of-consciousness</li>
          </ul>
        </section>
      </section>
    </div>
  )
}

export default Intermediate
