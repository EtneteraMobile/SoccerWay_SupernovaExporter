/**
 * 
 * @param {string} text 
 * @param {string} indentationString 
 * 
 * @returns {string}
 */
function createDocumentationComment(text, indentationString) {
    return text
        .trim()
        .split("\n")
        .map((line, index) =>
            (index > 0 ? `${indentationString}` : ``) + `/// ${line}`
        )
        .join("\n");
}

Pulsar.registerFunction("createDocumentationComment", createDocumentationComment);

/**
 * Sanitizes a font subfamily (e.g. "Semi Bold" -> "semiBold")
 * 
 * @param {string} name 
 * @returns {string}
 */
function sanitizeSubfamily(name) {
    return name
        .split(/\s+/)
        .map((part, index) =>
            index === 0
                ? part.charAt(0).toLowerCase() + part.slice(1)
                : part.charAt(0).toUpperCase() + part.slice(1)
        )
        .join('');
}

Pulsar.registerFunction("sanitizeSubfamily", sanitizeSubfamily);

/**
 * Sanitizes a font family (e.g. "Chakra Petch" -> "ChakraPetch")
 * @param {string} name 
 * @returns {string}
 */
function sanitizeFamily(name) {
    return name
        .split(/\s+/)
        .map(part =>
            part.charAt(0).toUpperCase() + part.slice(1)
        )
        .join('');
}

Pulsar.registerFunction("sanitizeFamily", sanitizeFamily);