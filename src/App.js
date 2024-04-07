import Carousel from 'react-material-ui-carousel';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';

import ProfilePic from './images/profilepic.jpg';
import ProjectsList from './ProjectsList';
//Import icons github, linkedin, email, url from react-icons/fa
import { FaGithub, FaLinkedin, FaEnvelope, FaLink,FaExternalLinkAlt, FaYoutube } from 'react-icons/fa';
import { CardActions } from '@mui/material';
function App() {
  const projects = ProjectsList;
  
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <div className='two-column center'>
          <div className='column image'>
            <img className="profile-picture" src={ProfilePic}/>
          </div>
          <div className='column left'>
            <h1>Niklas <br/> Wicklund</h1>
            <p>
              I'm glad you found my website! I'm Niklas Wicklund, a computer science student based in Stockholm, Sweden. With a background in Computer Science, machine learning, and a hint of visualization and graphics, I'm passionate about the integration of machine learning and the vast world of visualization and game design.
              If you find something interesting, feel free to reach out!
            </p>
          </div>
        </div>
        <hr/>
        <div id="projects" className='two-column'>
          <div className='column left'>
            <h2>Projects</h2>
            <p>
              Here are some of the projects I've worked on. Use the links to find out more!
            </p>
          </div>
          <div className='column center'>
            <Carousel className='carousel'>
              {
                projects.map((item, i) => <Project key={i} item={item} />)
              }
            </Carousel>
          </div>
        </div>
        <hr/>
        <div className="two-column">
          <div className='column left'>
            <h2>Publications</h2>
            <ul class="list-container">
              <li class="list-item">
                <h3>It’s Never too Early to Learn About Code Quality</h3>
                <p>Our bachelor's thesis in computer science was accepted for inclusion in the SIGCSE Technical Symposium 2023 program. The work examines how code quality develops in a CS 1 & 2 course, through the lens of static code analysis.</p>
                <CardActions>
                  <a href="https://dl.acm.org/doi/10.1145/3545945.3569829"><FaExternalLinkAlt size={20}/></a>
                  <a href='https://github.com/NiklasWicklund/never-too-early'><FaGithub size={20}/></a>
                </CardActions>
                
              </li>
            </ul>
          </div>
          <div class="column left">
            <h2>Education</h2>
            <ul class="list-container">
              <li class="list-item">
                <h3>KTH Royal Institute of Technology</h3>
                <p className='location-date'>Stockholm, Sweden<br/>2019-2022</p>
                <p className='program'>Bachelor in Computer Science</p>
              </li>
              <li class="list-item">
                <h3>KTH Royal Institute of Technology</h3>
                <p className='location-date'>Stockholm, Sweden<br/>2022-2024*</p>
                <p className='program'>Master in Data Science</p>
              </li>
              <li class="list-item">
                <h3>Tokyo Institute of Technology</h3>
                <p className='location-date'>Tokyo, Japan<br/>Oct 2023 - Feb 2024</p>
                <p className='program'>Exchange Semester</p>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default App;
