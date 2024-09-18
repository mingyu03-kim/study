import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  const curDiaryItem = useDiary(params.id);
  if (!curDiaryItem) return <div> 데이터 로딩중 </div>;

  return (
    <div>
      <Header
        title={new Date(curDiaryItem?.createdDate).toLocaleDateString()}
        leftChild={<Button text="< 뒤로가기" onClick={() => nav(-1)} />}
        rightChild={
          <Button text="수정하기" onClick={() => nav(`/edit/${params.id}`)} />
        }
      />
      <Viewer
        emotionId={curDiaryItem?.emotionId}
        content={curDiaryItem?.content}
      />
    </div>
  );
};

export default Diary;
