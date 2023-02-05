
import { Col } from 'react-bootstrap';

const Shoes = (props) => {


    return (
        <div className='container'>
            {
                (props.shoes).map(function (a,i) { //부모 컴포넌트의 shoes state 가져오기
                    return(
                        <Col>
                            <img src={props.shoes[i].img}/>
                            <h4>{props.shoes[i].title}</h4>
                            <p>{props.shoes[i].content}</p>
                            <p>{props.shoes[i].price}원</p>
                        </Col>
                    )   
                })
            }
      </div>
  )
}

export default Shoes