import { useSearchParams } from "react-router-dom";
const Home = () => {
  const [params, setParams] = useSearchParams();
  console.log(params);
  return <div>Home {params.get("value")} </div>;
};

export default Home;
