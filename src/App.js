import Carousel from 'react-material-ui-carousel';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';

import ProfilePic from './images/profilepic.jpg';

import ProjectImages from './ProjectImages';

//Import icons github, linkedin, email, url from react-icons/fa
import { FaGithub, FaLinkedin, FaEnvelope, FaLink,FaExternalLinkAlt } from 'react-icons/fa';
import { CardActions } from '@mui/material';
function App() {

  const projects = [
    {
      title: "MNIST Classifier",
      description: "Implementation of a deep neural network (DNN) from scratch using numpy with the purpose of training and classifying handwritten digits from the MNIST dataset. ",
      id: 0,
      links: [
        {
          url: "https://github.com/NiklasWicklund/MNIST-Classification-from-scratch",
          icon: FaGithub
        }
      ]
    },
    {
      title: "Cloth Simulation",
      description: "Cloth simulator that make use of Verlet Integration and The Jacobsen Method. ",
      id: 1,
      links: [
        {
          url: "https://github.com/NiklasWicklund/ClothSimulator",
          icon: FaGithub
        },
        {
          url: "https://niklaswicklund.github.io/cloth-simulator-p5/",
          icon: FaExternalLinkAlt
        }
      ]
    },
    {
      title: "Movie Database",
      description: "Utilizing the TMDB API, this project builds a movie database using React and Node.js.",
      id: 2,
      links: [
        {
          url: "https://github.com/NiklasWicklund/movieservicefrontend",
          icon: FaGithub
        },
        {
          url: "https://niklaswicklund.github.io/movieservicefrontend/",
          icon: FaExternalLinkAlt
        }
      ]
    },
    {
      title: "NEAT Flappy Bird",
      description: "Makes use of the NEAT library in python to train an AI to play the game Flappy Bird. ",
      id: 3,
      links: [
        {
          url: "https://github.com/NiklasWicklund/NEAT-FlappyBird",
          icon: FaGithub
        }
      ]
    },
    {
      title: "Spliced Game",
      description: "Story-based 2D game created for a school project, made in Unity.",
      id: 4,
      links: [
        {
          url: "https://github.com/nadaboukhriss/Spliced",
          icon: FaGithub
        },
        {
          url: "https://spliced2023.wordpress.com/",
          icon: FaExternalLinkAlt
        }
      ]
    },
    {
      title: "Steganography",
      description: "Steganography tool that embeds text into an image by modifying the color values of the image.",
      id: 5,
      links: [
        {
          url: "https://github.com/NiklasWicklund/steganography-website",
          icon: FaGithub
        },
        {
          url: "https://niklaswicklund.github.io/steganography-website/",
          icon: FaExternalLinkAlt
        }
      ]
    },
    {
      title: "Shape Transformation",
      description: "Players are tasked with arranging transformation components in the correct order and assigning accurate values to recreate the target shape.",
      id: 6,
      links: [
        {
          url: "https://github.com/NiklasWicklund/shapetransform",
          icon: FaGithub
        },
        {
          url: "https://niklaswicklund.github.io/shapetransform/",
          icon: FaExternalLinkAlt
        }
      ]
    }
    
  ];
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <div className='two-column'>
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
          <div className='column'>
            <Carousel className='carousel'>
              {
                projects.map((item, i) => <Project key={i} item={item} />)
              }
            </Carousel>
          </div>
        </div>
        <hr/>
        <div class="publications-section left">
          <h2>Publications</h2>
          <ul class="publication-list">
            <li class="publication">
              <h3>It’s Never too Early to Learn About Code Quality</h3>
              <p>Our bachelor's thesis in computer science was accepted for inclusion in the SIGCSE Technical Symposium 2023 program. The work examines how code quality develops in a CS 1 & 2 course, through the lens of static code analysis.</p>
              <CardActions>
                <a href="https://dl.acm.org/doi/10.1145/3545945.3569829"><FaExternalLinkAlt size={20}/></a>
                <a href='https://github.com/NiklasWicklund/never-too-early'><FaGithub size={20}/></a>
              </CardActions>
              
            </li>
          </ul>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default App;
