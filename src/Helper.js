const Helper = {
    dateUTCFormat: (date) => {
        return new Date(Date.UTC(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds()
        )).toISOString().slice(0, 10);
    }
}
export default Helper;