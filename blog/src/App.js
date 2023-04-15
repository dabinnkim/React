import './App.css';
import Modal from '../src/component/Modal'
import Map from '../src/component/Map'
import Login from '../src/component/Login'
import { useState } from 'react';

function App() {

  
  let a = '일반 변수'
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬독학','쇼핑몰 추천']);
  let [좋아요,좋아요변경] = useState([0,0,0,0]); 
  let [modal, setModal] = useState(false); //모달창 초기 상태 false
  let [map,setMap] = useState(false);
  let [title,setTitle] = useState(0); //글제목의 인덱스값
  let [입력값, 입력값변경]=useState(''); // 유저가 쓴 문자를 저장할것이므로 기본값 공백

  const [text,setText] = useState("");
  const [name,setName] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleConfirm = () => {
    setName(text);
    console.log(name)
  }

  const onClick = ()=>{
    글제목변경([...글제목].sort())
  }

  const [글수정,set글수정] = useState('');
  // const [글수정담기,set글수정담기] = useState('')





  
  const 글추가 = () =>{
    let copy = [...글제목]
    copy.unshift(입력값)
    글제목변경(copy)
  }

  

  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={a}>포트폴리오|</h4>
      </div>
      <Login/>
      <Map/>

      <div>
        <input type='text' name='test' onChange={handleChange}></input>
        <button onClick={handleConfirm}>버튼</button>
        <p>input 입력값 : {name}</p>
      </div>

      <div className='list'>
        <button onClick={()=>{
          let copy2=[...글제목]; //array니까 복사본 만들고
          글제목변경(copy2.sort()); //복사본 오름차순 정렬해서 변경함수에 넣기
        }}>가나다순으로 정렬하기</button>
      
        <button onClick={onClick}>가나다순 정렬 복습</button>

        <button onClick={()=>{
          let copy = [...글제목]; //array 원본 카피본 만들기
          copy[0] = '여자코트 추천'
          글제목변경(copy);
          }}>글수정</button>
          
        
        <button onClick={() => {  
          setModal(!modal);
         }}>모달창 열기</button>
      

        <button onClick={()=>{
          setMap(!map);
         }}>지도 열기</button>
      </div>

      
      {
        map==true? <Map/> : null
      }


      {/*비슷한 html map()함수 써서 반복하기*/}
      {
        글제목.map(function (a,i) { //파라미터로 array 자료 꺼내기, i는 0부터 시작하는 정수
          return (
            <div className='list' key={i}>
              {/* 글제목 누르면 모달창 실행 + 모달창의 title 글제목과 같게 */}
              <h4 onClick={()=>{setModal(true); setTitle(i)}}> 
                {글제목[i]}
                <span onClick={(e)=>{e.stopPropagation(); //stop블라블라 - 상위 html로 퍼지는 이벤트버블링 막음
                  let copy = [...좋아요] //array 자료의 일부값만 바꾸는 경우 카피본 만들어야됨
                  copy[i]+=1
                  좋아요변경(copy)}}>👍
                  </span> {좋아요[i]}
              </h4>
              <p>2월 17일 발행</p>
              {/* 글목록에서 삭제 */}
              <button onClick={(e)=>{
                  let copy = [...글제목];
                  copy.splice(i,1); //i : 0부터 시작되는 정수, map 콜백함수에 있음
                  글제목변경(copy);
              }}>삭제</button>
            </div>
          )
        })
      }

      {/* 버튼누르면 사용자가 입력한 글 목록에 추가 */}
      <input onChange={(e) => {
        입력값변경(e.target.value); //유저가 input에 입력한 값 state에 저장
      }} />
      <button onClick={() => {
        let copy = [...글제목];
        copy.unshift(입력값) //배열의 맨 앞에 추가
        글제목변경(copy);
      }}>글추가</button>

      
      <input onChange={(e)=>{
        입력값변경(e.target.value);
      }}/>

      <button onClick={()=>{
        let copy =[...글제목];
        copy.unshift(입력값); //unshift : array 맨처음 추가
        글제목변경(copy);
      }}>글추가연습</button>

      <button onClick={글추가}>글추가복습</button>


      {
        modal == true ? <Modal color='orange' 글제목={글제목} 글제목변경={글제목변경} 글수정={글수정} set글수정={set글수정} title={title}/> : null //props 문법
      }  
      <br></br>
      <div>ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡmap함수 복습ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</div>   
      <br></br>

      {
        글제목.map((a,i)=>{
          return (
            <>
            <h4 style={{backgroundColor:"skyblue"}}>{글제목[i]}</h4>      
            </>
          )
        })
      }









    </div>
  );
}

export default App;
