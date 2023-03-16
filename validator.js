let validator = new Object()

/**
 * [\w\.\-\+]+ matches one or more word characters, dots, hyphens, or plus signs 
 * @ matches the "@" symbol
 * ([\w\-]+\.)+ matches one or more groups of word characters and a dot for domain
 * [\w\-]+ matches the final group of word characters in the domain name 
 * (?:,\s*)? is an optional non-capturing group that matches a comma followed by optional whitespace
 * @param {*} input 
 * @returns 
 */
validator.emailList = (input) => {
    const regex = /^([\w\.\-\+]+@([\w\-]+\.)+[\w\-]+(?:,\s*)?)+$/

    return regex.test(input)
}

validator.email = (input) => {
    const regex = /^([\w\.\-\+]+@([\w\-]+\.)+[\w\-]+(?:)?)+$/

    return regex.test(input)
}

validator.password = (input) => {
    if(input.length < 8) return false

    if(!/[A-Z]/.test(input)) return false
    
    if(!/[0-9]/.test(input)) return false

    return true
}

validator.username = (input) => {
    return /^[a-z0-9_.]+$/.test(input)
}

export default validator;