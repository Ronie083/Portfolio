import './ProjectsCard.css';

const ProjectsCard = ({ name, features, image }) => {
  return (
    <div className="containerCard">
      <div className="card">
        <div className="imgProfile">
          <img src={image} alt="" />
        </div>
        <div className="contentbox">
          <div className="contentDP">
            <h3>
              {name} <br /> <span>{features}</span>
            </h3>
          </div>
          <ul className="social">
            <li style={{ "--q": 1 }}>
              <a href="#">
                <span className="material-icons" aria-hidden="true">
                  mark_as_unread
                </span>
              </a>
            </li>
            <li style={{ "--q": 1 }}>
              <a href="#">
                <span className="material-icons" aria-hidden="true">
                  question_answer
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
