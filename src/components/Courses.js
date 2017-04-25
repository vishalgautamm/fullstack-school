import React, {Component} from 'react';

class Courses extends Component {
  render() {
    return (
      <div className="main-content courses">
        <div className="course-header group">
          <h2>Courses</h2> 
          <ul className="course-nav">
            <li><a href="/courses/html">HTML</a></li>
            <li><a href="/courses/css">CSS</a></li>
            <li><a href="/courses/javascript">JavaScript</a></li>
          </ul>
        </div>
        
      </div>
    );
  }
}

export default Courses;