import { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Main = (props) => {

let navigate=useNavigate();

// let [getData,setGetData] = useState([]);

    
    return (
        <>
            <div className='main-bg'></div> {/* 맨위 운동화 이미지 */}
            <div className='container'>
                <div className='row'>
                    {
                        (props.shoes).map((a, i) => { //props로 부모 컴포넌트의 shoes state 가져오고 map 함수로 state 데이터 요소갯수만큼 코드 반복
                            return (
                                <div className='col-md-4'>
                                    <img src={'https://codingapple1.github.io/shop/shoes' + (i + 1) + '.jpg'}
                                    onClick={()=>{navigate('/cart/'+ i)}}/> {/*이미지 클릭하면 cart 라우터로 이동*/}
                                    <h4>{props.shoes[i].title}</h4>
                                    <p>{props.shoes[i].content}</p>
                                    <p>{props.shoes[i].price}원</p>
                                </div>
                            )
                        })
                    }

                    <button onClick={() => {
                        axios
                            .get('https://codingapple1.github.io/shop/data2.json')
                            .then((res) => {
                                console.log(props.shoes);
                                console.log(res.data);
                                let copy = [...props.shoes, ...res.data]; //array에 array 더하기
                                console.log(copy)
                                props.setShoes(copy);
                            })
                            .catch(() => { console.log('요청실패') });
                        axios
                            .get('https://codingapple1.github.io/shop/data3.json')
                            .then((res1)=>{
                                let copy1=[...props.shoes, ...res1.data]
                                console.log(copy1)
                                props.setShoes(copy1);
                            })
                    }}>상품더보기</button>

                   

                </div>

            </div>         
        </>
    )
}

export default Main