import { useParams } from "react-router-dom";

const Edit = () => {
  const params = useParams();
  return <div>{params.id} 일기다.</div>;
};

export default Edit;
