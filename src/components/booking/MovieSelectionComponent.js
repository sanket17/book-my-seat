import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CardBox, PageTitle, Button } from '../../theme/css/Global';
import kfg from '../../theme/images/KGF.jpg';
import ChaalangImg from '../../theme/images/Chhalaang.jpg';
import GrayHoundImg from '../../theme/images/greyhound.jpg';
import MovieAccordianComponent from './MovieAccordianComponent';

export default function MovieSelectionComponent({ history }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleOnChange = (name, timing) => {
    setSelectedMovie(name);
    setSelectedTime(timing);
  };

  const handleSubmit = (event) => {
    event.preventDefault(true);
    history.push({
      pathname: '/book',
      state: {
        movieName: selectedMovie,
        timing: selectedTime,
      },
    });
  };
  return (
    <>
      <PageTitle className="pt-5 pb-4 text-center">Select Your show</PageTitle>
      <div className="row justify-content-md-center mr-0 ml-0">
        <CardBox>
          <div className="panel-group" id="accordion">
            <div className="row">
              <div className="col-4">
                <MovieAccordianComponent
                  number={1}
                  imgSrc={kfg}
                  imgAlt="kgf-2"
                  movieName="KGF Chapter-2"
                  onChange={handleOnChange}
                />
              </div>
              <div className="col-4">
                <MovieAccordianComponent
                  number={2}
                  imgSrc={ChaalangImg}
                  imgAlt="chaalang"
                  movieName="Chaalang"
                  onChange={handleOnChange}
                />
              </div>
              <div className="col-4">
                <MovieAccordianComponent
                  number={3}
                  imgSrc={GrayHoundImg}
                  imgAlt="greyhound"
                  movieName="GreyHound"
                  onChange={handleOnChange}
                />
              </div>
            </div>
          </div>
        </CardBox>
      </div>

      <div className="row" style={{ marginTop: '400px' }}>
        <div className="col-6">
          {selectedMovie && selectedTime ? (
            <div className="row">
              <div className="col-12">
                <h4 className="pull-right">Movie Selected: {selectedMovie}</h4>
              </div>
              <div className="col-12">
                <h4 className="pull-right">Timing: {selectedTime}</h4>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="col-6">
          <Button
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={selectedTime === null}
          >
            Book your seat
          </Button>
        </div>
      </div>
    </>
  );
}

export const AccordianHeader = styled.div`
  .header-button {
    height: 200px;
    width: 300px;
    border: 1px solid;
  }

  .panel-body-style {
    height: 350px;
    width: 300px;
    border: 1px solid;
    background: white;
  }
`;

MovieSelectionComponent.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
