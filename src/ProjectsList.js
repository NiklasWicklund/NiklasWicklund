
import { FaGithub, FaLinkedin, FaEnvelope, FaLink,FaExternalLinkAlt, FaYoutube } from 'react-icons/fa';
const ProjectsList = [
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
        },
        {
          url: "https://www.youtube.com/watch?v=9gnUJxzgzdY",
          icon: FaYoutube
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
    },
    {
      title: "RNN Text Synthesizer",
      description: "Recurrent Neural Network (RNN) from scratch in python for text generation",
      id: 7,
      links: [
        {
          url: "https://github.com/NiklasWicklund/rnn-synthesize-text/tree/main",
          icon: FaGithub
        }
      ]
    }
    ];

export default ProjectsList;