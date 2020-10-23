import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from '../../theme/css/Global';

export default function MovieAccordianComponent({
  number,
  imgSrc,
  imgAlt,
  movieName,
  onChange,
}) {
  return (
    <AccordianHeader>
      <div className="panel panel-default header-button">
        <div className="panel-heading header-button">
          <h4 className="panel-title text-center">
            <a
              data-toggle="collapse"
              data-parent="#accordion"
              href={`#collapse${number}`}
              className=""
            >
              <div>
                <img href={imgSrc} alt={imgAlt} />
              </div>
              <div className="text-center">{movieName}</div>
            </a>
          </h4>
        </div>

        <div
          id={`collapse${number}`}
          className="panel-collapse collapse in panel-body-style"
        >
          <div className="panel-body">
            <div className="text-center mt-2">Select Show Time</div>
            <div className="m-sm-5 m-2">
              <div className="row">
                <div className="col-6 mb-2">
                  <Button
                    className="btn btn-primary"
                    onClick={() => onChange(movieName, '09:00 AM')}
                  >
                    09:00 AM
                  </Button>
                </div>
                <div className="col-6 mb-2">
                  <Button
                    className="btn btn-primary"
                    onClick={() => onChange(movieName, '12:00 PM')}
                  >
                    12:00 PM
                  </Button>
                </div>
                <div className="col-6 mb-2">
                  <Button
                    className="btn btn-primary"
                    onClick={() => onChange(movieName, '03:00 PM')}
                  >
                    03:00 PM
                  </Button>
                </div>
                <div className="col-6 mb-2">
                  <Button
                    className="btn btn-primary"
                    onClick={() => onChange(movieName, '06:00 PM')}
                  >
                    06:00 PM
                  </Button>
                </div>
                <div className="col-6 mb-2">
                  <Button
                    className="btn btn-primary"
                    onClick={() => onChange(movieName, '09:00 PM')}
                  >
                    09:00 PM
                  </Button>
                </div>
                <div className="col-6 mb-2">
                  <Button
                    className="btn btn-primary"
                    onClick={() => onChange(movieName, '11:00 PM')}
                  >
                    11:00 PM
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AccordianHeader>
  );
}

MovieAccordianComponent.propTypes = {
  number: PropTypes.number.isRequired,
  imgSrc: PropTypes.any.isRequired,
  imgAlt: PropTypes.string.isRequired,
  movieName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

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
