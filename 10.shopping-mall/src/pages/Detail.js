import { Container, Row, Col, Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

// 외부 라이브러리는 ./가 붙지 않음

/*
    let[clothes] = useState(pList)의 값이 정렬로 바뀌었다면
    0번을 호출할 때 다른것이 나옴
    pList id를 사용하면 바뀌지 않음
*/
/*
   style-components : 스타일을 컴포넌트로 만들어 사용하기
    1) 설치 : npm i styled-components
*/
let YellowBtn = styled.button`
    background : yellow;
    color : black;
    padding : 10px;

`;
let Box = styled.div`
padding : 20px;
background : red;
`;


function Detail(props) {
    //userParams();
    let { id } = useParams();
    let findId = props.clothes.find(function(x){
        return x.id == id;
    })
  return(
    <>
     
      <Box>빠아아악스
        <Box> <YellowBtn>노오란버튼</YellowBtn></Box>
      </Box>
      
      <Container>
        <Row>
          <Col md={6}>
            <img src={`${process.env.PUBLIC_URL}/img/clothes${findId.id+1}.png`} width="400px"/>
          </Col>
          <Col md={6}>
            <h4>{findId.title}</h4>
            <p>{findId.content}</p>
            <p>{findId.price}</p>
            <Button variant="secondary">주문하기</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Detail;