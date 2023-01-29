import logo from './logo.svg';
import './App.css';
import Modal from '../src/component/Modal'
import Map from '../src/component/Map'
import { useState } from 'react';

function App() {

  
  let a = '일반 변수'
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬독학','쇼핑몰 추천']);
  let [좋아요,좋아요변경] = useState([0,0,0,0]); 
  let [modal, setModal] = useState(false); //모달창 초기 상태 false
  let [map,setMap] = useState(false);
  let [title,setTitle] = useState(0); //0이면 남자 코트 추천

  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={a}>포트폴리오</h4>
      </div>


      <div className='list'>
        <button onClick={()=>{
          let copy2=[...글제목];
          글제목변경(copy2.sort());
        }}>가나다순으로 정렬하기</button>

        <button onClick={()=>{
          let copy = [...글제목]; //array 원본 카피본 만들기
          copy[0] = '여자코트 추천'
          글제목변경(copy);
          }}>글수정</button>
          
        <h4>{글제목[0]}<span onClick={()=>{좋아요변경(좋아요 + 1)}}>👍</span>{좋아요}</h4> {/* 👍누르면 이게함수 실행 */}
        <p>2월 17일 발행</p>
      </div>


      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>


      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <button onClick={() => {  
        setModal(!modal);
      }}>모달창 열기</button>
      

      <button onClick={()=>{
        setMap(!map);
      }}>지도 열기</button>

      {/*
      삼항연산자
      조건식 ? 참일때 실행할 코드 : 거짓일때 실행할 코드
      */}
      

      {
        map==true? <Map/> : null
      }

      



    

      {/*비슷한 html map()함수 써서 반복하기*/}
      {
        글제목.map(function (a,i) { //파라미터로 array 자료 꺼내기, i는 0부터 시작하는 정수
          return (
            <div className='list' key={i}>
              <h4 onClick={()=>{setModal(true); setTitle(i)}}> {/* 글제목 누르면 모달창 실행 + title 변경 */}
                {글제목[i]}
                <span onClick={()=>{
                  let copy = [...좋아요] //array 자료의 일부값만 바꾸는 경우 카피본 만들어야됨
                  copy[i]+=1
                  좋아요변경(copy)}}>
                    👍</span> {좋아요[i]}
              </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      {
        modal == true ? <Modal color='orange' 글제목={글제목} 글제목변경={글제목변경} title={title}/> : null //props 문법
      }     



    </div>
  );
}

export default App;
