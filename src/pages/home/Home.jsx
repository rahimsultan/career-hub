import { Category } from "../../components/category/Category";
import FeatureJob from "../../components/featurejob/FeatureJob";

const Home = () => {
  return (
    <>
      <div className="bg-gradient">
        <div className=" max-w-7xl mx-auto lg:px-8 flex justify-between items-center pt-10">
          <div>
            <h1 className="text-7xl font-extrabold ">
              One Step <br /> Closer To Your{" "}
              <span className="style-text">Dream Job</span>
            </h1>
            <p className="max-w-[519px] my-5">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button
              type="button"
              className="rounded-md bg-grad px-3 py-3 text-sm font-semibold text-white shadow-sm"
            >
              Gat Started
            </button>
          </div>
          <div>
            <img src="src\assets\images\user.png" alt="user" />
          </div>
        </div>
      </div>
      <Category/>
      <FeatureJob/>
    </>
  );
};

export default Home;
