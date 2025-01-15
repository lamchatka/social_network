import styles from "./Filter.module.css";
import PropTypes from "prop-types"

function Filter({filter}) {

    Filter.propTypes = {
        filter: PropTypes.string
    }
    
    return (
        <li className={styles["item"]}>
            <a>{filter}</a>
        </li>
    );

} 

export default Filter;