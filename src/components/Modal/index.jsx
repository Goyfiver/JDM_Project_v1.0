import { motion } from "framer-motion";
import Backdrop from "../Backdrop";

const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

const Modal = ({ handleClose, text }) => {

    return(
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal orange-gradient"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <ModalText text={text} />
                <ModalButton onClick={handleClose} label="Close"/>
            </motion.div>
        </Backdrop>
    );
};

const ModalText = ({ text }) => (
  <div className="modal-text">
    <h3>{text}</h3>
    <section className="social__orders" id="social__orders">
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
            <a href="https://www.instagram.com/jdm_stickers_jrz/" target="blank" className="btn-gradient rounded instagram">
              <i className="fa fa-instagram"></i>
            </a>
          </li>

        </ul>
      </div>

    </section>
  
  </div>
);

const ModalButton = ({ onClick, label }) => (
  <motion.button
    className="modal-button"
    type="button"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {label}
  </motion.button>
);

export default Modal;