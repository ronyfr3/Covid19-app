import React from "react";
import ReactPlayers from '../VideoEmbeded/ReactPlayer'
import './Article.css'

const Articles = () => {
  return (
    <div className='article'>
      <h3 className='articleheading'>Coronavirus explained: What you need to know</h3>
      {/* video embeded */}
      <ReactPlayers/>
      <h3 className='articleheading'>What is a coronavirus?</h3>
      <p>
        Coronaviruses are a large group of viruses that are common among
        animals. In rare cases, they are what scientists call zoonotic, meaning
        they can be transmitted from animals to humans, according to the US
        Centers for Disease Control and Prevention.
      </p>
      <h3 className='articleheading'>Coronavirus symptoms</h3>
      <p>
        The viruses can make people sick, usually with a mild to moderate upper
        respiratory tract illness, similar to a common cold. Coronavirus
        symptoms include a runny nose, cough, sore throat, possibly a headache
        and maybe a fever, which can last for a couple of days. For those with a
        weakened immune system, the elderly and the very young, there's a chance
        the virus could cause a lower, and much more serious, respiratory tract
        illness like a pneumonia or bronchitis. There are a handful of human
        coronaviruses that are known to be deadly. Middle East respiratory
        syndrome, also known as the MERS virus, was first reported in the Middle
        East in 2012 and also causes respiratory problems, but those symptoms
        are much more severe. Three to four out of every 10 patients infected
        with MERS died, according to the CDC. Severe acute respiratory syndrome,
        also known as SARS, is the other coronavirus that can cause more severe
        symptoms. First identified in the Guangdong province in southern China,
        according to the WHO, it causes respiratory problems but can also cause
        diarrhea, fatigue, shortness of breath, respiratory distress and kidney
        failure. Depending on the patient's age, the death rate with SARS ranged
        from 0-50% of the cases, with older people being the most vulnerable.
        The Wuhan coronavirus is currently thought to be more mild than SARS and
        MERS and takes longer to develop symptoms. Patients to date have
        typically experienced a mild cough for a week followed by shortness of
        breath, causing them to visit the hospital, explains Peter Horby,
        professor of emerging infectious diseases and global health at the
        University of Oxford. So far, around 15% to 20% of cases have become
        severe, requiring, for example, ventilation in the hospital.
      </p>
    </div>
  );
};

export default Articles;
