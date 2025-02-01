import React from 'react';
import { ClipLoader } from 'react-spinners';


const Loading = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <ClipLoader color="#36D7B7" size={50} /> {/* Loading spinner */}
  </div>
  );
};

export default Loading;