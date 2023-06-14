import { useState, useEffect } from 'react';
import '../App.css';
import { useNavigate,  } from 'react-router-dom';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';



const Main = ({shoes,setShoes}) => {

let navigate=useNavigate();




const obj = {name:'kim'};
localStorage.setItem('data',JSON.stringify(obj));
const 꺼낸것 = localStorage.getItem('data')
console.log(JSON.parse(꺼낸것).name);


let [load,setLoad] = useState(false)


let[count,setCount] = useState(0);
let[age, setAge] = useState(20);

let[testCount,setTestCount] = useState(0);
let[testAge,setTestAge] = useState(20);


//async test
useEffect(()=>{
    if(testCount!=0 && testCount<=10){
        setTestAge(testAge+1)
    }
},[testCount])

function onClick(){
    setCount(count+1) //얘가너무 늦게 실행됨
}

let [dabin,setDabin] = useState(30);

function onClick2(){
    setDabin(dabin+1);
}

function onClick3(){
    setTestCount(testCount+1)
}

    return (
        <>
            <div>안녕하십니까 전 {age} 살입니다</div>
            <button onClick={onClick}>누르면 한살먹기</button>
            <div>안녕하세요 저는 김다빈 이구요 {dabin}살입니다 <button onClick={onClick2}>한살먹기</button></div>

            <div>내 나이는 {testAge}세 입니다. *30에 이상으로 안넘어감</div>
            <button onClick={onClick3}>나이 +1 되는 버튼</button>
           
           {/* 메인 운동화 이미지 */}
            <div className='main-bg'></div>
             
            <div className='container'>
                <div className='row'>
                    {
                        (shoes).map((a, i) => { //props로 부모 컴포넌트에 있는 shoes state 가져오고, map 함수로 state 데이터 요소갯수만큼 코드 반복
                            return ( //return 뒤의 코드가 배열의 요소 갯수만큼 반복됨
                                <div className='col-md-4'>
                                    <img src={'https://codingapple1.github.io/shop/shoes' + (i + 1) + '.jpg'} width="80%" onClick={()=>{navigate('/cart/'+ i)}}/> {/*이미지 클릭하면 cart 라우터로 이동*/}
                                    <h4>{shoes[i].title}</h4>
                                    <p>{shoes[i].content}</p>
                                    <p>{shoes[i].price}원</p>
                                </div>
                            )
                        })
                    }
                    
                    {
                        load===true? <Spinner animation="border" variant="primary" /> : null
                    }
                    <button onClick={() => {
                        setLoad(true) //로딩중
                        axios
                            .get('https://codingapple1.github.io/shop/data2.json')
                            .then((res) => {
                                console.log(shoes);
                                console.log(res.data);
                                let copy = [...shoes, ...res.data]; //array에 array 추가하기
                                console.log(copy)
                                setShoes(copy);
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