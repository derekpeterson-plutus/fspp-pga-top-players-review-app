import './Modal.scss';
import React from 'react';
import Login from '../login/Login';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ showModal, setShowModal }) => {
  
  return (
    <div className="modal" style={{"display": showModal ? "block" : "none"}}>
      <div className="modal__header">
        <div>Log In</div>
        <div onClick={() => setShowModal(false)}><FaTimes /></div>
      </div>
      <div className="modal__content">
        <Login />
      </div>
    </div>
  )
};

export default Modal;