let date = new Date();

function getZero(num) {
    if (num > 0 && num < 10) {
        return '0' + num;
    } else {
        return num;
    }
};
alert(date.getHours() + '-' + date.getMinutes() + ':' + date.getSeconds() + ' ' +
    getZero(date.getDate()) + '.' + getZero(date.getFullYear()) + '.' + getZero(date.getMonth()) + '.' + date.getDate());

