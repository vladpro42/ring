import { IMAGE_FILE_TYPES } from "./constants";

export const validateTrim = (name: string, value: string) =>
    value.trim() !== "" || `${name} не может быть пустым или состоять из пробелов`;


export const validateFileType = (file: File | null) => {
    if (!file) return "Файл обязателен";

    if (!IMAGE_FILE_TYPES.includes(file.type)) {
        return "Разрешены только изображения (JPG, PNG, GIF)";
    }

    if (file.size > 5 * 1024 * 1024) {
        return "Размер файла не должен превышать 5MB";
    }

    return true;
};