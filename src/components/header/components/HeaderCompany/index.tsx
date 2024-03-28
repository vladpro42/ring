
const HeaderCompany = ({ className }: { className?: string }) => {
    return (
        <div className={[className, 'header__company'].join(' ')}>
            <h1 className='header__company-title'>ART-RINGS</h1>
            <p className="header__company-subtitle">MOSCOW JEWELRY STUDIO</p>
        </div>
    )
}

export default HeaderCompany
