
export function getItemFromLocalStorage(key: string): number[] {
    const data = localStorage.getItem(key) || ''
    if (data.length > 0 && data) {
        return JSON.parse(data)
    } else {
        return []
    }
}

export function setItemToLocalStorage(key: string, id: number) {

    const data: number[] = getItemFromLocalStorage(key)

    if (Array.isArray(data) && data) {
        const flag = data.includes(id)

        if (!flag) {
            data.push(id)
        }

        localStorage.setItem(key, JSON.stringify(data))
    } else {
        localStorage.setItem(key, JSON.stringify([id]))
    }
}