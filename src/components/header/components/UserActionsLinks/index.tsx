import facebook from "../../../../assets/images/facebook.svg"
import whatsapp from "../../../../assets/images/whatsapp.svg"
import vk from "../../../../assets/images/vk.svg"
import instagram from "../../../../assets/images/instagram.svg"
import telegram from "../../../../assets/images/telegram.svg"


const UserActionsLinks = () => {
    return (
        <li className="header__item user-actions">
            <a href="#" className="header__item-link">
                <img src={facebook} alt="" />
            </a>
            <a href="#" className="header__item-link">
                <img src={vk} alt="" />
            </a>
            <a href="#" className="header__item-link">
                <img src={whatsapp} alt="" />
            </a>
            <a href="#" className="header__item-link">
                <img src={instagram} alt="" />
            </a>
            <a href="#" className="header__item-link">
                <img src={telegram} alt="" />
            </a>
        </li>
    )
}

export default UserActionsLinks
