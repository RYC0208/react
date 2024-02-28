// import './App.css'; * 1. style 파일을 별도 지정할 때

function App() {

  // 2. style을 변수에 객체로 저장하여 지정
/*
  const style ={
    App :{
      backgroundColor : "yellow" ,
      padding : '50px' ,
      textAlign : 'center' ,
      fontSize : '30px'
    },
    h1 : {
      color : "red"
    },
    class1 : {
      color : "#FF00DD"
    },
    id2 : {
      color : "darkgray" ,
      backgroundColor : "white"
    }
  }
*/
//3. inline 방식으로 style 추가    (*다른 스타일 방법들보다 우선순위가 높음)
  return (
    <div style={{textAlign:'center',padding:'50px'}}>
      <h1 style={{color:'red'}}>AddInEdu에 오신것을 환영합니다</h1>
      <h3 style={{color:'blue',backgroundColor:'green'}}>엘라스틱서치 빅데이터 분석 및 시각화 개발자 양성과정</h3>
      <p>react의 style 적용하기</p>
      <p>id로 style 적용하기</p>
    </div>
  );
}

export default App;
