import React from 'react'
import "./politiken.scss"
import "./images/linkedin.svg"

const Politiken = () => {

  var days = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
  var d = new Date();
  var dayName = days[d.getDay()];

  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Politiken-Logo.svg" alt="" />
        </div>
        <div className="weekday">
          <div className="dayname">
            {dayName}
          </div>
        </div>
      </div>
      <div className="cover-letter">
        <div className="top-content">
          <h1>Dedikeret og detaljeorienteret frontend-udvikler med gåpåmod og gennemslagskraft</h1>
          <p className="summary">Med en karriere der startede i Libanon, hvor jeg planlagde udviklingsprogrammer for FN, kommer jeg med en lidt anderledes indgangsvinkel til faget. Men jeg synes, det er min største styrke.  </p>
          <div className="image">
            <img src="https://lh3.googleusercontent.com/en4RvLXL0GbRTm6PKV_MQxxfS_Ioivyu1L7KbSr_iN65ii1ssLMVt5BjPgke80-F_JSsJh7fK7YhHg3P9XzyLZLHLrNn9KrwoMIoTg1arDRMyejHjL5_zX8XzO3FXVhywcBvS05G3g=w430-h315-p-k" />
          </div>
        </div>

        <div className="main-content">

          <div className="sidebar">
            <span className="location">KØBENHAVN</span>
            <span className="timestamp">16. MAR. 2021</span>
            <div className="name-title">
              <p className="name">TINA SKOV OLESEN</p>
              <p className="title">Frontend-udvikler</p>
            </div>
            <br />

          </div>
          <p className="brødtekst">
            Jeg er vild med Politiken.dk’s stilrene, men samtidig kreative, layout. Og det ville gøre mig stolt at bidrage til Danmarks bedst designede avis, som Jeres nye frontend-udvikler.
          <br />
            <br />
          Med mig som en del af Jeres udviklingsteam, får i ikke en gennemsnitlig frontend-udvikler. Til gengæld får i en omstillingsparat og lærenem medarbejder, med verdenserfaring og gåpåmod.
          <br />
            <br />
          Som udvikler er jeg detaljeorienteret og fremadsynet, og jeg er vant til at samarbejde og kommunikere med mennesker fra mange forskellige baggrunde.
          <br />
            <br />
          Jeg har taget et meget bevidst valg, om at skifte karriere. Af denne årsag, er jeg naturligt ambitiøs og ivrig efter at dygtiggøre mig indenfor mit nye felt. Og så elsker jeg at lære nyt og skabe ting fra bunden  – både professionelt og privat, og jeg trives når jeg bliver udfordret.
          <br />
            <br />
          Som person er jeg samvittighedsfuld, og jeg gør altid mit allerbedste. Jeg er venlig og positiv, og har altid været vellidt af mine kollegaer.
          <br />
            <br />
            Jeg ser frem til at høre fra Jer.
            <br />
            <br />
            Med venlig hilsen,
            <br />
            <br />
            Tina Skov Olesen
        </p>
        </div>
      </div>
    </div >
  )
}


export default Politiken;