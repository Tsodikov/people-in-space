import './infoLocated.scss';

export const InfoLocated = ({coord}) => {
    return (
        <div className="info-container">
            <h1 className="info-header">ISS is now located at:</h1>
            <div className="info-content-wrapper">
                <p className="info-content">longitude</p>
                <p className="info-content">{`: ${coord.longitude}`}</p>
            </div>
            <div className="info-content-wrapper">
                <p className="info-content">latitude</p>
                <p className="info-content">{`: ${coord.latitude}`}</p>
            </div>
        </div>
    )
}