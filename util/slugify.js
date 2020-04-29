/**
 * Takes a title string and converts it to a URL friendly string meant as a slug
 */

module.exports = str => {
    return str
        .toLowerCase()
        .replace(/\s/g, "-")
        .replace(/,/g, "")
        .replace("&", "and");
};
