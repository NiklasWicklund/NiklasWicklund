import React from 'react';
import { Button, CardActions, Paper } from '@material-ui/core';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import '../App.css'

import ProjectImages from '../ProjectImages';
import { FaGithub, FaLinkedin, FaEnvelope, FaLink } from 'react-icons/fa';
function Project(props)
{
    console.log(props.item.links)
    return (
        <Card key={props.index} className="carousel-card">
          <CardMedia
            component="img"
            image = {ProjectImages[props.item.id]}
            alt={props.item.title}
            className="card-image"
          />
          <CardContent className="card-content">
            <Typography variant="h5" component="h2">
              {props.item.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.item.description}
            </Typography>
            <CardActions className="card-actions">
                {props.item.links.map((link, i) => (
                    <a 
                        key={i}
                        href={link.url}
                    >
                        <link.icon size={20}/>
                    </a>
                ))}
            </CardActions>
          </CardContent>
        </Card>
    )
}

export default Project;