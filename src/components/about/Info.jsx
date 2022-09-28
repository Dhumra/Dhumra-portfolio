import React from 'react'

const Info = () => {
  return (
    <div>
      <div className="about__info grid">

        <div className="about__box">
           <i class="uil uil-brackets-curly about__icon"></i>
           <h3 className="about__title">12+</h3>
           <span className="about__subtitle">Websites made</span>
        </div>

        <div className="about__box">
           <i class="uil uil-java-script about__icon"></i>
           <h3 className="about__title">05+</h3>
           <span className="about__subtitle">Javascript projcts</span>
        </div>

        <div className="about__box">
           <i class="uil uil-react about__icon"></i>
           <h3 className="about__title">01+</h3>
           <span className="about__subtitle">ReactJS projects</span>
        </div>

      </div>
    </div>
  )
}

export default Info

