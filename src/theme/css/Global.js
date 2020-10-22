import styled from 'styled-components';
import { Theme } from './theme';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Container = styled.div`
  max-width: 1450px;
  width: 100%;
`;
export const DashBoardBodyContainer = styled.div`
  padding-left: 270px;
  margin-top: 100px;
`;

export const BodyContainer = styled.div`
  min-height: calc(100vh - 83px - 83px);
`;

/* Forms Control */
export const Input = styled.input`
  display: block;
  width: ${(props) => (props.editable ? 'calc(100% - 65px)' : '100%')};
  height: calc(1.5em + 1.3rem + 2px);
  padding: 1.2rem 1rem 0.65rem 1rem;
  font-weight: ${Theme['$font-w-400']};
  line-height: 1.5;
  font-size: ${Theme['$base-f-size']};
  color: ${Theme['$gray-90']};
  background-color: ${Theme['$a-white']};
  border: 1px solid ${Theme['$gray-5']};
  background-clip: padding-box;
  border-radius: 4px;
  -webkit-transition: border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:active {
    box-shadow: none !important;
  }

  &:focus {
    box-shadow: none !important;
    color: ${Theme['$gray-90']};
    background-color: ${Theme['$a-white']};
    border-color: ${Theme['$light-blue']};
    outline: 0;
  }

  &:disabled {
    background-color: transparent;
    opacity: 1;
    border-color: ${Theme['$gray-4']};
  }

  &[readonly] {
    background-color: #e9ecef;
    opacity: 1;
    border-color: ${Theme['$gray-4']};
  }
  .input-text {
    padding: 10px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  font-weight: ${Theme['$font-w-400']};
  color: ${Theme['$gray-80']};
  text-align: center;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.65rem 1rem;
  font-size: ${Theme['$base-f-size']};
  line-height: 1.5;
  border-radius: 0.25rem;
  -webkit-transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &.btn-primary {
    color: ${Theme['$a-white']};
    background-color: ${Theme['$primary-color']} !important;
    border-color: ${Theme['$primary-color']} !important;

    &:active {
      color: ${Theme['$a-white']};
      background-color: ${Theme['$primary-color']};
      border-color: ${Theme['$primary-color']};
    }

    &:focus {
      color: ${Theme['$a-white']};
      background-color: $ ${Theme['$primary-color']};
      border-color: ${Theme['$primary-color']};
      box-shadow: none !important;
      outline: 0 !important;
    }

    &:hover {
      color: ${Theme['$a-white']};
      background-color: ${Theme['$primary-color']};
      border-color: ${Theme['$primary-color']};
    }

    &.update-photo {
      font-size: ${Theme['$base-f-size']};
      padding: 4px 10px;
      border-radius: 50%;
      background: ${Theme['$secondary-color']};
      color: ${Theme['$white']};
      border: 0;
      font-size: ${Theme['$medium-f-size']};
      position: absolute;
      top: 0;
      right: 10px;
    }
  }

  &.btn-success {
    color: ${Theme['$a-white']};
    background-color: ${Theme['$a-green']};
    border-color: ${Theme['$a-green']};

    &:active {
      color: ${Theme['$a-white']};
      background-color: ${Theme['$dark-green']} !important;
      border-color: ${Theme['$dark-green']} !important;
    }

    &:focus {
      color: ${Theme['$a-white']};
      background-color: ${Theme['$dark-green']} !important;
      border-color: ${Theme['$dark-green']} !important;
      box-shadow: none !important;
      outline: 0 !important;
    }

    &:hover {
      color: ${Theme['$a-white']};
      background-color: ${Theme['$dark-green']};
      border-color: ${Theme['$dark-green']};
    }
  }

  &.btn-light {
    background-color: ${Theme['$a-white']};
    color: ${Theme['$gray-30']};
    border-color: ${Theme['$gray-5']};

    &:active {
      color: ${Theme['$gray-90']};
      background-color: ${Theme['$gray-9']} !important;
      border-color: ${Theme['$gray-9']} !important;
    }

    &:focus {
      color: ${Theme['$gray-90']};
      background-color: ${Theme['$gray-9']} !important;
      border-color: ${Theme['$gray-9']} !important;
      box-shadow: none !important;
      outline: 0 !important;
    }

    &:hover {
      color: ${Theme['$gray-90']};
      background-color: ${Theme['$gray-9']};
      border-color: ${Theme['$gray-9']};
    }
  }

  &.btn-danger {
    color: ${Theme['$a-white']};
    background-color: ${Theme['$a-red']};
    border-color: ${Theme['$a-red']};

    &:active {
      color: ${Theme['$a-white']};
      background-color: ${Theme['$dark-red']} !important;
      border-color: ${Theme['$dark-red']} !important;
    }

    &:focus {
      color: ${Theme['$a-white']};
      background-color: ${Theme['$dark-red']} !important;
      border-color: ${Theme['$dark-red']} !important;
      box-shadow: none !important;
      outline: 0 !important;
    }

    &:hover {
      color: ${Theme['$a-white']};
      background-color: ${Theme['$dark-red']};
      border-color: ${Theme['$dark-red']};
    }
  }
`;

