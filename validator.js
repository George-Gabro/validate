let validate = new Object()

/**
 * [\w\.\-\+]+ matches one or more word characters, dots, hyphens, or plus signs 
 * @ matches the "@" symbol
 * ([\w\-]+\.)+ matches one or more groups of word characters and a dot for domain
 * [\w\-]+ matches the final group of word characters in the domain name 
 * (?:,\s*)? is an optional non-capturing group that matches a comma followed by optional whitespace
 * @param {*} input 
 * @returns 
 */
validate.emailList = (input) => {
    const regex = /^([\w\.\-\+]+@([\w\-]+\.)+[\w\-]+(?:,\s*)?)+$/

    return regex.test(input)
}

validate.email = (input) => {
    const regex = /^([\w\.\-\+]+@([\w\-]+\.)+[\w\-]+(?:)?)+$/

    return regex.test(input)
}

validate.password = (input) => {
    if(input.length < 8) return false

    if(!/[A-Z]/.test(input)) return false
    
    if(!/[0-9]/.test(input)) return false

    return true
}

validate.username = (input) => {
    return /^[a-z0-9_.]+$/.test(input)
}

validate.youtubeVideoUrl = (input) => {
    const regex = /^https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})(?:\S+)?$/

    return regex.test(input);
}

export default validate;
