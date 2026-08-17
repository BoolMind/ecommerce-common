"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateToTimestamp = dateToTimestamp;
function dateToTimestamp(date) {
    return {
        seconds: Math.floor(date.getTime() / 1000),
        nanos: (date.getTime() % 1000) * 1000000,
    };
}
//# sourceMappingURL=timestamp.mapper.js.map