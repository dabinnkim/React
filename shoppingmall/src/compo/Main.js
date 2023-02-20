import { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Main = (props) => {

let navigate=useNavigate();

// let [getData,setGetData] = useState([]);



let [load,setLoad] = useState(false)



    
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
                        load===true? <div>로딩중잼</div> : null
                    }
                    <button onClick={() => {
                        setLoad(true) //로딩중
                        axios
                            .get('https://codingapple1.github.io/shop/data2.json')
                            .then((res) => {
                                console.log(props.shoes);
                                console.log(res.data);
                                let copy = [...props.shoes, ...res.data]; //array에 array 추가하기
                                console.log(copy)
                                props.setShoes(copy);
                                setLoad(false)//로딩종료
                            })
                            .catch(() => {
                                console.log('요청실패')
                                setLoad(false)//로딩종료
                            });
                        axios.post('/https://codingapple1.github.io/shop/data2.json',{name:"kim"})
                    }}>상품더보기</button>
                </div>

            </div>         
        </>
    )
}

export default Main