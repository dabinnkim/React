import { useState } from 'react';
import '../App.css';

const Main = (props) => {


    
    return (
        <>
            <div className='main-bg'></div> {/* 맨위 운동화 이미지 */}
            <div className='container'>
                <div className='row'>
                    {
                        (props.shoes).map((a, i) => { //props로 부모 컴포넌트의 shoes state 가져오고 map 함수로 state 데이터 요소갯수만큼 코드 반복
                            return (
                                <div className='col-md-4'>
                                    <img src={'https://codingapple1.github.io/shop/shoes' + (i + 1) + '.jpg'} />
                                    <h4>{props.shoes[i].title}</h4>
                                    <p>{props.shoes[i].content}</p>
                                    <p>{props.shoes[i].price}원</p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Main