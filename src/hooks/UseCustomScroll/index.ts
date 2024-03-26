import { useCallback, useEffect, useRef, useState } from "react";



export type UseCustomScrollProps = {
    setOffsetY: React.Dispatch<React.SetStateAction<number>>
    offsetY: number,
}

export type UseCustomScrollReturn = number


export type UseCustomScroll = () => UseCustomScrollReturn

export const useCustomScroll: UseCustomScroll = () => {
    const [offsetY, setOffsetY] = useState(0);
    const dragging = useRef(false);
    const previousClientY = useRef(0);

    const handleSpanMouseDown = useCallback((e: MouseEvent) => {
        e.preventDefault()
        previousClientY.current = e.clientY
        dragging.current = true
    }, [])

    const handleSpanMouseMove = useCallback((e: MouseEvent) => {
        if (!dragging.current) {
            return
        }

        setOffsetY(result => {
            const change = e.clientY - previousClientY.current
            previousClientY.current = e.clientY;
            return result + change
        })

    }, [])

    const handleSpanMouseUp = useCallback(() => {
        dragging.current = false
    }, [])

    useEffect(() => {
        window.addEventListener("mousedown", handleSpanMouseDown);
        window.addEventListener("mouseup", handleSpanMouseUp);
        window.addEventListener("mousemove", handleSpanMouseMove);

        return () => {
            window.removeEventListener("mousedown", handleSpanMouseDown);
            window.removeEventListener("mouseup", handleSpanMouseUp);
            window.removeEventListener("mousemove", handleSpanMouseMove);
        };
    }, [handleSpanMouseDown, handleSpanMouseUp, handleSpanMouseMove]);

    return offsetY
}