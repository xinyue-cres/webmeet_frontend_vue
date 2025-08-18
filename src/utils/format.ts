import dayjs from 'dayjs'
export const formatTime = (time, formatStr = "YY/MM/DD") => {
    return dayjs(time).format(formatStr)
}