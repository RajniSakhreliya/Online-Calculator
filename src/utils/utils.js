export function performPOW(x, n) {
    return Math.pow(x,n);
}

export function convertToString(number) {
    const options = { maximumFractionDigits: 2 }
    return Intl.NumberFormat("en-IN", options).format(number);
}