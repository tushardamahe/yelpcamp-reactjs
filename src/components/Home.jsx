import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container">
        <h1>YelpCamp</h1>
        <p>Welcome to YelpCamp!</p>
        <p>Jump right in and explore our many campgrounds.</p>
        <p>Feel free to share some of your own and comment on others!</p>
        <Link to="/campgrounds">View Campgrounds</Link>
      </div>
    </>
  );
};

export default Home;
