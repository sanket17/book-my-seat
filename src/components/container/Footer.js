import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../theme/css/theme';

function FooterComponent() {
  return (
    <Footer>
      <div className="footer-container">
        <div className="row mt-5">
          <div className="col-12 text-center mt-4">
            {' '}
            Booking made more easy...
          </div>
        </div>
      </div>
    </Footer>
  );
}

const Footer = styled.div`
  background: ${Theme['$light-blue']};
  color: white;
  box-shadow: ${Theme['$base-shadow']};
  position: relative;
  z-index: 99;
  display: block;
  margin-top: 20px;
  height: 70px;

  .footer-container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    align-items: center;
  }

  .title-align {
    padding-left: 2%;
    font-size: ${Theme['$e-large-f-size']};
    width: 300px;
    padding-top: 1%;
  }

  .logo-section {
    cursor: pointer;
    position: relative;

    &:after {
      content: ' ';
      width: 100%;
      display: block;
      height: 1px;
    }

    .header-logo {
      width: 70px;
      float: left;
      margin-right: 10px;
    }

    .logo-title {
      font-size: ${Theme['$e-large-f-size']};
      text-transform: uppercase;
      color: ${Theme['$light-yellow']};
      letter-spacing: 5px;
    }

    .logo-subtitle {
      font-size: ${Theme['$e-small-f-size']};
      color: ${Theme['$gray-30']};
      letter-spacing: 1px;
      text-transform: uppercase;
      padding-right: 5px;
    }
  }

    .header-button {
      border: 1px solid ${Theme['$secondary-color']};
      display: inline-block;
      padding: 2px 15px;
      background: ${Theme['$secondary-color']};
      color: ${Theme['$a-white']};
      border-radius: 5px;
      cursor: pointer;
      transition: ${Theme['$ease-effect']};

      &:hover {
        background: ${Theme['$primary-color']};
        border-color: ${Theme['$primary-color']};
      }
    }
  }

  .main-navigation {
    margin-top: 17px;

    li {
      display: inline-block;
      vertical-align: middle;
      padding: 0 8px;
    }
  }

  .dropdown-menu {
    padding: 0px;

    li {
      border-bottom: 1px solid silver;
    }
  }

  .form-group {
    width: 100%;
    margin-bottom: 0;

    .search-input {
      position: relative;
      padding-left: 37px;
      font-size: ${Theme['$small-f-size']};
    }

    .search-icon {
      position: absolute;
      z-index: 2;
      display: block;
      width: 2.375rem;
      line-height: 2.575rem;
      text-align: center;
      font-size: ${Theme['$e-medium-f-size']};
    }
  }
`;

export default FooterComponent;
