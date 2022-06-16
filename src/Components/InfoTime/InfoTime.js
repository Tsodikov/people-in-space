import moment from 'moment';
import Clock from 'react-live-clock';
import '../InfoLocared/infoLocated.scss';

export const InfoTime = ({date}) => {
    const formatDate = moment(new Date()).format("MMMM Do YYYY");
    return (
        <div className="info-container">
            <h1 className="info-header">Current UTC Time:</h1> 
            <div className='info-content-wrapper'> 
                <div className="info-content-time-date">
                    <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
                </div>
            </div>
            <div className='info-content-wrapper'>
                <p className="info-content-time-date">{formatDate}</p>
            </div>
        </div>
    )
}