import { useCallback, useEffect, useRef, useState } from "react";



export type UseCustomScrollProps = {
    setOffsetY: React.Dispatch<React.SetStateAction<number>>
    offsetY: number,
}

export type UseCustomScrollReturn = { offsetY: number, offsetYMobile: number }


export type UseCustomScroll = () => UseCustomScrollReturn

export const useCustomScroll: UseCustomScroll = () => {
    const [offsetY, setOffsetY] = useState(0);
    const [offsetYMobile, setOffsetYMobile] = useState(0);

    const dragging = useRef(false);
    const draggingMobile = useRef(false);

    const previousClientY = useRef(0);
    const previousClientYMobile = useRef(0);

    const handleSpanMouseDown = useCallback((e: MouseEvent) => {
        /* e.preventDefault() */
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

    const handleTouchStart = useCallback((e: TouchEvent) => {
        /* e.preventDefault() */
        previousClientYMobile.current = e.changedTouches[0].clientY
        draggingMobile.current = true
    }, [])

    const handleTouchEnd = useCallback(() => {
        draggingMobile.current = false
    }, [])

    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (!draggingMobile.current) {
            return
        }

        setOffsetYMobile(result => {
            const change = e.changedTouches[0].clientY - previousClientYMobile.current
            console.log('change', change)
            previousClientYMobile.current = e.changedTouches[0].clientY;
            return result + change
        })
    }, [])


    useEffect(() => {
        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchend", handleTouchEnd);
        window.addEventListener("touchmove", handleTouchMove);

        return () => {
            window.removeEventListener("mousedown", handleSpanMouseDown);
            window.removeEventListener("mouseup", handleSpanMouseUp);
            window.removeEventListener("mousemove", handleSpanMouseMove);
        }
    }, [handleSpanMouseDown, handleSpanMouseUp, handleSpanMouseMove, handleTouchStart, handleTouchEnd, handleTouchMove])

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

    return { offsetY, offsetYMobile }
}