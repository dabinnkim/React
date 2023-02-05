import React from 'react'

const Shose = (props) => {

    return (
        <div className='container'>
            {
                (props.shose).map(function () {
                        <Col>
                            <img src="https://codingapple1.github.io/shop/shoes4.jpg" />
                            <h4>{shose[0].title}</h4>
                            <p>{shose[0].content}</p>
                
            }
      </div>
  )
}

export default Shose