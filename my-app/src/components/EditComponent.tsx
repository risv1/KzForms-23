import { FC } from 'react'
import Edit from './Edit';
import { useParams } from 'react-router-dom';

const EditComponent: FC= () => {

    const { id } = useParams();
    return (
        <>
            <Edit id={id || ''} />
        </>
    );
}

export default (EditComponent);