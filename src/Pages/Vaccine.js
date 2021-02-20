import React, { useState } from "react";
import { FiMail } from "react-icons/fi";
import "./Vaccine.css";

const Vaccine = () => {
  const [mail, setMail] = useState("")

  const handleSubmitmail = (e) => {
    // e.preventDefault();
    localStorage.setItem("updatecoronabymail",JSON.stringify(mail));
  };
  const handleChangemail = (e) => {
    setMail(e.target.value)
  };
  return (
    <div className="vaccine">
      <h3>Coronavirus (COVID-19) vaccine</h3>
      <p>
        The coronavirus (COVID-19) vaccine is safe and effective. It gives you
        the best protection against coronavirus.
      </p>
      <h3>Who can get the COVID-19 vaccine</h3>
      <p>
        The NHS is currently offering the COVID-19 vaccine to people most at
        risk from coronavirus.
      </p>
      <p>
        In England, the vaccine is being offered in some hospitals and
        pharmacies, at local vaccination centres run by GPs and at larger
        vaccination centres. More centres are opening all the time.
      </p>
      <p>It's being given to:</p>
      <ul>
        <li>people aged 65 and over</li>
        <li>
          people who are at high risk from coronavirus (clinically extremely
          vulnerable)
        </li>
        <li>
          people who are at moderate risk from coronavirus (clinically
          vulnerable)
        </li>
        <li>people who live or work in care homes</li>
        <li>health and social care workers</li>
      </ul>
      <p>
        The order in which people will be offered the vaccine is based on advice
        from the Joint Committee on Vaccination and Immunisation (JCVI).
      </p>
      <h3>How safe is the COVID-19 vaccine?</h3>
      <p>
        The vaccines approved for use in the UK have met strict standards of
        safety, quality and effectiveness set out by the independent Medicines
        and Healthcare products Regulatory Agency (MHRA).
      </p>
      <p>
        Any coronavirus vaccine that is approved must go through all the
        clinical trials and safety checks all other licensed medicines go
        through. The MHRA follows international standards of safety.
      </p>
      <p>
        Other vaccines are being developed. They will only be available on the
        NHS once they have been thoroughly tested to make sure they are safe and
        effective.
      </p>
      <p>
        So far, millions of people have been given a COVID-19 vaccine and
        reports of serious side effects, such as allergic reactions, have been
        very rare. No long-term complications have been reported.
      </p>
      <h3>What are the possible side effects of a COVID-19 vaccine?</h3>
      <p>
        A COVID-19 vaccine can cause mild side effects after the first or second
        dose, including:
      </p>
      <ul>
        <li>Pain, redness or swelling where the shot was given</li>
        <li>Fever</li>
        <li>Fatigue</li>
        <li>Headache</li>
        <li>Muscle pain</li>
        <li>Chills</li>
        <li>Joint pain</li>
        <li>Nausea and vomiting</li>
      </ul>

      <p>
        You'll likely be monitored for 15 minutes after getting a COVID-19
        vaccine to see if you have an immediate reaction. Most side effects
        happen within the first three days after vaccination and typically last
        only one to two days.
      </p>
      <div className="forms-mail">
        <form onSubmit={handleSubmitmail}>
          <span>
            <FiMail />
          </span>
          <article className="getmail">Get Email Updates</article>
          <hr />
          <article className="receiveemail">
            To receive email updates,enter your email address:
          </article>
          <input
            type="email"
            placeholder="Email Address"
            className="upemail"
            onChange={handleChangemail}
          />
          {/* <article className="whatsthis" onClick={alert('We Confirm You Daily Covid19 Updates Via Email')}>Whats this?</article> */}
          <button className="emailbtn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Vaccine;
