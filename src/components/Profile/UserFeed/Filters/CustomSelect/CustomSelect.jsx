import styles from "./CustomSelect.module.css";

function CustomSelect() {
  return (
    <li className={styles["show-item"]}>
      <label>Show</label>
      <select name="filter" id={styles["filter-by"]}>
        <option>Everything</option>
        <option>Status</option>
        <option>Shares</option>
        <option>Media</option>
        <option>Friendships</option>
        <option>New Groups</option>
        <option>Forum Topics</option>
        <option>Forum Replies</option>
      </select>
    </li>
  );
}

export default CustomSelect;
