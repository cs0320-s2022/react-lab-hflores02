import TextBox from './TextBox';
import React, {useState} from 'react';
//@ts-ignore
import {AwesomeButton} from "react-awesome-button";
// @ts-ignore
import axios from 'axios';

function Horoscope() {
    const [sun, setSun] = useState("");
    const [moon, setMoon] = useState("");
    const [rising, setRising] = useState("");

    const [horoscope, setHoroscope] = useState(useState([]));

    const requestHoroscope = () => {
        const toSend = {
            sun: sun,
            moon: moon,
            rising: rising
    };
        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        //Install and import axios!
        axios.post('http://localhost:4567/horoscope', toSend, config)
            .then(response => {
                console.log(response.data);
                setHoroscope(response.data['horoscope']);
            })
            .catch(error => {
                console.log(error);
            });
    }


    return (
        <div className="Horoscope">
            <header className="Horoscope-header">
                <h1>Horoscope</h1>
            </header>
            <TextBox label={"Sun Sign"} change={setSun}/>
            <TextBox label={"Moon Sign"} change={setMoon}/>
            <TextBox label={"Rising Sign"} change={setRising}/>
            <AwesomeButton onPress={requestHoroscope} type="primary">Submit</AwesomeButton>
            <br></br>
            {horoscope.map(e => <p>{e}</p>)}
        </div>
    );
}

export default Horoscope;
