import React from 'react'




const Modal = (props) => {


    return (
        <>
            <div className='modal' style={{background : props.color}}>
                <h4>{props.글제목[props.title]}</h4> {/* array에서 하나씩 가져와 */}
                <p>날짜</p>
                <p>상세내용</p>
                <button onClick={()=>{
                    let copy = [...props.글제목] 
                    copy[0] = '여자코트추천' //☆array의 일부값만 바꿀경우 카피본 만들기
                    props.글제목변경(copy);
                }}>첫번째 글수정</button>
                <input onChange={(e)=>{
                    props.set글수정(e.target.value)
                    console.log(props.글수정) //input값 글수정 state에 담기
                }}></input>
                <button onClick={()=>{
                    let copy = [...props.글제목]
                    copy[props.title]=`${props.글수정}` //클릭한 항목만 수정
                    props.글제목변경(copy) //수정된값 담기
                }}>글수정해주는 버튼</button>     
            </div>
        </>
    )
}

export default Modal;