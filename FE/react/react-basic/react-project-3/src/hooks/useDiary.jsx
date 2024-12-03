import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();
  const nav = useNavigate();
  useEffect(() => {
    const currentDiaryItem = data.find((i) => String(i.id) === String(id));
    if (!currentDiaryItem) {
      window.alert("!!!!!!!!!!!!!!");
      nav("/", { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
  }, [id, data]);

  return curDiaryItem;
};

export default useDiary;
