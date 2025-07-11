import React from 'react';
import Layout from '../components/Layout';
import NotFound from '../components/Error'

function NotFound404 () {
  
  return (
    <Layout videoUrl="https://res.cloudinary.com/deh41xzpo/video/upload/v1752259053/vecteezy_a-white-robot-searching-for-a-404-error-with-a-torch-light_8249822_i6quin.mp4">
      <div>
        <NotFound></NotFound>
      </div>
    </Layout>
  );
}

export default NotFound404;
