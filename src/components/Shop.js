import Global_Header from "./Global_Header";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";



function Shop(){
    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    return(
        <>
           
            <section className="featured section" id="featured">
                <h2 className="section-title">Productos</h2>

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
                            <span className="sticker__price">$4.99</span> 
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
                            <span className="sticker__price">$4.99</span>
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
                            <span className="sticker__price">$4.99</span>
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
                            <span className="sticker__price">$4.99</span>
                            Add to Cart<i className='bx bx-shopping-bag'></i>
                    </motion.button>
                    <motion.button
                        className="button-light sticker"
                        whileHover= {{scale:1.05}}
                        whileTap= {{scale:0.9}}
                        onClick={() => (modalOpen ? close() : open())}
                    >
                            <img src="Assets/FastAndFurious/han_rx7.png" alt="" className="sticker_img" />
                            <span className="sticker__name"><i> Han's RX-7</i> sticker</span>
                            <span className="sticker__price">$4.99</span>
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
                            <span className="sticker__price">$4.99</span>
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
                            <span className="sticker__price">$4.99</span>
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
                            <span className="sticker__price">$4.99</span>
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
                            <span className="sticker__price">$4.99</span>
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
            </section>
        </>
    );
}

export default Shop;