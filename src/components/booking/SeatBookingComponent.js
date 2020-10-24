import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ToastsStore } from 'react-toasts';
import {
  CardBox,
  PageTitle,
  Button,
  CheckBoxInput,
} from '../../theme/css/Global';

export default function SeatbookingComponent({ history, location }) {
  const [seat, setSeat] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState([]);
  const [reserved, setReserved] = useState([]);
  const [ticketPrice, setTicketPrice] = useState(0);

  const normalPrice = Number(process.env.REACT_APP_NORMAL_PRICE);
  const glassPrice = Number(process.env.REACT_APP_GLASS_PRICE);

  useEffect(() => {
    if (isLoading && seat.length === 0) {
      const normalCount = Number(process.env.REACT_APP_NORMAL_COUNT);
      const glassCount = Number(process.env.REACT_APP_GLASS_COUNT);

      const totalRow = Math.floor((normalCount + glassCount) / 10);
      const lastRow = (normalCount + glassCount) % 10;
      let startingLetter = 'A';
      let currSeat = [];
      let normal = normalCount;
      for (let i = 0; i < totalRow; i += 1) {
        if (i !== 0) {
          startingLetter = String.fromCharCode(startingLetter.charCodeAt() + 1);
        }
        const rowObj = [];
        for (let j = 0; j < 10; j += 1) {
          rowObj.push({
            name: `${startingLetter}${j + 1}`,
            isNormal: normal !== 0,
          });
          if (normal !== 0) {
            normal -= 1;
          }
        }
        currSeat = [...currSeat, [...rowObj]];
      }
      startingLetter = String.fromCharCode(startingLetter.charCodeAt() + 1);
      const rowObj = [];
      for (let i = 0; i < lastRow; i += 1) {
        rowObj.push({
          name: `${startingLetter}${i + 1}`,
          isNormal: normal !== 0,
        });
        if (normal !== 0) {
          normal -= 1;
        }
      }
      currSeat = [...currSeat, [...rowObj]];
      setSeat(currSeat);
      setIsLoading(false);
    }
  }, [isLoading, seat]);

  const handleChange = (element) => {
    let selectedArr = selected;
    if (selected.includes(element.name)) {
      const index = selectedArr.indexOf(element.name);
      selectedArr.splice(index, 1);
      if (element.isNormal) {
        setTicketPrice(ticketPrice - normalPrice);
      } else {
        setTicketPrice(ticketPrice - glassPrice);
      }
      setSelected([...selectedArr]);
    } else {
      if (selectedArr.length === 5) {
        ToastsStore.warning('Cannot select more than 5 seats.');
      } else {
        if (element.isNormal) {
          setTicketPrice(ticketPrice + normalPrice);
        } else {
          setTicketPrice(ticketPrice + glassPrice);
        }
        setSelected([...selectedArr, element.name]);
      }
    }
  };

  const getClassName = (ele) => {
    if (selected.includes(ele.name)) return 'small-box mr-3 selected';
    if (reserved.includes(ele.name)) return 'small-box mr-3 reserved';
    if (!ele.isNormal) return 'small-box mr-3 gold';
    return 'small-box mr-3';
  };

  const getCheckedValue = (name) => {
    if (selected.includes(name)) return true;
    if (reserved.includes(name)) return true;
    return false;
  };

  const getDisabledValue = (name) => {
    if (reserved.includes(name)) return true;
    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault(true);
    history.push({
      pathname: '/confirm',
      state: {
        movieName: location.state.movieName,
        showTime: location.state.timing,
        price: Number(ticketPrice),
        seats: [...selected],
      },
    });
  };

  return (
    <>
      <div style={{ width: '99%', paddingLeft: '1%' }}>
        <PageTitle className="pt-5 pb-4 text-center">Book Your Seat</PageTitle>
        <div className="row justify-content-md-center mr-0 ml-0">
          <div className="col-md-10">
            <CardBox>
              <TableDiv>
                <div className="row mt-5">
                  <div className="col-3 text-center">
                    <CheckBoxInput>
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="normal"
                        disabled
                      />
                      <label className="small-box mr-3" htmlFor="normal">
                        Normal 3D
                      </label>
                    </CheckBoxInput>
                  </div>
                  <div className="col-3 text-center">
                    <CheckBoxInput>
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="gold"
                        disabled
                      />
                      <label className="small-box mr-3 gold" htmlFor="normal">
                        Glass 3D
                      </label>
                    </CheckBoxInput>
                  </div>
                  <div className="col-3 text-center">
                    <CheckBoxInput>
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="selected"
                        disabled
                      />
                      <label
                        className="small-box mr-3 selected"
                        htmlFor="selected"
                      >
                        Selected
                      </label>
                    </CheckBoxInput>
                  </div>
                  <div className="col-3 text-center">
                    <CheckBoxInput>
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="reserved"
                        disabled
                      />
                      <label
                        className="small-box mr-3 reserved"
                        htmlFor="reserved"
                      >
                        Reserved
                      </label>
                    </CheckBoxInput>
                  </div>
                </div>
              </TableDiv>
              <div>
                <legend className="text-center mt-5 mb-5">
                  Here is your screen..
                </legend>
              </div>
              {seat.length !== 0 ? (
                <TableDiv>
                  <table className="table-spacing">
                    <tbody>
                      {seat.map((row, index) => (
                        <tr key={index}>
                          {row.map((element) => (
                            <td key={element.name}>
                              <CheckBoxInput>
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id={element.name}
                                  onChange={() => handleChange(element)}
                                  checked={getCheckedValue(element.name)}
                                  disabled={getDisabledValue(element.name)}
                                />
                                <label
                                  className={getClassName(element)}
                                  htmlFor={element.name}
                                >
                                  {element.name}
                                </label>
                              </CheckBoxInput>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </TableDiv>
              ) : (
                ''
              )}
            </CardBox>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-6">
            <Button
              className="btn btn-primary pull-right"
              onClick={handleSubmit}
            >
              Confirm Booking
            </Button>
          </div>
          <div className="col-6">
            <Button className="btn btn-light">Cancel</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export const TableDiv = styled.div`
  .table-spacing {
    margin: 0 auto;
  }

  .selected {
    background-color: green !important;
  }

  .reserved {
    background-color: red !important;
  }

  .gold {
    background-color: yellow !important;
  }
`;

SeatbookingComponent.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      movieName: PropTypes.string.isRequired,
      timing: PropTypes.string.isRequired,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
