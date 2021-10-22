function Footer(){
    return(
        <footer className="footer section">
                <div className="footer__container bd-grid">
                    <div className="footer__box">
                        <h3 className="footer__title">JDM Stickers</h3>
                        <p className="footer__description">Sticker Collection of 2021</p>
                    </div>

                    <div className="footer__box">
                        <h3 className="footer__title">EXPLORE</h3>
                        <ul>
                            <li><a href="#home" className="footer__link">Home</a></li>
                            <li><a href="./shop.html" className="footer__link">Productos</a></li>
                            <li><a href="./addToCart.html" className="footer__link"><i className='bx bx-shopping-bag'></i></a></li>
                        </ul>
                    </div>
                    <div className="footer__box">
                        <a href="" className="footer__social"><i className='bx bxl-facebook'></i></a>
                        <a href="https://www.instagram.com/jdm_stickers_jrz/" target="blank" className="footer__social"><i className='bx bxl-instagram'></i></a>
                        <a href="https://www.instagram.com/jdm_stickers_jrz/" target="blank" className="footer__social"><i className='bx bxl-google'></i></a>

                    </div>

                    <p className="footer__copy">&#169; <a href="https://www.freepik.com/vectors/background" target="blank">Background vector created by rawpixel.com - www.freepik.com</a></p>
                </div>
        </footer>
    );
}

export default Footer;