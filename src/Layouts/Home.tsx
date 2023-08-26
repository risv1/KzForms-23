import { FC, useState, useEffect} from 'react';
import classes from './Home.module.css';
import ContactList from '../components/ContactList';
import { useLoaderData, useNavigate} from 'react-router-dom';
import ContactModel from '../models/ContactModel';
import ContactValues from '../constants/ContactValues';
interface HomeProps {}
const Home: FC<{item: ContactValues}> = (props) => {
    const navigate = useNavigate();
    const loadedData = useLoaderData();
    let contactLoadedData: ContactModel[];
    contactLoadedData = loadedData as ContactModel[];

    const goToNewPage = () => {
        navigate('/contacts/new');
    };
    return (
        <>
            <div className={classes.alignedMid}>
                <div></div>
                <button className={classes.newButton} onClick={goToNewPage}>
                    New
                </button>
            </div>
            <div>
                <ContactList rows={contactLoadedData} columns={props.item.columns} />
            </div>
        </>
    );
};

export default Home;
export async function contactLoader() {
    const response = await fetch('http://localhost:8080/api/contacts');
    const resData = await response.json();
    return resData.contactData;
}