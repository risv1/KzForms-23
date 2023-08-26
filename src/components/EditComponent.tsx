import React from 'react';
import {Form, redirect} from 'react-router-dom';
import classes from './EditComponent.module.css';

interface EditLayoutProps {};

const EditLayout: React.FC<EditLayoutProps> = ({}) => {
  return (
      <div className={classes.form_div}>
          <Form className={classes.edit_form} method="post">
              <div className={classes.input_container}>
                  <label className={classes.input_label} htmlFor="name">
                      First Name
                  </label>
                  <input type="text" name="firstName" className={classes.input_field} placeholder="First Name" />
              </div>

              <div className={classes.input_container}>
                  <label className={classes.input_label} htmlFor="regno">
                      Last Name
                  </label>
                  <input type="text" name="lastName" className={classes.input_field} placeholder="Last Name" />
              </div>
              <div className={classes.input_container}>
                  <label className={classes.input_label} htmlFor="email">
                      Age
                  </label>
                  <input type="number" name="age" className={classes.input_field} placeholder="Age" />
              </div>

              <div className={classes.input_container}>
                  <label className={classes.input_label} htmlFor="regno">
                      Registration Number
                  </label>
                  <input type="text" name="regno" className={classes.input_field} placeholder="Registration Number" />
              </div>
              <div className={classes.input_container}>
                  <label className={classes.input_label} htmlFor="name">
                      Email
                  </label>
                  <input type="email" name="email" className={classes.input_field} placeholder="Email" />
              </div>
              <div className={classes.input_container}>
                  <label className={classes.input_label} htmlFor="name">
                      Github
                  </label>
                  <input type="text" name="github" className={classes.input_field} placeholder="https://github.com/profile" />
              </div>
              <div>
                  <button className={classes.formButton}>Save</button>
              </div>
          </Form>
      </div>
  );
};

export default EditLayout;
export async function action({ request } : {request: Request}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData); //creates key value object like {body: '...', action:'..'}
    console.log(formData);
    console.log(postData);
    await fetch('http://localhost:8080/api/contacts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return redirect('/contacts/list');
}