export const CheckBoxInput = styled.div`
  label {
    display: inline-block;
    margin: 0 1px 15px 0;
    font-size: ${Theme['$base-f-size']};
    color: ${Theme['$gray-90']};
    background-color: ${Theme['$gray-1']};
    border: 1px solid ${Theme['$gray-5']};
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 6px;
    -webkit-transition: background-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    transition: background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    min-width: 100px;
    max-width: 200px;
    text-transform: capitalize;
    text- &:hover {
      border-color: ${Theme['$primary-color']};
    }

    &.small-box {
      min-width: 80px;
      font-size: ${Theme['$small-f-size']};
      padding: 7px 10px;
      text-align: center;
    }
  }

  input[type='checkbox']:checked ~ label {
    background: ${Theme['$primary-color']};
    color: ${Theme['$a-white']};
    border-color: ${Theme['$primary-color']};
  }

  input[type='checkbox'] {
    opacity: 0;
  }
`;

export const Link = styled.span`
  color: ${Theme['$primary-color']};
  cursor: pointer;

  &:hover {
    color: ${Theme['$secondary-color']};
  }
`;

export const PageTitle = styled.h2`
  font-size: ${Theme['$panel-title-f-size']};
  text-transform: uppercase;
  font-weight: ${Theme['$font-w-300']};
  color: ${Theme['$light-blue']};
`;

export const SectionTitle = styled.h3`
  font-size: ${Theme['$medium-f-size']};
  font-weight: ${Theme['$font-w-300']};
`;
export const CardBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: ${Theme['$a-white']};
  background-clip: border-box;
  border: ${Theme['$base-shadow']};
  border-radius: 0.25rem;

  .user-login {
    img {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      margin: 0 auto;
      border: 1px solid ${Theme['$gray-9']};
    }
  }

  .member-login {
    max-width: 400px;
    margin: 0 auto;
    width: 100%;
  }

  .forgot-link {
    font-size: ${Theme['$small-f-size']};
    text-decoration: underline;
    cursor: pointer;
  }

  .number-data {
    margin: 0 auto;
    width: 50%;
    .label {
      margin: 0 auto;
      max-width: 90px;
    }
  }

  .number-input {
    padding: 2.2rem 1rem 1.65rem 1rem;
    text-align: center;
    font-size: ${Theme['$large-f-size']};
    font-weight: ${Theme['$font-w-500']};
  }
`;

export const FormField = styled.div`
  label {
    margin: 0 0 0 10px;
    font-size: ${Theme['$base-f-size']};
    position: relative;
    padding: 3px 0px;
    border-radius: 4px;
  }
  .rbt-input-multi {
    height: auto !important;
  }
`;

export const ErrorLabel = styled.div`
  color: #9d323a;
  font-size: ${Theme['$small-f-size']};
  padding: 0;
  margin: 0 0 0 0;
`;
export const ButtonLoader = styled(CircularProgress)`
  margin: 0px 50px;
  color: white !important;
