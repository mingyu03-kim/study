import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";

const emotionList = [
  {
    emotionId: 1,
    emotionName: "Best",
  },
  {
    emotionId: 2,
    emotionName: "Good",
  },
  {
    emotionId: 3,
    emotionName: "Soso",
  },
  {
    emotionId: 4,
    emotionName: "Bad",
  },
  {
    emotionId: 5,
    emotionName: "Worst",
  },
];

const Editor = () => {
  const emotionId = 1;

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input type="date" />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => {
            return (
              <EmotionItem
                key={item.emotionId}
                {...item}
                isSelected={item.emotionId === emotionId}
              />
            );
          })}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea placeholder="오늘은?" />
      </section>
      <section className="button_section">
        <Button text="취소" />
        <Button text="작성" type="positive" />
      </section>
    </div>
  );
};

export default Editor;
