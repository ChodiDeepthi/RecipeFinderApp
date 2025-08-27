import React,{Fragment} from "react";
import styles from  "./Header.module.css"
import { Link } from "react-router-dom";
import homeico from "../assets/house-solid-full.svg";
import SearchBar from "./SearchBar";

function Header(){

return (<Fragment>

            <div className={styles.headerpart} style={{margin:"0px"}}>
                    <div className={styles.container1}><Link to="/" className={styles.logo}>
                            <img src={homeico}/> </Link>
             
                            <div className={styles.headcontent}>Let's Cooking</div>
                    </div>
                 
                    <div className={styles.container2} ><SearchBar/></div>
            </div>
        </Fragment>);



}
export default Header;