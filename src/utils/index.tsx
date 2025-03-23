
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



export const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });
};