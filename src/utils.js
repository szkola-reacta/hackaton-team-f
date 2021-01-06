export const formatCurrency= (num) => {
    return `\$ ${Number(num).toLocaleString()} `;
};
export const truncate = function(str) {
    return str.length > 10 ? str.substring(0, 200) + "..." : str;
};