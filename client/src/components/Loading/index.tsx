import React, { useState } from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
  const [noData, setNoData] = useState(false);

  setTimeout(() => {
    setNoData(true);
  }, 4000);

  return (
    <div>
      {noData ? (
        <h1>Nothing to display!</h1>
      ) : (
        <ReactLoading type={'bars'} color={'green'} height={300} width={175} />
      )}
    </div>
  );
};

export default Loading;
