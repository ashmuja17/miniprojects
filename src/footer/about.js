import React from 'react';
// import invo from './image/invo.jpg'



function About() {
    return (
        <div className='container'>

            <div className='parent'>

                <div className='about text-4xl'>
                    <h4 className='about'> <span className=' text-amber-200'>ASHHASI </span> SHOPE GROUP</h4>
                </div>

            </div><br />

            <div className='parent1 mt-5'>
                {/* <div className=''>
                    <img src={invo} alt='invo' />
                </div> */}

                <div className='invo para'>
                    <h1 className=' text-2xl'>TECHNOLOGY AT <span className=' animate-pulse text-amber-400'>ASHASI</span></h1><br />
                    <p><span className=' text-5xl'>INNOVATION</span><br />
                        ASHASI technology drives path-breaking, customer-focused innovation that makes high quality products<br /> accessible to Indian shoppers, besides making the online shopping experience convenient, intuitive and seaml
                    </p>

                </div>

            </div>

        </div>





    )
}
export default About;