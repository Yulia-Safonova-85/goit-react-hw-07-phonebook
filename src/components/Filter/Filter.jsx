import { useDispatch, useSelector } from "react-redux";
import {setFilterValue} from 'redux/FilterSlice';
import { getFilter } from "redux/selectors";
import { FindFilter, Field } from "./Filter.styled";


  export const Filter = () => {
 const dispatch = useDispatch();
 const filter = useSelector(getFilter);

const  changeFilter = evt => {
dispatch(setFilterValue(evt.target.value ));

  };

    return (
        <FindFilter>
            Find contacts by name
            <Field type="text" 
            name="filter" value={filter} 
            placeholder="Find contact" 
            onChange={changeFilter} />
        </FindFilter>
    )
};