import { useEffect, useState } from "react";

const Time = () => {
    const [time, setTime] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(time + 4);
        }, 4000);
        return () => {clearInterval(timer);};
    }, [time]);
    return ( <div><h1>{time}</h1></div>);

}
export default Time;