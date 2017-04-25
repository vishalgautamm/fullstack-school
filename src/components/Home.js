import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div className="main-content home">
        <h2>{this.props.route.title}</h2>
        <p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
        <p>Learn front end web development and much more! This simple directory app offers a preview of our course library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the skills you need to launch a new career in front end web development.</p>
        <p>We have thousands of videos created by expert teachers on web design and front end development. Our library is continually refreshed with the latest on web technology so you will never fall behind.</p>
        <hr />
        <h3>Featured Courses</h3>
        <Link to="featured/Javascript and Node JS/Anthony Alicea">Tony Alicea</Link>
        <Link to="featured/React JS/Stephen Grider">Stephen Grider</Link>
        <Link to="featured/Node JS/Sachin Bhatnagar">Sachin Bhatnagar</Link>
        <Link to="featured/Javascript/kyle simpson">Kyle Simpson</Link>
      </div>
    );
  }
}

export default Home;
