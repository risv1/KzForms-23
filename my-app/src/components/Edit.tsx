import { FC, useEffect, useState, useRef } from 'react';
import { Form,  useNavigate, useParams } from 'react-router-dom';
import classes from './NewComponent.module.css';
import ContactModel from '../models/ContactModel';

interface EditProps {
    id: string;
}
const Edit: FC<EditProps> = ({ id }) => {
    const params = useParams();
    const goToPage = useNavigate();
    const [data, setData] = useState<ContactModel>({
        id: '',
        regno: '',
        lastName: '',
        firstName: '',
        age: 0,
        email: '',
        github: ''
    });

    const onSave = async() => {
       await fetch('http://localhost:8080/api/contacts/'+params.id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // console.log('visu in edit');
    goToPage('/contacts/list');
}
    

    const firstNameInputRef = useRef<HTMLInputElement>(null);
    const lastNameInputRef = useRef<HTMLInputElement>(null);
    const ageInputRef = useRef<HTMLInputElement>(null);
    const regnoInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const githubInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (firstNameInputRef.current) {
            firstNameInputRef.current.value = data.firstName;
        }
        if (lastNameInputRef.current) {
            lastNameInputRef.current.value = data.lastName;
        }
        if (ageInputRef.current) {
            ageInputRef.current.value = data.age.toString();
        }
        if (regnoInputRef.current) {
            regnoInputRef.current.value = data.regno.toString();
        }
        if (emailInputRef.current) {
            emailInputRef.current.value = data.email;
        }
        if (githubInputRef.current) {
            githubInputRef.current.value = data.github;
        }
    }, [data]);

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };


    useEffect(() => {
        console.log(params.id);
        fetch(`http://localhost:8080/api/contacts/${params.id}`)
            .then((res) => res.json())
            .then((data) => setData(data.reqData));
    }, []);

    return (
        <div className={classes.form_div}>
            <Form className={classes.edit_form} method="put">
                <div>
                    <h2>Enter</h2>
                </div>
                <div className={classes.input_container}>
                    <label className={classes.input_label} htmlFor="name" >
                        First Name
                    </label>
                    <input ref={firstNameInputRef} type="text" name="firstName" className={classes.input_field} placeholder="First Name" value={data.firstName} onChange={changeHandler} />
                </div>

                <div className={classes.input_container}>
                    <label className={classes.input_label} htmlFor="lastName">
                        Last Name
                    </label>
                    <input ref={lastNameInputRef} type="text" name="lastName" className={classes.input_field} placeholder="Last Name" value={data.lastName} onChange={changeHandler} />
                </div>
                <div className={classes.input_container}>
                    <label className={classes.input_label} htmlFor="age">
                        Age
                    </label>
                    <input ref={ageInputRef} type="number" name="age" className={classes.input_field} placeholder="Age" value={data.age} onChange={changeHandler}/>
                </div>

                <div className={classes.input_container}>
                    <label className={classes.input_label} htmlFor="regno">
                        Registration Number
                    </label>
                    <input ref={regnoInputRef} type="text" name="regno" className={classes.input_field} placeholder="Registration Number" value={data.regno} onChange={changeHandler} />
                </div>
                <div className={classes.input_container}>
                    <label className={classes.input_label} htmlFor="email">
                        Email
                    </label>
                    <input ref={emailInputRef} type="email" name="email" className={classes.input_field} placeholder="Email" value={data.email} onChange={changeHandler} />
                </div>
                <div className={classes.input_container}>
                    <label className={classes.input_label} htmlFor="github">
                        Github
                    </label>
                    <input ref={githubInputRef} type="text" name="github" className={classes.input_field} placeholder="https://github.com/profile" value={data.github} onChange={changeHandler} />
                </div>
                <div>
                    <button onClick={onSave} className={classes.formButton}>Save</button>
                </div>
            </Form>
        </div>
    );
};

export default Edit;
