const prepearLink = (str) => {
    let ex = str
    const result = ex.replace(/'/g, "").replace(/ /g, "-").replace(/%/g, "-percent");
    return result;
}

export default prepearLink;