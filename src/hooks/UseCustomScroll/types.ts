
export type UseCustomScrollProps = {
    setOffsetY: React.Dispatch<React.SetStateAction<number>>
    offsetY: number,
}

export type UseCustomScrollReturn = number


export type UseCustomScroll = (containerRef: React.RefObject<HTMLDivElement>) => UseCustomScrollReturn