import styles from "./Filters.module.css";
import Filter from "./Filter/Filter";
import CustomSelect from "./CustomSelect/CustomSelect";

function Filters() {
  const filtersList = [
    "All updates",
    "Mentions",
    "Favorites",
    "Friends",
    "Groups",
  ];

  return (
    <div className={styles["content"]}>
      <div className={styles["filters-list"]}>
        <ul className={styles["filters"]}>
          {filtersList.map((f) => (
            <Filter key={f} filter={f} />
          ))}
          <CustomSelect />
        </ul>
      </div>
    </div>
  );
}

export default Filters;
