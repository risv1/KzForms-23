import React from 'react';
import {Form, redirect} from 'react-router-dom';
import classes from './NewComponent.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface EditLayoutProps {};

const NewComponent: React.FC = ({}) => {
  return (
      <div className={classes.form_div}>
          <br />
          <Form className="ml-auto form-inline" method="post">
              <div className="row mb-3">
                  <div className={`col-md-6 {classes.input_container} form-group`}>
                      <label className={classes.input_label} htmlFor="name">
                          First Name
                      </label>
                      <input type="text" name="firstName" className={`${classes.input_field} form-control col-md-6`} placeholder="First Name" />
                  </div>

                  <div className={`col-md-6 {classes.input_container} form-group`}>
                      <label className={classes.input_label} htmlFor="lastName">
                          Last Name
                      </label>
                      <input type="text" name="lastName" className={`${classes.input_field} form-control`} placeholder="Last Name" />
                  </div>
              </div>
              <div className={`{classes.input_container} form-group mb-3`}>
                  <label className={classes.input_label} htmlFor="age">
                      Age
                  </label>
                  <input type="number" name="age" className={`${classes.input_field} form-control`} placeholder="Age" />
              </div>

              <div className={`{classes.input_container} form-group mb-3`}>
                  <label className={classes.input_label} htmlFor="regno">
                      Registration Number
                  </label>
                  <input type="text" name="regno" className={`${classes.input_field} form-control`} placeholder="Registration Number" />
              </div>
              <div className="row">
                  <div className={`{classes.input_container} form-group col-md-6`}>
                      <label className={classes.input_label} htmlFor="email">
                          Email
                      </label>
                      <input type="email" name="email" className={`${classes.input_field} form-control`} placeholder="Email" />
                  </div>
                  <div className={`{classes.input_container} form-group col-md-6`}>
                      <label className={classes.input_label} htmlFor="github">
                          Github
                      </label>
                      <input type="text" name="github" className={`${classes.input_field} form-control`} placeholder="https://github.com/profile" />
                  </div>
              </div>
              <button className="btn btn-outline-primary">Save</button>
              <br />
          </Form>
      </div>
  );
};

export default NewComponent;
export async function action({ request } : {request: Request}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData); //creates key value object like {body: '...', action:'..'}
    await fetch('http://localhost:8080/api/contacts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return redirect('/contacts/list');
}