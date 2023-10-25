import AddTask from "../AddTask";
import Sidebar from "../Sidebar";
import styles from "./styles.module.css";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div>
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Task Management</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
    <div>
      <AddTask />
    </div>
    </div>
  );
};

export default Main;
