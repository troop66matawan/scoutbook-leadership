const ScoutbookLeadershipPosition = require('./ScoutbookLeadershipPosition');

class Leadership {
    constructor() {
        this._positions = [];
    }
    addPosition(value) {
        if (value instanceof ScoutbookLeadershipPosition) {
            this._positions.push(value);
        }
    }
    get positions(){
        return this._positions;
    }
}

module.exports = Leadership;