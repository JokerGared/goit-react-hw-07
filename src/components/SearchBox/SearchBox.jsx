import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter, selectFilters } from "../../redux/filtersSlice";
export const SearchBox = () => {
  const filter = useSelector(selectFilters);
  const dispatch = useDispatch();

  const handleChangeQuery = (query) => {
    dispatch(changeFilter(query));
  };
  return (
    <>
      <h2 className={s.searchBoxHeading}>Find contact by name</h2>
      <input
        placeholder="Enter name"
        className={s.searchBoxInput}
        type="text"
        value={filter}
        onChange={(e) => handleChangeQuery(e.target.value)}
      />
    </>
  );
};
