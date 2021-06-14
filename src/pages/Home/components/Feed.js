// @ts-nocheck
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PostCard from '../../../components/PostCard/index';

const useStyles = makeStyles((theme) => ({
    root:{
    }
}));

//post in hard code

const posts= [
    {
        id: 1,
        author: {
            id: 1,
            name: 'Adriano Misina',
            username: 'adrianomisina',
            avatar: '/images/avatar/avatar_1.jpeg'
        },

        title: "Criando a Conecta Dev Social Media do Zero !!!",
        date: "June 12, 2021",
        description: "Qual a opinião de vcs sobre a rede Conecta Dev?",
        hashtags: "#javascript, #reactjs, #bootstrap, #vuejs, #frontend, #ux",
        image: "images/posts/post9.png"
    },

    {
        id: 2,
        author: {
            id: 1,
            name: 'Adriano Misina',
            username: 'adrianomisina',
            avatar: '/images/avatar/avatar_1.jpeg'
        },

        title: "Gestão do Tempo Para os Estudos",
        date: "June 12, 2021",
        description: "Opinião dos Especialista sobre Gestão do Tempo na Programação",
        hashtags: "#javascript, #reactjs, #bootstrap, #vuejs, #frontend, #ux",
        image: "images/posts/post8.png"
    },
];

function Feed() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post}/>
                ))
            }
        </div>
    )
}

export default Feed;