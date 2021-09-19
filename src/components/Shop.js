import Global_Header from "./Global_Header";

function Shop(){
    return(
        <>
           
            <section className="featured section" id="featured">
                <h2 className="section-title">Productos</h2>

                <div className="featured_container bd-grid">
                    <article className="sticker">
                        <div className="sticker_sale">Sale</div>
                        <img src="Assets/Featured/sticker_Featured1.png" alt="" className="sticker_img" />
                        <span className="sticker__name"><i> GT-R R34</i> sticker</span>
                        <span className="sticker__price">$49.99</span>
                        <a href="" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
                    </article>
                    <article className="sticker">
                        <div className="sticker_sale">Sale</div>
                        <img src="Assets/Featured/Evo9.png" alt="" className="sticker_img" />
                        <span className="sticker__name"><i>Evo</i> 9 sticker</span>
                        <span className="sticker__price">$49.99</span>
                        <a href="" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
                    </article>
                    <article className="sticker">
                        <div className="sticker_sale">Sale</div>
                        <img src="Assets/Featured/rx7.png" alt="" className="sticker_img" />
                        <span className="sticker__name"><i>RX-7</i> sticker</span>
                        <span className="sticker__price">$49.99</span>
                        <a href="" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
                    </article>
                    <article className="sticker">
                        <div className="sticker_sale">Sale</div>
                        <img src="Assets/Featured/supra.png" alt="" className="sticker_img" />
                        <span className="sticker__name"><i>Supra</i> sticker</span>
                        <span className="sticker__price">$49.99</span>
                        <a href="" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
                    </article>
                    <article className="sticker">
                        <img src="Assets/FastAndFurious/han_rx7.png" alt="" className="sticker_img" />
                        <span className="sticker__name"><i> Han's RX-7</i> sticker</span>
                        <span className="sticker__price">$49.99</span>
                        <a href="./addToCart.html" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
                    </article>
                    <article className="sticker">
                        <img src="Assets/FastAndFurious/Paul_eclipse.png" alt="" className="sticker_img" />
                        <span className="sticker__name"><i>Paul's Eclipse</i> 9 sticker</span>
                        <span className="sticker__price">$49.99</span>
                        <a href="./addToCart.html" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
                    </article>
                    <article className="sticker">
                        <img src="Assets/FastAndFurious/Paul_r34_GTR.png" alt="" className="sticker_img" />
                        <span className="sticker__name"><i>Paul's GT-R</i> sticker</span>
                        <span className="sticker__price">$49.99</span>
                        <a href="./addToCart.html" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
                    </article>
                    <article className="sticker">
                        <img src="Assets/FastAndFurious/Paul_supra.png" alt="" className="sticker_img" />
                        <span className="sticker__name"><i>Paul's Supra</i> sticker</span>
                        <span className="sticker__price">$49.99</span>
                        <a href="./addToCart.html" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
                    </article>
                    <article className="sticker">
                        <img src="Assets/FastAndFurious/Suki_s2000.png" alt="" className="sticker_img" />
                        <span className="sticker__name"><i>Suki's s200</i> sticker</span>
                        <span className="sticker__price">$49.99</span>
                        <a href="./addToCart.html" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
                    </article>
                </div>
            </section>
        </>
    );
}

export default Shop;