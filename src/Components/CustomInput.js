import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import './MyDataPicker.css'

function CustomInput(props) {
    return (
      <div className="input-group">
        <label>Pick Due Date :</label>
        <input
          type="text"
          className="form-control"
          placeholder='Due Date'
          onClick={props.onClick}
          value={props.value}
          onChange={props.onChange}
        />
        <div className="input-group-append">
          <span className="input-group-icon">
            <FaCalendarAlt 
            onClick={props.onClick}
            value={props.value}
            onChange={props.onChange}/>
          </span>
        </div>
      </div>
    );
  }

  export default CustomInput;