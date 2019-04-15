import {supportsHistory} from "../src/supportsHistory";

describe('supportsHistory', ()=>{
    it('should return a boolean', ()=>{
        expect(supportsHistory()).toBe(true);
    })
});