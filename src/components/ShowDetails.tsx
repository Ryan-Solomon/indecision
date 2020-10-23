import React, { useState } from 'react';

function ShowDetails() {
  const [details, setDetails] = useState('These are details');
  const [show, setShow] = useState(false);

  return (
    <div>
      {show ? (
        <button onClick={() => setShow(false)}>Hide Details</button>
      ) : (
        <button onClick={() => setShow(true)}>Show Details</button>
      )}

      {show && <h2>{details}</h2>}
    </div>
  );
}

export default ShowDetails;
