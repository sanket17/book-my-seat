import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { MagicSpinner } from 'react-spinners-kit';

const Loader = (props) => {
  const { size, loading } = props;

  const { message } = useSelector((state) => ({
    message: state.commonState.loaderMessage,
  }));

  return (
    <LoaderOuter>
      <MagicSpinner size={size} color="#1B454B" loading={loading} />
      {message !== null ? (
        <div className="mt-5">
          <h5>{message}</h5>
        </div>
      ) : (
        ''
      )}
    </LoaderOuter>
  );
};

const LoaderOuter = styled.div`
  text-align: center;
  text-align: -webkit-center;
  text-align: -moz-center;
  padding: 0;
  vertical-align: middle;
  width: 100%;
  height: 100%;
  min-height: 400px;
  margin-top: 200px;
`;

export default Loader;
