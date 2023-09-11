export function check (el) {
    if (el === 0) return "rgba(122, 215, 122, 0.977)";
    if (el === 1) return "rgb(235, 235, 49)";
    let flag = true;
    for (let i = Math.floor(el / 2); i > 1; i--) {
        if (el % i === 0) {
            flag = false;
            break;
        }
    }
    if (flag) {
        return "rgb(255, 94, 94)";
    } else {
        if (el % 2 === 0) {
            return "rgba(122, 215, 122, 0.977)";
        } else {
            return "rgb(235, 235, 49)";
        }
    }

}