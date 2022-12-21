
import React from 'react';
import "./portfolio.css";
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const data = [
    {
        id:1,
        image:IMG1 ,
        title:'Travel Website',
        github: 'https://github.com/Dhumra/TravelWebsite',
        demo:  'https://travel-website-pied-xi.vercel.app/',
    },
    {
        id:2,
        image:IMG2 ,
        title:'Modern Responsive College Website',
        github:'https://github.com/Dhumra/college1-website',
        demo:'https://dhumra.github.io/college1-website/'
    },
    {
        id:3,
        image:IMG3 ,
        title:'Modern E-commerce Website',
        github:'https://github.com/Dhumra/E-commerce-clothing-website',
        demo:'https://dhumra.github.io/E-commerce-clothing-website/'
    },
    {
        id:4,
        image:IMG4 ,
        title:'SkyCrew Website',
        github:'https://github.com/Dhumra/sky-crew-website',
        demo:'https://dhumra.github.io/sky-crew-website/'
    },
    {
        id:5,
        image:IMG5 ,
        title:'Naruto Website',
        github:'https://github.com/Dhumra/Naruto-Website',
        demo:'https://dhumra.github.io/Naruto-Website/'
    },
    {
        id:6,
        image:IMG6 ,
        title:'Todos List SPA',
        github:'https://github.com/Dhumra/Todo-List',
        demo:'https://dhumra.github.io/Todo-List/'
    },
    
    
    

    


]

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
        
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">My Recent Work</span>
        
        <div className="container portfolio__container">
            {
                data.map( ({id, image, title, github, demo}) => {
                    return(
                        <article key={id} className="portfolio__item">
                        <div className="portfolio__item-image">
                           <img src={image} alt={title} />
                        </div>
                           <h3>{title}</h3>
                           <a href={github} className="btn-primary" target="_blank">Github</a>
                           <a href={demo} className="btn-primary" target="_blank">Live Demo</a> 
                        
                    </article>  
                    )
                })
            }
        </div>

        </section>
  )
        }
 export default Portfolio