`;
export const WhitePanel = styled.div`
  padding-top: 20px;

  .body-whitepanel {
    background-color: ${Theme['$a-white']};
    padding: 30px;

    .name-id {
        font-size: ${Theme['$medium-f-size']};
        font-weight: bold;
        text-transform: uppercase;
        span {
          font-weight: ${Theme['$font-w-500']};
          text-transform: capitalize;
          font-size: ${Theme['$e-small-f-size']};
        }
      }
    .side-profile {
      background:  ${Theme['$gray-60']};
      padding: 10px;
      border-radius: 20px;

      .profile-img {
        border-radius: 50%;
        width: 126px;
        height: 125px;
        border: 2px solid ${Theme['$a-white']};
      }

      .profile-container {
        max-width: 250px;
        margin: 0 auto;
        width: 100%;
      }

      .company-name {
        font-size: ${Theme['$small-f-size']};
        font-weight: ${Theme['$font-w-300']};
        color:  ${Theme['$base-40']};
      }

      .grey-line {
        height: 0.1rem !important;
        background: ${Theme['$gray-11']}; !important;
        margin: 15px 0;
      }

      .status {
        font-size: ${Theme['$small-f-size']};
        text-transform: capitalize;
        font-weight: ${Theme['$font-w-500']};
      }

    }
    .right-member {
      border: 1px solid ${Theme['$base-color']};
      padding: 10px 20px;
    }
    .details-profile {
      font-size: ${Theme['$base-f-size']};
      max-width: 230px;
    }

    .label {
      font-weight: ${Theme['$font-w-700']};
      font-size: ${Theme['$small-f-size']};
      color: ${Theme['$base-30']};
      margin-bottom: 12px;

      span {
        font-weight: ${Theme['$font-w-300']};
        color: ${Theme['$base-70']};

        &.edit-details {
          color: ${Theme['$a-green']};
          i {
            display: none;
          }

          &:hover {
            cursor: pointer;
             i {
            display: block;
          }

          }
        }
      }
    }

    .yield-text {
      color: ${Theme['$gray-11']}; 
      font-size: ${Theme['$e-small-f-size']};
      font-weight: ${Theme['$font-w-700']};
    }

    .quantity-number {
      font-size: ${Theme['$e-medium-f-size']};
      font-weight: ${Theme['$font-w-700']};
      color: ${Theme['$base-20']}; 

      &.green {
         color: ${Theme['$a-green']}; 
      }
    }
    .product-title {
      font-size: 22px;
      font-weight: ${Theme['$font-w-700']};
      span {
        font-size: ${Theme['$small-f-size']};
      }
    }
    h4 {
      .fa-heart-o {
        font-size: 20px;
        color: ${Theme['$gray-10']};
      }
    }
    h3 {
      .fa-pencil {
        color: ${Theme['$gray-10']};
      }
    }

    .gray-heading {
      font-size: ${Theme['$small-f-size']};
      text-transform: uppercase;
       font-weight: ${Theme['$font-w-300']};
      }
    .carousel-indicators {
      top: 180px;
      li {
        width: 50px;
        height: 40px;
        border: 1px solid ${Theme['$gray-40']};
        background-image: url('flower.jpg');
        img {
          width: 30px;
          height: 30px;
        }
      }
    }
    .carousel-inner {
      .carousel-item {
        height: 180px;
      }
    }
    .contact-user-profile {
      width: 55px;
      height: 55px;
      border-radius: 50%;
      border: 1px solid ${Theme['$gray-5']};
    }

    .nav-tabs {
          border-bottom: 2px solid #dee2e6;
          padding-bottom: 15px;
      li{
        
        margin-left: 80px;

        .active {
          border-bottom: 3px solid ${Theme['$gray-50']};
        }
        a{
         padding: 15px;
          &:focus {
            border-bottom: 3px solid${Theme['$gray-50']};
            font-weight: 500;
            color: ${Theme['$gray-50']};
          }
          &:hover {
            border-bottom: 3px solid ${Theme['$gray-50']};
            font-weight: 500;
            color: ${Theme['$gray-50']};
          }
        }
        
   
      }
    }
  }
`;

export const Table = styled.div`
  .table {
    font-size: ${Theme['$small-f-size']};
    border-bottom: 1px solid #ddd;
    &.table-borderless {
      border-bottom: none;
    }

    thead {
      tr {
        th {
          vertical-align: middle;
          font-weight: 400;
          border-top: none;

          &.table-heading {
            font-weight: 700;
            text-align: center;
          }
          .selection {
            border-radius: 4px;
            background: ${Theme['$primary-color']};
            color: ${Theme['$a-white']};
            text-align: center;
            padding: 3px 0;
          }
          .dropdown-toggle {
            font-size: ${Theme['$small-f-size']};
          }
        }
      }
    }
    tbody {
      tr {
        cursor: pointer;
      }
      td {
        vertical-align: middle;
        font-size: ${Theme['$small-f-size']};
        .fa-check-circle {
          font-size: ${Theme['$medium-f-size']};
          color: ${Theme['$primary-color']};
        }
        .fa-times {
          font-size: ${Theme['$medium-f-size']};
          color: ${Theme['$gray-10']};
        }
      }
      .borderless th,
      .borderless td {
        border: none;
      }
    }
    .inner-body {
      td {
        font-size: ${Theme['$e-small-f-size']};
        color: ${Theme['$gray-10']};
      }
    }
  }
