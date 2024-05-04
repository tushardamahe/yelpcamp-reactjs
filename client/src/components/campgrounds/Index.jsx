import { useAuth } from "../../store/auth";

const Index = () => {
  const { campgrounds } = useAuth();
  console.log("Campgrounds",campgrounds);

  return <div>MainPage</div>;
};

export default Index;
