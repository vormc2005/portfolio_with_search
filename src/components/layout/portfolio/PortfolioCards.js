import React, {  useEffect, Fragment} from 'react';
import "./portfoliocard.css";
import ProjectItem from './projectItem';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getProjects} from '../../../actions/projectActions'

const PortfolioCards = ({project: {projects, loading}, getProjects}) => {
    // const [projects, setProjects]=useState([]);
    // const [loading, setLoading] = useState(false)

    useEffect (()=>{
        getProjects();
        //eslint-disable-next-line
    },[]);

       


       if(loading || projects ===null){
           return <h4>Loading...</h4>
       }



    return (
      <Fragment>
        <div className="container-fluid">
            {!loading && projects.length === 0 ? (<p>
                No projects to display with a requested value!!!
                </p>
                ) : (
                projects.map(project => <ProjectItem project={project} key={project.id} />)
        )}
        </div>
     </Fragment>
       
    )
}

PortfolioCards.propTypes ={
    project: PropTypes.object.isRequired,
    getProjects:PropTypes.func.isRequired
}

const mapStateToProps = state =>({
    project: state.project
})

export default connect(mapStateToProps, {getProjects})(PortfolioCards);
