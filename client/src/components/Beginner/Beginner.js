import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import TopNav from "../TopNav/TopNav"
import VineUnderline from '../VineUnderline/VineUnderline'
import { createEducationSectionsObject } from "../../helpers/helpers"


const Beginner = (props) => {
  return (
    <div className="container animate__animated animate__fadeIn">
      <Breadcrumbs props={props} crumbs={props.crumbs} />
      <TopNav heading="Beginner" sections={createEducationSectionsObject(4, "beginner")}/>
      <div className="heading-underline"></div>
      <section id="beginner-education" className="mt-2 pb-2">
        <section id="beginner-section-contents" className="animate__animated animate__fadeIn">
          <div className="contents">
            <h3>Section 1 – What is Traditional Medicine?</h3>
            <h3>Section 2 – What Are Flower Essences?</h3>
            <h3>Section 3 – How Do They Work?</h3>
            <h3>Section 4 - What Are Gem / Environmental / Animal / Sea Essences?</h3>
          </div>
          <VineUnderline />
        </section>

        <section id="beginner-section-1" className="animate__animated animate__fadeIn">
          <div className="my-2 py-2">
            <h3 className="mb-1">WHAT IS TRADITIONAL MEDICINE?</h3>

            <img src="/images/herbal_shop.jpg" alt="Old herbal shop" />

            <p>Our current medical system in the West, has only been around for the past 100 years. Before this time of pharmaceutical drugs and germ theory, doctors would use medicinal herbs to treat their patients, and this usage of plant medicine has a history of at least 5000 years.</p>

            <p>There is a lot more to healing than is currently practiced in our healthcare system. At this present time our healthcare system in the West has excellent emergency and critical care but falls short with the treatment of chronic conditions. This inadequacy stems from a very narrow understanding of the human body and the nature of reality itself. Orthodox medicine views the body as a machine. Symptoms are “managed” and old worn our parts are replaced with no thought given to the actual cause or root of the disease.</p>

            <p>Science dictates healthcare, and the scientific understanding of the world filters into our healthcare system. Anything that can’t be measured of physically seen is cast aside because of a “lack of scientific evidence”. Therefore we have a healthcare system that is not holistic and doesn’t understand the true impact of the mind and spirit on health and disease.</p> 

            <p>Pharmaceutical companies also a have huge impact on our current healthcare systems, so much so that they have infiltrated the education and practice of doctors, which has become merely an exercise in matching the symptoms to the drug, with no thought or concern for the individuality of the patient, or any mental or emotional stress they maybe facing.</p>

            <p>Real healing goes way beyond the physical. Instead of using synthetic made man chemical drugs, we can instead choose to use the same medicine as our ancestors, the medicines of nature. Plant medicines work in an entirely different way than orthodox medicines, they are alive and contain intelligent life-force or spirit that teach us to heal our minds and bodies through direct realisation of how we have created our disease and how we can heal it.</p>
          </div>
        </section>

        <section id="beginner-section-2" className="animate__animated animate__fadeIn">
          <div className="bg-secondary py-2 px-2 br-10">
            <h3>WHAT ARE FLOWER ESSENCES?</h3> 
            <p>The use of flowers for healing dates back over three thousand years. According to ancient records the Egyptians collected the dew from flowers to treat emotional imbalances. The Australian aboriginals also have a long history of treating illness by floating flowers on water for some time and then drinking the water. The earliest written use of flower essences in Europe dates back to the twelfth century where Abbess Hildegard Von Bingen was also collecting the dew from flowers to treat patients.  She would instruct the nuns to lay muslin cloth over the flowers at night and in the morning the cloth would be rung out to collect the dew.  In the sixteenth century the famous Swiss physician, Paracelsus, was also treating his patients’ emotional and physical ailments with the dew from flowers.<sup>1</sup></p>

            <p>However during the eighteenth and nineteenth century a change in the medical paradigm to a more mechanistic view of the human body, backed by such thinkers as Isaac Newton and Charles Darwin, led to the fading away of the traditional knowledge of flower essences and other preparations.  In the western world, flower essences stayed in relative obscurity for a while until the 1930’s when a British physician, Dr Edward Bach, brought them back into use. Dr Bach worked as a bacteriologist at the Royal London Homeopathic Hospital, and it was there that he soon became interested more in the patients themselves than their diseases. Talking to patients at their bedside he realised that the real cause of their illnesses was emotional. The body was a mirror reflecting the thoughts in the mind. Bach came to the conclusion that it was the sufferer themselves, the person, who needed the treatment.</p>

            <p>Following his intuition, Dr Bach left London in 1930 to explore the English countryside in a hope to find plant medicines that could treat his patient’s emotional problems. This led to the discovery of the Bach Flower Remedies which are probably the most famous flower essences in the world.<sup>2</sup></p>
          </div>
        </section>

        <section id="beginner-section-3" className="animate__animated animate__fadeIn">

          <div className="py-2 mt-2">
            <h3>HOW DO THEY WORK?</h3>
            <p>Flowers are the most evolved part of the plant kingdom and carry positive, life affirming patterns of conscious energy.<sup>3</sup> A flower essence is a vibrational medicine that contains the high-frequency subtle energies of the plant it was made from and these energies are said to be able to act on the subtle-energy bodies of the human being. By acting on the human energy body, it is believed that the vibrational energies of the flowers can assist in realigning the emotional patterns of dysfunction.<sup>4</sup> Bach’s understanding was that by correcting these emotional factors, the patient would then be assisted in increasing their physical and mental vitality and therefore be aided in the resolution of their physical disease.<sup>5</sup> At a deeper level flower essences are an intelligent healing energy and a catalyst for evolution in human consciousness and that they help to identify mental and emotional qualities that need to be awakened or strengthened to stimulate spiritual growth.<sup>3</sup></p>

            <p>However as the physiological effects of flower essences on the energy system are difficult to measure with our current, popular, medical technology then the sceptics would say that there is little hard evidence for using flower essences to treat physical disease. Methods to measure vibrational medicine do exist however, in the form of radionics, Kirlian photography and electroacupunture but are not currently accepted in our medical paradigm.<sup>6</sup></p>

            <p>Since the death of Dr Bach in 1936 many flower essence producers around the world have continued his work and contributed to the re-introduction of flower essences into modern medicine.  One of the first to do this was the Flower Essence Society (FES) established by Richard Katz in 1979.  The FES are based in California and are a group of flower essence practitioners who introduced a new group of essences made from flowers indigenous to the USA.<sup>6</sup></p>

            <p>A few years later more producers appeared, preparing flower essences from the indigenous flowers in their countries.  In 1984 Steven Johnson set up the Alaskan Flower Essence Project and in 1986 the Australian Bush Flower Essences were founded.  These new essences expanded on the Bach essences and addressed issues surrounding sexuality, intimacy, creativity, communication and spirituality. Areas that were seemingly missing from the application of the Bach flower essences.  Because of the times, Ian White, the founder of the Australian Bush Flower Essences, suggests that today’s society and needs are very different than that of sixty years ago and these newer essences are more in line with the problems we face today.<sup>1</sup></p>

          </div>
        </section>

        <section id="beginner-section-4" className="animate__animated animate__fadeIn">

          <div className="bg-primary py-2 px-2 mt-1 br-10">
            <h3>WHAT ARE GEM / ENVIRONMENTAL / ANIMAL / SEA ESSENCES?</h3>
            <p>Everything in the universe is energy. Shamans have known this for a long time and now even science has caught up to this understanding in areas such as quantum physics. Energy and spirit are synonyms.

              .................................................................
            </p>
          </div>

          <div className="bg-tertiary py-2 px-2 mt-2 br-10">
            <p>The essences work in very powerful ways, but are very different than the expected outcome of someone who is used to pharmaceutical drugs. They alter your energetic system, your frequency, and in turn you attract situations in your life that enable you to overcome and heal the issue that you original took the medicine for. This may not be apparent when first starting to take essences, but after some time you begin to see the essences in action, and how the transformation works in your life. They are a brilliant tool for healing!</p>
          </div>
        </section>

        <section id="beginner-section-references" className="animate__animated animate__fadeIn">
          <ul className="pt-2">
            <li>1. White, I. (2009) Happy Healthy Kids: From Conception to Age 7 With Australian Bush Flower Essences  New South Wales: Allen & Unwin</li>
            <li>2. Weeks, N. (1973) The Medical Discoveries of Edward Bach Physician  Essex: C.W. Daniel </li>
            <li>3. Johnson, S. (2000) The Essence of Healing (2nd edition)  Alaska: Alaskan Flower Essence Project</li>
            <li>4. White, I. (1993) Australian Bush Flower Essences  Findhorn: Findhorn Press</li>
            <li>5. Bach, E. (1996) Heal Thyself: An Explanation of the Real Cause and Cure of Disease  Essex: C.W. Daniel</li>
            <li>6. Gerber, R. (2001) Vibrational Medicine (3rd edition) Vermont: Bear & Company</li>
          </ul>
        </section>
      </section>
    </div>
  )
}

export default Beginner
