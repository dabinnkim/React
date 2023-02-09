import React from 'react'
import {useParams} from 'react-router-dom'

const Cart = (props) => {

    let {id} = useParams();

    //사용자가 입력한 url 파라미터와 같은 영구번호값을 가진 상품을 출력 하는 함수
    let 찾는상품 = props.shoes.find(function(num){
        return num.id==id //여기서 id는 유저가 입력한 url 파라미터 숫자
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes"+(Number(id)+1)+".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{찾는상품.title}</h4>
                    <p>{찾는상품.content}</p>
                    <p>{찾는상품.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Cart