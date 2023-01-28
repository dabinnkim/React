import React from 'react'




const Modal = (props) => {


    return (
        <>
            <div className='modal' style={{background : props.color}}>
                <h4>{props.글제목[0]}</h4> {/* array에서 하나씩 가져와 */}
                <p>날짜</p>
                <p>상세내용</p>
                <button onClick={()=>{
                    let copy = [...props.글제목] 
                    copy[0] = '여자코트추천' //☆array의 일부값만 바꿀경우 카피본 만들기
                    props.글제목변경(copy);
                }}>글수정</button>
            </div>
        </>
    )
}

export default Modal;