

type Props = {
    children: React.ReactNode,
    handleClickClosePopup: () => void,
}

export default function Popup({ children, handleClickClosePopup }: Props) {

    return <div onClick={handleClickClosePopup} className="basket__popup">
        <div
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            className="basket__popup-box"
        >
            {children}
        </div>
    </div>

}