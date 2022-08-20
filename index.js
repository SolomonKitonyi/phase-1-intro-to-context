// Your code here
function createEmployeeRecord(arr) {
    let employee = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: [] 
    }
    return employee;
}

function createEmployeeRecords(arr) {
    let records = arr.map(element => {
        return createEmployeeRecord(element);
    });
    return records
}
function createTimeInEvent(obj,timeStamp) {
    let newObj = createEmployeeRecord(obj)
    newObj.timeInEvents.push( {
        type: "TimeIn",
        hour: parseInt(timeStamp.split(" ")[1]),
        date : timeStamp.split(" ")[0]
    })
    return newObj
}
function createTimeOutEvent(obj,timeStamp) {
    let newObj = createEmployeeRecord(obj)
    newObj.timeOutEvents.push( {
        type: "TimeOut",
        hour: parseInt(timeStamp.split(" ")[1]),
        date : timeStamp.split(" ")[0]
    })
    return newObj
}
function hoursWorkedOnDate(obj,date) {
    let hoursIN = obj.timeInEvents.find(item => item.type === "TimeIn" && item.date === date)
    let hoursOut = obj.timeOutEvents.find(item => item.type === "TimeOut" && item.date === date)

    let hours = parseInt(hoursOut.hour - hoursIN.hour);
    return hours
}
function wagesEarnedOnDate(obj,date) {}
function allWagesFor(obj) {}
function calculatePayroll() {}


