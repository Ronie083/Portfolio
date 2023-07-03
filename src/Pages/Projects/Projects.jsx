import ProjectsCard from "../../Components/ProjectsCard/ProjectsCard";
import exploreU from "../../assets/Web capture_2-7-2023_42029_explore-u-summer-camp.web.app.jpeg";
import devilsHorn from "../../assets/Web capture_3-7-2023_203738_devils-horn.firebaseapp.com.jpeg"
import chatgaiyaHana from "../../assets/Web capture_3-7-2023_205230_chatgaiya-hana.web.app.jpeg"

const Projects = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-semibold">Know Me More</h1>
      <hr />
      <div className="grid md:grid-cols-3 justify-items-center">
        <ProjectsCard
          name="ExploreU"
          image={exploreU}
          features="Registration and Login System with social login options, allowing users to create accounts and access website features"
        />

        <ProjectsCard
          name="Devils Horn"
          image={devilsHorn}
          features="Registration and Login System with social login options, allowing users to create accounts and access website features"
        />

        <ProjectsCard
          name="Chatgaiya Hana"
          image={chatgaiyaHana}
          features="Registration and Login System with social login options, allowing users to create accounts and access website features"
        />
      </div>
    </div>
  );
};

export default Projects;
