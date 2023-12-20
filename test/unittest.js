const { it } = require("node:test");

describe('Always True Test', () => {
    it('should always pass', () => {
        const alwaysTrue = true;

        if (!alwaysTrue){
            throw new Error('Test failed!')
        }
    });
});