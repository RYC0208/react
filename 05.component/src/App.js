import './App.css';

const user = {
  firstName : "Hong" ,
  lastName : " GilDong"
};

function Student(user){
  return user.firstName + " " + user.lastName;
}
function App() {
  const isStudent = 'true';
  return (
    <div className="App">
      <h1>Start React 2024_AddInEdu</h1>
      <h3>component 실습</h3>
      {isStudent ? <h4>{Student(user)}님 환영혀유~</h4> : <h4>학원생이 아니여</h4>}
      <Com1></Com1>
      <Com1></Com1>
      <Com1></Com1>
    </div>
  );
}

function Com1() {
  return (
    <div>
      <h2>[THIS IS COMPONENT]</h2>
      <p>고용놉옹부사넙구조벼놔대흥특콰훌련</p>
      <p>글자</p>
      <ul>
        <li>Java</li>
        <li>Oracle</li>
        <li>League Of Legend</li>
        <li>React</li>
      </ul>
    </div>
  )
}
export default App;
