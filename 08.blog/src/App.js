import './App.css';
import {useState} from 'react';
function App() {
// let title = ['오구오구내식당', '아이구내식당', '으이구내식당'];
  let [title, setTitle] = useState(['오구오구내식당']);
  let [like, setLike] = useState(0);

  let [num1, num2] = [3, 6];
  return (
    <div className="App">
      <h2 className='title1'>맛집 추천</h2>
      <div className='list'>
        <h4>{title[0]}</h4>
        <p>2월 28일<span onClick={() => {setLike(like+1)}} className='span-left'>🤍</span>{like}</p>
      </div>
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>2월 28일<span className='span-left'>🤍</span></p>
      </div>
      <div className='list'>
        <h4>{title[2]}</h4>
        <p>2월 28일<span className='span-left'>🤍</span></p>
      </div>
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  );
  
}
function List() {
  return (
      <div className='list'>
          <h4>이레구내식당</h4>
          <p>2월 28일<span className='span-left'>🤍</span></p>
      </div>
  )
}


export default App;
