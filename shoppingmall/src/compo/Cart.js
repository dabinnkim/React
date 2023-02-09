import React from 'react'
import {useParams} from 'react-router-dom'

const Cart = (props) => {

    let {usernum} = useParams(); // 사용자가 입력한 url 파라미터를 가져와줌

    //usernum과 같은 id를 가진 상품을 출력해야됨
    let 상품 = props.shoes.find(num => num.id==usernum) 
    

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes"+(Number(id)+1)+".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{상품.title}</h4>
                    <p>{상품.content}</p>
                    <p>{상품.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Cart