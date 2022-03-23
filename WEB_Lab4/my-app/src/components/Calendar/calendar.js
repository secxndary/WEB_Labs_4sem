const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_WEEK = 7;



export function anotherMonth(dates, today) {
    if (!dates || !today)
        return false;
    if (dates.getMonth() < today.getMonth() || dates.getMonth() > today.getMonth())
        return true;
}

export function areEqual(a, b) {
    if (!a || !b)
        return false;
    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
}




function isLeapYear(year) {
    return !((year % 4) || (!(year % 100) && (year % 400)));
}


function getDaysInMonth(date) {
    const month = date.getMonth();
    const year = date.getFullYear();

    if (isLeapYear(year) && month === 1) {
        return DAYS_IN_MONTH[month] + 1;
    }
    else {
        return DAYS_IN_MONTH[month];
    }
}


function getDayOfWeek(date) {
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0) return 6;  // если воскресенье, то возвращаем 6
    return dayOfWeek - 1;           // иначе ден недели - 1
}



export function getMonthData(year, month) {
    const result = [];
    const date = new Date(year, month);
    const daysInMonth = getDaysInMonth(date);
    const monthStartsOn = getDayOfWeek(date);
    let day = 1;

    for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i++) {
        result[i] = [];
        let ctr = 0;
        let lastDaysOfPrevMonth = getDaysInMonth(new Date(year, month - 1));
        let tempPrevDays = lastDaysOfPrevMonth - monthStartsOn;

        for (let j = 0; j < DAYS_IN_WEEK; j++) {
            if ((i === 0 && j < monthStartsOn)) {
                result[i][j] = new Date(year, month - 1, ++tempPrevDays);
            }
            else if ((day > daysInMonth)) {
                if (ctr === 0) {
                    result[i][j] = new Date(year, ++month, 1);
                    ctr++;
                }
                if (ctr > 1) {
                    result[i][j] = new Date(year, month - 1, ++day);
                }
                ctr++;
            }
            else {
                result[i][j] = new Date(year, month, day++);
            }
        }
    }
    return result;
}