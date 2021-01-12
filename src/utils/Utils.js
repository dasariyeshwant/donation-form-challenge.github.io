export const isAllNumberic = (str) => {
    const numbers = /^[0-9]+$/;
    return str.match(numbers);
}

export const formatCurrency = (num) => {
    return num.toLocaleString();
}