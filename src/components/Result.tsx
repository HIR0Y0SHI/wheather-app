type ResultPropsType = {
    result: {
        country: string;
        cityName: string;
        temperature: string;
        conditionText: string;
        icon: string;
    }
}

const Result = (props: ResultPropsType) => {
    return (
        <div>
            {props.result.country && <div className="results-country">{props.result.country}</div>}
            {props.result.cityName && <div className="results-city">{props.result.cityName}</div>}
            {props.result.temperature && <div className="results-temp">{props.result.temperature}<span>°C</span></div>}

            {props.result.conditionText &&
                <div className="results-condition">
                    <img src={props.result.icon} alt="icon" />
                    <span>{props.result.conditionText}</span>
                </div>
            }
        </div>
    );
};

export default Result;