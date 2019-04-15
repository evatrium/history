import {Eventer} from "../src/eventer";

export const makeTill = ()=>{

    const events = Eventer();

    const till = (it_happened) => {
        return new Promise(resolve => {
            events.on(it_happened, () => {
                resolve();
            })
        })
    };

    return {events, till};
};
