import { useCallback, useState } from "react"

const useInput = () => {

    const [value, setValue] = useState('')

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }, [])


    return {
        value,
        handleChange
    }
}

export { useInput }