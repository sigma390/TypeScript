"use strict";
var orderstat;
(function (orderstat) {
    orderstat[orderstat["pending"] = 0] = "pending";
    orderstat[orderstat["shipped"] = 56] = "shipped";
    orderstat[orderstat["delivered"] = 57] = "delivered";
    orderstat[orderstat["retured"] = 58] = "retured";
})(orderstat || (orderstat = {}));
console.log(orderstat.pending);
console.log(orderstat.shipped);
console.log(orderstat.delivered);
//# sourceMappingURL=enums.js.map