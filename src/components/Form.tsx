type FormPrppsType = {
    city: string;
    setCity: React.Dispatch<React.SetStateAction<string>>;
    getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({city, setCity, getWeather}:FormPrppsType) => {

    return (
        <form onSubmit={getWeather}>
            <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)} value={city} />
            <button type="submit">Get Wheather</button>
        </form>
    );
};

export default Form;