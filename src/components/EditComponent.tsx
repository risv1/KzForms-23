import React, {useState} from 'react';
import classes from './EditComponent.module.css';

interface EditLayoutProps {};

const EditLayout: React.FC<EditLayoutProps> = ({}) => {
    
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        
    }

  return (
      <form className={classes.edit_form} onSubmit={submitHandler}>
        <div className={classes.input_container}>
          <label className={classes.input_label} htmlFor="name">First Name</label>
          <input type="text" id="firstName" className={classes.input_field} placeholder="First Name"/>
        </div>
        
        <div className={classes.input_container}>
          <label className={classes.input_label} htmlFor="regno">Last Name</label>
          <input type="text" id="lastName" className={classes.input_field} placeholder="Last Name" />
        </div>
        <div className={classes.input_container}>
          <label className={classes.input_label} htmlFor="email">Age</label>
          <input type="number" id="age" className={classes.input_field} placeholder="Age"/>
        </div>
        
        <button className={classes.formButton}>Save</button>
      </form>
  );
};

export default EditLayout;
