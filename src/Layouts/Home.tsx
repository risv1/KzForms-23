import { FC } from 'react';
import ContactList from '../components/ContactList';
import {Route, useNavigate} from 'react-router-dom';
import ContactValues from '../constants/ContactValues';
interface HomeProps {}
const Home: FC<{item: ContactValues}> = (props) => {
    const navigate = useNavigate();
    const goToNewPage = () => {
        console.log('helo');
        navigate('/contacts/new');
    };
    return (
        <>
            <button onClick={goToNewPage}>New</button>
            <ContactList rows={props.item.rows} columns={props.item.columns}/>
        </>
    );
};

export default Home;
