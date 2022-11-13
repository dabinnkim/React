# ✨state 만들기

``` let[a,b] = useState(a의 초기값); ```

1. import{useState}

2. useState(보관할자료)

3. let[state데이터,state데이터 변경 함수]

Q. 왜 state 써야함?   
일반변수는 갑자기 변경될때 html 자동으로 반영안됨   
state는 갑자기 변경될때 state 쓰던 html 자동 재렌더링됨   
**자주 변경될것같은 html부분은 state로 만들어놓기


