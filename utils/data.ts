export const getRandomCharacter = ():string => {
    const minLowerCaseValue = 97
    const maxLowerCaseValue = 122
    const minUpperCaseValue = 65
    const maxUpperCaseValue = 90

    const isRandomUpperCase = Math.random() < 0.5 ? true : false

    let randomChar
    if (isRandomUpperCase) {
        randomChar = Math.floor(Math.random() * (maxUpperCaseValue - minUpperCaseValue + 1)) + minUpperCaseValue
    } else {
        randomChar = Math.floor(Math.random() * (maxLowerCaseValue - minLowerCaseValue + 1)) + minLowerCaseValue
    }

    return String.fromCharCode(randomChar)
}

export const getRandomString = ():string => {
    const length = Math.floor(Math.random() * 5) + 1
    let randomString = ''
    for (let i = 0; i < length; ++i) {
        randomString+=getRandomCharacter()
    }
    return randomString
}

export const getRandomStringArray = () => {
    let arr = []
    for (let i = 0; i < 1000; ++i) {
        arr.push(getRandomString())
    }
    return arr
}