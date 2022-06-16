import { useEffect, useState } from 'react';
import './people.scss';
import '../InfoLocared/infoLocated.scss';

export const People = () => {

    const [people, setPeople] = useState();

    useEffect(() => {
        fetch('http://api.open-notify.org/astros.json')
        .then((responce) => {
            return responce.json();
        })
        .then(data => {
            setPeople(data.people.filter(item => item.craft === 'ISS'));
        })
    }, [])

    if (people) {
        return (
            <div className="people-container">
                <ul className="people-list">
                    {people.map(item => {
                        return <li className="people-item" key={item.name}>{item.name}</li>
                    })}
                </ul>
                <p className='info-header-black'>{`Total amount: ${people.length} people on ISS`}</p>
            </div>
        )
    }
}