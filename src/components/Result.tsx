import { ResultStateType } from "../App";

type ResultPropsType = {
    result: ResultStateType;
}

const Result = ({result}: ResultPropsType) => {
    const {country, cityName, temperature, conditionText, icon} = result;
    return (
        <>
            {country && <div className="results-country">{country}</div>}
            {cityName && <div className="results-city">{cityName}</div>}
            {temperature && <div className="results-temp">{temperature}<span>°C</span></div>}

            {conditionText &&
                <div className="results-condition">
                    <img src={icon} alt="icon" />
                    <span>{conditionText}</span>
                </div>
            }
        </>
    );
};

export default Result;