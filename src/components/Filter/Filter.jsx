import { useDispatch, useSelector } from "react-redux";
import {setFilterValue, getFilter } from 'redux/FilterSlice';
import { FindFilter } from "./Filter.styled";


  export const Filter = () => {
 const dispatch = useDispatch();
 const filter = useSelector(getFilter);

const  changeFilter = evt => {
dispatch(setFilterValue(evt.target.value ));

  };

    return (
        <FindFilter>
            Find contacts by name
            <input type="text" 
            name="filter" value={filter} 
            placeholder="Find contact" 
            onChange={changeFilter} />
        </FindFilter>
    )
};