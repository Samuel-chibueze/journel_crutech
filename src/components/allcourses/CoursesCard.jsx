import React from "react"
import "./courses.css"
import { coursesCard } from "../../dummydata"
import {book_icon} from './book_icon.png'

const CoursesCard = () => {
  return (
    <>
     <div>
      <div className="services-container">
        <div className="services-content">
          <div className="service-item">
            <img src="./book_icon.png" alt="" />
            <h2>Research Paper Publication</h2>
            <p>Publish your research findings in our reputable journals covering various 
              disciplines in sciences, engineering, and technology. Our editorial team ensures 
              the quality and integrity of published papers.</p>
          </div>
          <div className="service-item">
            <h2>Peer Review Process</h2>
            <p>Benefit from our rigorous peer review process conducted by experts in the respective 
              fields. We ensure that every manuscript undergoes thorough evaluation to maintain the 
              highest standards of scholarly publications.</p>
          </div>
          <div className="service-item">
            <h2>Conference Proceedings</h2>
            <p>Participate in our conferences and present your research papers. Selected papers will 
              be published in conference proceedings, providing an avenue for disseminating research 
              findings and networking with peers.</p>
          </div>
          <div className="service-item">
            <img src="" alt="" />
            <h2>Publication Ethics</h2>
            <p>We adhere to strict publication ethics and guidelines to ensure the integrity and credibility 
              of our journals. Authors can trust in the transparency and fairness of our editorial process.</p>
          </div>
          <div className="service-item">
            <h2>Indexing and Abstracting</h2>
            <p>Get your published papers indexed and abstracted in renowned databases and repositories, increasing 
              their visibility and accessibility to researchers worldwide.</p>
          </div>
          <div className="service-item">
            <h2>Editorial Support</h2>
            <p>Receive professional editorial support throughout the manuscript submission and revision process. 
              Our editors provide constructive feedback to enhance the clarity and coherence of your research papers.</p>
          </div>
          {/* Add more service items as needed */}
        </div>
      </div>
    </div> 
              <button className='outline-btn'>SUBMIT ARTICLE NOW!</button>
           
  
    </>
  )
}

export default CoursesCard
