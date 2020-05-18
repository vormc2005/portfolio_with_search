import React,{Fragment} from 'react'
import "./portfoliocard.css";

const ProjectItem = ({project}) => {
    return (
       <Fragment>
            <div className="card" id="projectCard">
        <div className="img-container">
          <img className = "cardimg" alt={project.name} src={project.image} />
        </div>
        <div className="content">
         
            <p>
              <strong>Name:</strong> {project.name}
            </p>
             <p>
              <strong>Technology Used:</strong> {project.technology}
            </p>
           <p>
              <strong>Description:</strong> {project.description}
            </p> 
       
          <a href={project.Link} className="btn btn-primary cardBtn" id="projectlink">{project.name}
              </a>
              </div>
        </div>
        </Fragment>
    )
}

export default ProjectItem
