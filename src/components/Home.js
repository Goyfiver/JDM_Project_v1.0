import { Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import { useEffect, useState } from "react";
import Shop from "./Shop";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";

function Home(){
    
    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    const [offset, setOffset] = useState(0)

    useEffect(() => {
      function handleScroll() {
        setOffset(window.pageYOffset)
      }
  
      window.addEventListener("scroll", handleScroll)
  
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }, [])

    return(
        <>
            <div className="landing_Page" id="home">
                <section className="landing__Header" >
                    <img src="Assets/Home_Retrowave/Retrowave2.png" id="headerImgBackground" style={{
                        transform: `translateY(${offset * 0.25}px)`,
                    }}/>
                    <img src="Assets/Home_Retrowave/Triangle.png" id="headerImgTriangle" style={{
                        transform: `translateY(${offset * 0.15}px)`,
                    }}/>
                    <h2 id="text" >JDM Stickers</h2>
                    <a href="#featured" id="btn" style={{
                        marginTop: `${offset * 1.5}px`,

                    }}>Shop Now</a>
                </section>
            </div><section className="featured section" id="featured">
                <h2 className="section-title">FEATURED</h2>

                <div className="featured_container bd-grid">


                    <motion.button
                        className="button-light sticker"
                        whileHover= {{scale:1.05}}
                        whileTap= {{scale:0.9}}
                        onClick={() => (modalOpen ? close() : open())}
                    >
                            <div className="sticker_sale">Sale</div>
                            <img src="Assets/Featured/sticker_Featured1.png" alt="" className="sticker_img" />
                            <span className="sticker__name"><i> GT-R R34</i> sticker</span>
                            <span className="sticker__price">$49.99</span> 
                            Add to Cart<i className='bx bx-shopping-bag'></i>
                    </motion.button>
                     
                    <motion.button
                        className="button-light sticker"
                        whileHover= {{scale:1.05}}
                        whileTap= {{scale:0.9}}
                        onClick={() => (modalOpen ? close() : open())}
                    >
                            <div className="sticker_sale">Sale</div>
                            <img src="Assets/Featured/Evo9.png" alt="" className="sticker_img" />
                            <span className="sticker__name"><i>Evo</i> 9 sticker</span>
                            <span className="sticker__price">$49.99</span>
                            Add to Cart<i className='bx bx-shopping-bag'></i>
                    </motion.button>

            

                    <motion.button
                        className="button-light sticker"
                        whileHover= {{scale:1.05}}
                        whileTap= {{scale:0.9}}
                        onClick={() => (modalOpen ? close() : open())}
                    >
                            <div className="sticker_sale">Sale</div>
                            <img src="Assets/Featured/rx7.png" alt="" className="sticker_img0" />
                            <span className="sticker__name"><i>RX-7</i> sticker</span>
                            <span className="sticker__price">$49.99</span>
                            Add to Cart<i className='bx bx-shopping-bag'></i>
                    </motion.button>
                 
                    <motion.button
                        className="button-light sticker"
                        whileHover= {{scale:1.05}}
                        whileTap= {{scale:0.9}}
                        onClick={() => (modalOpen ? close() : open())}
                    >
                            <div className="sticker_sale">Sale</div>
                            <img src="Assets/Featured/supra.png" alt="" className="sticker_img" />
                            <span className="sticker__name"><i>Supra</i> sticker</span>
                            <span className="sticker__price">$49.99</span>
                            Add to Cart<i className='bx bx-shopping-bag'></i>
                    </motion.button>
                    
                    <AnimatePresence
                    
                        initial={false}
                        exitBeforeEnter={true}

                        onExitComplete={() => null}
                    >
                        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close}/>}
                    </AnimatePresence>
                </div>
            </section><section className="Fast_Furious_Collection">
                <img id="FF_img_back" src="Assets/FastAndFurious/Asset 2@4x.png" />
                <div>
                    <img src="Assets/FastAndFurious/FastAndFuriousTitle.png" />
                </div>
            </section><section className="featured section" id="featured">
                <h2 className="section-title">Fast & Furious Collection</h2>

                <div className="featured_container bd-grid">
                    <motion.button
                        className="button-light sticker"
                        whileHover= {{scale:1.05}}
                        whileTap= {{scale:0.9}}
                        onClick={() => (modalOpen ? close() : open())}
                    >
                            <img src="Assets/FastAndFurious/han_rx7.png" alt="" className="sticker_img" />
                            <span className="sticker__name"><i> Han's RX-7</i> sticker</span>
                            <span className="sticker__price">$49.99</span>
                            <a href="./addToCart.html" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
                    </motion.button>
                    <motion.button
                        className="button-light sticker"
                        whileHover= {{scale:1.05}}
                        whileTap= {{scale:0.9}}
                        onClick={() => (modalOpen ? close() : open())}
                    >
                            <img src="Assets/FastAndFurious/Paul_eclipse.png" alt="" className="sticker_img" />
                            <span className="sticker__name"><i>Paul's Eclipse</i> sticker</span>
                            <span className="sticker__price">$49.99</span>
                            <a href="./addToCart.html" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
                    </motion.button>
                    <motion.button
                        className="button-light sticker"
                        whileHover= {{scale:1.05}}
                        whileTap= {{scale:0.9}}
                        onClick={() => (modalOpen ? close() : open())}
                    >
                            <img src="Assets/FastAndFurious/Paul_r34_GTR.png" alt="" className="sticker_img" />
                            <span className="sticker__name"><i>Paul's GT-R</i> sticker</span>
                            <span className="sticker__price">$49.99</span>
                            <a href="./addToCart.html" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
                    </motion.button>
                    <motion.button
                        className="button-light sticker"
                        whileHover= {{scale:1.05}}
                        whileTap= {{scale:0.9}}
                        onClick={() => (modalOpen ? close() : open())}
                    >
                            <img src="Assets/FastAndFurious/Paul_supra.png" alt="" className="sticker_img" />
                            <span className="sticker__name"><i>Paul's Supra</i> sticker</span>
                            <span className="sticker__price">$49.99</span>
                            <a href="./addToCart.html" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
                    </motion.button>
                    <motion.button
                        className="button-light sticker"
                        whileHover= {{scale:1.05}}
                        whileTap= {{scale:0.9}}
                        onClick={() => (modalOpen ? close() : open())}
                    >
                            <img src="Assets/FastAndFurious/Suki_s2000.png" alt="" className="sticker_img" />
                            <span className="sticker__name"><i>Suki's s200</i> sticker</span>
                            <span className="sticker__price">$49.99</span>
                            <a href="./addToCart.html" className="button-light">Add to Cart<i className='bx bx-right-arrow-alt button-icon'></i></a>
                    </motion.button>
                    <AnimatePresence
                    
                        initial={false}
                        exitBeforeEnter={true}

                        onExitComplete={() => null}
                    >
                        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close}/>}
                    </AnimatePresence>
                </div>
            </section><section className="social__orders" id="social__orders">
                <div className="social__orders-text">
                    <h2>Órdenes:</h2>
                    <p>Serán por DM en nuestras redes sociales.</p>
                    <p2>@jdm_stickers_mx</p2>
                </div>
                <div className="dark">
                    <ul className="btn-list rounded">

                        <li>
                            <a href="https://www.facebook.com/JDM_Stickers-223995456237704" target="blank" className="btn-gradient rounded facebook">
                                <i className="fa fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/jdm_stickers_mx/" target="blank" className="btn-gradient rounded instagram">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </li>

                    </ul>
                </div>
                
            </section>
        </>
    );
}

export default Home;