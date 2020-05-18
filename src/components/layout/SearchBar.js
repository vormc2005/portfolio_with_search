import React, {useRef} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {searchProjects} from '../../actions/projectActions'
import './searchbar.css'
const SearchBar = ({searchProjects}) => {
const text = useRef("")

const onChange = e =>{
  console.log(text.current.value)

  searchProjects(text.current.value)
}
 

    return (
        <div>



<div class="active-cyan-3 active-cyan-4 mb-4">
  <input
  id="search"
  type="search"
   placeholder="Type programming language or technology...(ex. JavaScript, Python)"
   ref = {text}
   onChange={onChange} className="form-control" aria-label="Search"/>
</div>
             {/* <nav  className="blue lighten-3">
    <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input 
          id="search"
           type="search"
            placeholder="Type programming language or technology...(ex. JavaScript, Python)"
            ref = {text}
            onChange={onChange}
            />
          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav> */}

  
        </div>

    )
}

SearchBar.propTypes ={
  searchProjects:PropTypes.func.isRequired
}

export default  connect(null, {searchProjects})(SearchBar); 
