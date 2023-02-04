type FormPrppsType = {
    setCity: React.Dispatch<React.SetStateAction<string>>;
    getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = (props:FormPrppsType) => {

    return (
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="都市名" onChange={e => props.setCity(e.target.value)}/>
            <button type="submit">Get Wheather</button>
        </form>
    );
};

export default Form;