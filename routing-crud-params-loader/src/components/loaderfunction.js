const loaderfun = (value) => {
    if (value) {
        document.documentElement.style.setProperty('--loadingvalue', 'flex')
    }
    else {
        document.documentElement.style.setProperty('--loadingvalue', 'none')
    }
}
export default loaderfun