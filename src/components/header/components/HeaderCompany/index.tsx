
const HeaderCompany = ({ className }: { className?: string }) => {
    return (
        <div className={[className, 'header__company'].join(' ')}>
            <p className='header__company-title'>ART-RINGS</p>
            <p className="header__company-subtitle">MOSCOW JEWELRY STUDIO</p>
        </div>
    )
}

export default HeaderCompany