`;
export const TableBody = styled.div`
  box-shadow: ${Theme['$base-shadow']};
  background-color: ${Theme['$a-white']};
  padding: 20px;

  .table-title {
    font-size: ${Theme['$large-f-size']};
    text-transform: uppercase;

    span {
      font-size: ${Theme['$small-f-size']};
    }
  }
  .label-heading {
    font-weight: ${Theme['$font-w-400']};
  }
`;

export const InnerTable = styled.div`
  background: #ffff;
  &.border-radius {
    border-radius: 7px;
    box-shadow: 0 0 7px 6px rgba(82, 63, 105, 0.05);
    padding: 4px;
  }
  .table {
    font-size: ${Theme['$e-small-f-size']};

    thead {
      tr {
        th {
          padding: 0.55rem;
          border-top: none;
          color: ${Theme['$gray-40']};
          font-weight: ${Theme['$font-w-400']};
          border-bottom: 1px solid ${Theme['$gray-4']};

          &.fa-ellipsis-v {
            color: ${Theme['$gray-40']};
          }
        }
      }
    }
    tbody {
      tr {
        td {
          padding: 0.6rem;
          color: ${Theme['$gray-10']};
          border-bottom: 1px solid ${Theme['$gray-4']};
        }
      }
    }
  }
`;
export const CheckBox = styled.div`
  padding-left: 8px;

  .custom-checkbox .custom-control-label::before {
    border-radius: 2.25rem;
  }
  .custom-control-label::after {
    position: absolute;
    top: 0px;
    left: -2.5rem;
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    content: '';
  }
  .custom-control-label::before {
    position: absolute;
    top: 0px;
    left: -2.5rem;
    display: block;
    width: 1.2rem;
    height: 1.2rem;
  }
  .table-checkbox::after {
    top: 10px;
  }
  .table-checkbox::before {
    top: 10px;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 5px;
    border: 1px solid ${Theme['$gray-9']};
  }
  .checkbox-label {
    font-size: ${Theme['$small-f-size']};
    color: ${Theme['$base-30']};
    margin-bottom: 15px;
  }
