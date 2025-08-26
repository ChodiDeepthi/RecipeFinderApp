import React,{Fragment} from "react"
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css"
import { useMediaQuery } from "react-responsive";
import mobi from "../assets/mobilev1.png";
import deski from "../assets/image.png";
import tabi from "../assets/tabbackground.png"
function Home(){
        const navigate = useNavigate();
        


            const isMobile = useMediaQuery({ maxWidth: 600 });
            const isTablet = useMediaQuery({ minWidth: 601, maxWidth: 1024 });
            const isDesktop = useMediaQuery({ minWidth: 1025 });

            let bgImage = deski;
            if (isMobile) bgImage =mobi;
            
             return (
                
            <Fragment>
                <div className={styles.homepage} style={{
                        marginLeft:"0px",
                        overflow:"hidden",
                        background: `linear-gradient(rgba(32, 32, 34, 0.7), rgba(38, 38, 39, 0.7)), url(${bgImage})`,
                       

                        }}>


                    <div className={styles.line1}>Let's </div>
                     <div className={styles.line1}>Cooking</div>
                    <div className={styles.line2}>Find best recipies for Cooking</div>
                   <div>
                    <button onClick={() => navigate("/search")}>Start Cooking → </button>
                    </div>
                </div>
            </Fragment>
    )
}
export default Home;