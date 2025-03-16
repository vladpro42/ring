import { useCallback, useEffect, useRef, useState } from "react";
import { UseCustomScroll } from "./types";

const useCustomScroll: UseCustomScroll = (containerRef) => {
    const [offsetY, setOffsetY] = useState(0);
    const [maxOffset, setMaxOffset] = useState(0);

    const dragging = useRef(false);
    const previousClientY = useRef(0);

    // Обновляем максимальное значение offsetY при изменении размеров контейнера
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const updateMaxOffset = () => {
            const scrollHeight = container.scrollHeight; // Полная высота содержимого
            const clientHeight = container.clientHeight; // Видимая высота контейнера
            setMaxOffset(scrollHeight - clientHeight); // Максимальное значение offsetY
        };

        updateMaxOffset(); // Инициализация

        // Обновляем при изменении размеров контейнера
        const resizeObserver = new ResizeObserver(updateMaxOffset);
        resizeObserver.observe(container);

        return () => {
            resizeObserver.disconnect();
        };
    }, [containerRef]);

    const handlePointerDown = useCallback((e: PointerEvent) => {
        if (e.target instanceof HTMLLIElement) return;

        containerRef.current?.setPointerCapture(e.pointerId);
        previousClientY.current = e.clientY;
        dragging.current = true;
    }, [containerRef]);

    const handlePointerMove = useCallback(
        (e: PointerEvent) => {
            if (!dragging.current) return;

            e.preventDefault();

            const change = e.clientY - previousClientY.current;
            previousClientY.current = e.clientY;

            setOffsetY((prevOffset) => {
                const newOffset = prevOffset + change;
                return Math.max(0, Math.min(newOffset, maxOffset)); // Ограничиваем offsetY
            });
        },
        [maxOffset]
    );

    const handlePointerUp = useCallback(() => {
        dragging.current = false;
    }, []);

    const handleTouchStart = useCallback((e: TouchEvent) => {
        if (e.target instanceof HTMLLIElement) return;

        e.preventDefault();
        previousClientY.current = e.touches[0].clientY;
        dragging.current = true;
    }, []);

    const handleTouchMove = useCallback(
        (e: TouchEvent) => {
            if (!dragging.current) return;

            e.preventDefault();

            const touch = e.touches[0];
            const change = touch.clientY - previousClientY.current;
            previousClientY.current = touch.clientY;

            setOffsetY((prevOffset) => {
                const newOffset = prevOffset + change;
                return Math.max(0, Math.min(newOffset, maxOffset)); // Ограничиваем offsetY
            });
        },
        [maxOffset]
    );

    const handleTouchEnd = useCallback(() => {
        dragging.current = false;
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.addEventListener("pointerdown", handlePointerDown);
        container.addEventListener("pointermove", handlePointerMove);
        container.addEventListener("pointerup", handlePointerUp);
        container.addEventListener("pointercancel", handlePointerUp);

        container.addEventListener("touchstart", handleTouchStart, { passive: false });
        container.addEventListener("touchmove", handleTouchMove, { passive: false });
        container.addEventListener("touchend", handleTouchEnd);
        container.addEventListener("touchcancel", handleTouchEnd);

        return () => {
            container.removeEventListener("pointerdown", handlePointerDown);
            container.removeEventListener("pointermove", handlePointerMove);
            container.removeEventListener("pointerup", handlePointerUp);
            container.removeEventListener("pointercancel", handlePointerUp);

            container.removeEventListener("touchstart", handleTouchStart);
            container.removeEventListener("touchmove", handleTouchMove);
            container.removeEventListener("touchend", handleTouchEnd);
            container.removeEventListener("touchcancel", handleTouchEnd);
        };
    }, [
        containerRef,
        handlePointerDown,
        handlePointerMove,
        handlePointerUp,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
    ]);

    return offsetY;
};

export { useCustomScroll };