`;

export const ProductItem = styled.div`
  .product-img {
    width: 60px;
    height: 55px;
    border: 1px solid ${Theme['$gray-5']};
    border-radius: 3px;
    
    img {
     width: 55px;
     height: 50px;
    }
  }
  .product-name {
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  ul {
    li.label-item {
      display: inline;
      margin-right: 10px;
      font-weight: ${Theme['$font-w-500']};
      font-size: ${Theme['$e-small-f-size']};


      span {
        font-weight: ${Theme['$font-w-300']};
      }
  }
`;

export const ModalBox = styled.div`


  &.sync-new-game {
    .modal-dialog {
      max-width: 620px;
    }
  }

  &.discover-friend {
    img  {
      &.friends-profile {
        width: 60px !important;
        height: 60px;
        border-radius: 50%;
      }
    }

    .friend-name {
      padding-top: 5px !important;


    }
   
   .follow-link {
        font-size: ${Theme['$small-f-size']};
    }
    .form-group {
      margin-bottom: 0;  

      .search-input {
        position: relative;
        padding-left: 37px;
      }

      .search-icon {
        position: absolute;
        z-index: 2;
        display: block;
        width: 2.375rem;
        height: 2.375rem;
        line-height: 2.375rem;
        text-align: center;
        pointer-events: none;
        color: ${Theme['$gray-60']};;
        font-size: ${Theme['$large-f-size']};;
      }
    }
  }

  &.game-details-modal {
    cursor: pointer;

    .modal-dialog {
      max-width: 800px;
    }

    .modal-body {
      color: ${Theme['$base-color']};
      font-weight :${Theme['$font-w-300']};
      font-family: ${Theme['$Title-font-family']};

       

      h6 {
        &.game-details-title {
          color: ${Theme['$primary-color']};
          margin: 20px 0;
        }
      }

      img {
       
        &.game-img-big {
          width: 224px;
        } 
      }
    }

  }

  .btn {
    &.btn-primary {
      padding: 7px 20px;
      border-radius: 3px;
      font-size: ${Theme['$base-f-size']};
      max-width: 170px;
      width: 100%;
    }

    &.btn-secondary {
      padding: 7px 20px;
      border-radius: 3px;
      font-size: ${Theme['$base-f-size']};
      max-width: 170px;
      width: 100%;
    }
  }


  .modal-header {
    padding: 15px 30px;
    border-bottom: 1px solid ${Theme['$gray-60']};

    h5 {
      color: ${Theme['$secondary-color']};
      margin: 0;
    }

    .close {
      color: ${Theme['$gray-80']};

      span {
        &:focus {
          outline: 0;
        }
      }

      &:focus {
        outline: 0;
        box-shadow: none;
      }
    }
  }

  .modal-body {
    padding:  20px 30px 30px;

    form.modal-form {          
      .form-group {
        margin-bottom: 0px;

        label {
          font-size: ${Theme['$base-f-size']};
          font-weight :${Theme['$font-w-300']};
          font-family: ${Theme['$Title-font-family']};
          /* color: ${Theme['$base-color']}; */
  
          &.css-label {
            margin-right: 10px;
          
  
            span {
              font-size: ${Theme['$small-f-size']};
              font-weight :${Theme['$font-w-300']};
              margin: 0 0 0 4px;
  
            }

            .game-label {
              font-size: ${Theme['$small-f-size']};
              font-weight :${Theme['$font-w-600']};
              margin-top: 4px;
            }

            .image-overlay {
              position: relative;
              cursor: pointer;

              img {
                &.game-img {
                  display: block;
                  width: 100%;
                  height: auto;
                }
              }
  
              .overlay {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                height: 100%;
                width: 100%;
                opacity: 0;
                transition: .5s ease;
                background-color: ${Theme['$primary-transparent']};

                i {
                  &.fa {
                    display: none;
                    font-size: ${Theme['$primary-title-f-size']};
                    color:  ${Theme['$white']};
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    -webkit-transform: translate(-50%, -50%);
                    -ms-transform: translate(-50%, -50%);
                    transform: translate(-50%, -50%);
                    text-align: center;
                  }
                }
              }

              &:hover {
                .overlay {
                  opacity: 1;
                }
              }
            }

            
          }
        }     
  
        input {
          &.form-control {
            width: 68%;                  
          }
        }
  
        input[type=radio].css-checkbox {
          display: none;
  
          &:checked + label.css-label {
            .overlay {
              opacity: 1;

              i {
                display: block;
              }
            }
          }
        }  

        .more-icon {
          font-size: 14px;
          color: ${Theme['$gray-100']}; 
          cursor: pointer;
          
          i {
            // background: ${Theme['$gray-30']}; 
            // border-radius: 50%;
            // padding: 7px 12px;
            font-size:16px;
            vertical-align: middle;
          }
        }

        .form-border{
          border-top: 1px solid #cecece;
        }
      }
      
      small {
        &.password-must-be {
          color: ${Theme['$gray-80']}; 
        }
      } 
    } 
  }
  &.change-password {
    .modal-dialog {
      max-width: 450px;

      .modal-header { 
        h5 {
          color: ${Theme['$secondary-color']} !important;    
        }
      }

      .modal-body {
        form {
          input {
            &.form-control {
              width: 100% !important;                  
            }
          }

          small {
            color: ${Theme['$gray-80']}; 
            font-size: ${Theme['$small-f-size']}; 
          }
        }
      }
    }    
  }
`;

export const PageHeading = styled.h2`
  font-size: ${Theme['$e-large-f-size']};
  text-transform: uppercase;
  font-weight: normal;
  letter-spacing: 1px;
`;
export const GrayBox = styled.div`
  background: ${Theme['$gray-60']};
  padding: 15px;

  border-radius: 8px;
`;
export const CostBox = styled.div`
  background: #ffff;
  border-radius: 15px;
  padding: 20px 0px 20px 10px;
  box-shadow: 0 0 7px 6px rgba(82, 63, 105, 0.05);

  .doller {
    width: 35px;
    height: 35px;
    border: 1px solid ${Theme['$gray-5']};
    text-align: center;
    border-radius: 50%;

    .fa-usd {
      background: ${Theme['$a-green']};
      color: ${Theme['$a-white']};
      margin-top: 10px;
      font-size: 9px;
      padding: 2px 4px;
      border-radius: 50%;

      &.red {
        background: ${Theme['$dark-red']};
      }
    }
  }
`;
export const ProfileImg = styled.div`
  position: relative;
  max-width: 126px;
  margin: 0 auto;
`;

export const ToggleButton = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: ${Theme['$primary-color']};
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
