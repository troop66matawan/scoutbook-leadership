class ScoutbookLeadershipPosition {
    constructor(position,startDate,endDate) {
        this._position = position;
        this.startDate = startDate;
        this.endDate = endDate;
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
        if (value === undefined) {
            value = '';
        }
        this._startDate = value;
    }

    get endDate() {
        return this._endDate;
    }

    set endDate(value) {
        if (value === undefined) {
            value = '';
        }
        this._endDate = value;
    }

}

module.exports = ScoutbookLeadershipPosition;