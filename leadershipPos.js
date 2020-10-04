class ScoutbookLeadershipPosition {
    constructor(position,startDate,endDate) {
        this._position = position;
        this._startDate = startDate;
        this._endDate = endDate;
    }

    get position() {
        return this._position;
    }

    set position(value) {
        this._position = value;
    }

    get startDate() {
        return this._startDate;
    }

    set startDate(value) {
        this._startDate = value;
    }

    get endDate() {
        return this._endDate;
    }

    set endDate(value) {
        this._endDate = value;
    }

}

module.exports = ScoutbookLeadershipPosition;