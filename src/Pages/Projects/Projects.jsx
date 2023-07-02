import ProjectsCard from "../../Components/ProjectsCard/ProjectsCard";
import exploreU from "../../assets/Web capture_2-7-2023_42029_explore-u-summer-camp.web.app.jpeg";

const Projects = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-semibold">Know Me More</h1>
      <hr />
      <div className="grid grid-cols-3">
        <ProjectsCard
          name="ExploreU"
          image={exploreU}
          features="Registration and Login System with social login options, allowing users to create accounts and access website features"
        />
      </div>
    </div>
  );
};

export default Projects;
