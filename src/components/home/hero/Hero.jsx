import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO UJOSET' title='Unicross Journal of Science, Engineering and Technology' />
            <p>UJOSET: Where Science, Engineering and Technology Meets Digital Publication Excellence</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                SUBMIT ARTICCLE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
