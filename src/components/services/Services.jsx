import React, {useState} from 'react';
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">

        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer</span>

        <div className="services__container container grid">

            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Front-End <br/> Developer </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                    
                        <i onClick={ () => toggleTab(0) } className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">FrontEnd Developer </h3>
                        <p className="services__modal-description">Service with more than 7 months of experience. Providing quality work to clients and compamies.</p>

                        <ul className="services__modal-services grid">

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> I can help make front-end for Websites.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I have experience making responsive websites.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                I can make dynamic websites.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I make Single Page Applications.</p>
                            </li>


                        </ul>
                    </div>
                
            </div>

           

            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Back-End <br/> Developer </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i  onClick={ () => toggleTab(0) } className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Back-End Developer </h3>
                        <p className="services__modal-description">Service with more than 7 months of experience. Providing quality work to clients and compamies.</p>

                        <ul className="services__modal-services grid">

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> Integrating server-side components and application programming interface (API).</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Designing, deploying and maintaining databases.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Testing the user interface (UI) to improve performance</p>
                            </li>



                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Full-Stack <br/> Developer </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0) } className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Full-Stack Web Developer  </h3>
                        <p className="services__modal-description">Service with more than 1 years of experience. Providing quality work to clients and compamies.</p>

                        <ul className="services__modal-services grid">

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Design client-side and server-side architecture.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Develop and manage well-functioning databases and applications.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Build features and applications with a mobile responsive design.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Work with development teams and product managers to ideate software solutions.</p>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </section>
  );
};

export default Services