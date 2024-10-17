import React from 'react';
import {Helmet} from "react-helmet-async";

const Title = ({title="Chatty",description="A chat app to communicate with friends and to make new friends"}) => {
  return (
    <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    </Helmet>
  )
}

export default Title