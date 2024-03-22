import { Ring } from "../redux/rings/ringsReducerTypes"

export function getItemFromLocalStorage(key: string) {
    const data = localStorage.getItem(key) || ''
    if (data.length > 0 && data) {
        return JSON.parse(data)
    } else {
        return ''
    }
}

export function setItemToLocalStorage(key: string, item: Ring) {

    const data: Ring[] = getItemFromLocalStorage(key)

    if (Array.isArray(data) && data) {
        let flag

        data.forEach(cur => {
            if (cur.id === item.id) {
                flag = true
            } else {
                flag = false
            }
        })

        if (!flag) {
            data.push(item)
        }

        localStorage.setItem(key, JSON.stringify(data))
    } else {
        localStorage.setItem(key, JSON.stringify([item]))
    }
}