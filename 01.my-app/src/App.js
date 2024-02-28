import './App.css';

function App() {
  //주석
  /*
  여러줄 주석
  */
  return (
      // 한줄로 되어 있을 때에는 div를 생략
      <>{/*여러줄 일 때 반드시 최상위 태그가 있어야 한다 */}
        <h1>react test 하고 있음</h1>
        <p>오늘은 본격적인 react를 할 예정입니다</p>
        {/* CTAL + 슬래시 = 주석 */}
      </>
  );
}

export default App;
