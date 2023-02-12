import { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Main = (props) => {

let navigate=useNavigate();

let [getData,setGetData] = useState([]);

    
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

                    {
                        getData.map((a, i) => {
                            return (
                                <div className='col-md-4'>
                                    <img src={'https://codingapple1.github.io/shop/shoes' + (i + 4) + '.jpg'} />
                                    <h4>{getData[i].title}</h4>
                                    <p>{getData[i].content}</p>
                                    <p>{getData[i].price}</p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
            <button onClick={()=>{
                axios
                .get('https://codingapple1.github.io/shop/data2.json')
                .then((res)=>{
                    setGetData(res.data);
                    console.log(res.data);
                    console.log('성공');
                })
                .catch(()=>{console.log('요청실패')});
            }}>누르면 서버에 GET 요청</button>
                 
            
            
        </>
    )
}

export default Main