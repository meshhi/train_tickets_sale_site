export const DateValueFormatter = (numberValue: number) => {
    return (`${numberValue}:00`)
}

export const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

export const getDuration = (seconds) => {
    const hours: number = Math.floor(seconds / 60 / 60);
    const minutes: number = Math.ceil((seconds - (hours * 60 * 60)) / 60);
    return `${hours}:${minutes}`
}