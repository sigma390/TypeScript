//enums 

enum orderstat{
    pending,
    shipped = 56,
    delivered,
    retured
}

console.log(orderstat.pending) //0
console.log(orderstat.shipped)//56
console.log(orderstat.delivered)//57