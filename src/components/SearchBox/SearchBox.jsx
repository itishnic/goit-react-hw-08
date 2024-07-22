import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { setFilter } from "../../redux/filters/slice";

export default function SearchBox() {

const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(setFilter(e.target.value));
  }

  return (
    <div className={css.label}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        
        onChange={handleSearch} 
      />
    </div>
  );
}
