import React from 'react';
import PropTypes from 'prop-types';
import { CardBox, PageTitle, Button } from '../../theme/css/Global';

export default function BookingConfirmationComponent({ history, location }) {
  const onLogout = (event) => {
    event.preventDefault(true);
    history.push({
      pathname: '/',
    });
  };
  return (
    <>
      <PageTitle className="pt-5 pb-4 text-center">
        Booking Confirmation
      </PageTitle>
      <div className="row justify-content-md-center mr-0 ml-0">
        <div className="col-md-6">
          <CardBox>
            <div className="row">
              <div className="col-6">
                <h4>Movie Name : {location.state.movieName}</h4>
              </div>
              <div className="col-6">
                <h4>Show Time : {location.state.showTime}</h4>
              </div>
              <div className="col-6">
                <h4>Seat Number : {location.state.seats.toString()}</h4>
              </div>
              <div className="col-6">
                <h4>Total Price : {location.state.price}</h4>
              </div>
            </div>
          </CardBox>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-6">
          <Button
            className="btn btn-primary pull-right"
            onClick={() => history.push({ pathname: '/show' })}
          >
            Book More Show
          </Button>
        </div>
        <div className="col-6">
          <Button className="btn btn-light" onClick={onLogout}>
            Logout
          </Button>
        </div>
      </div>
    </>
  );
}

BookingConfirmationComponent.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      price: PropTypes.number.isRequired,
      movieName: PropTypes.string.isRequired,
      showTime: PropTypes.string.isRequired,
      seats: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
