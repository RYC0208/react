import { useParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();
  return <div>{params.id}의 일기 입니다</div>
}
export default Diary;