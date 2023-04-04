import { useSelector } from "react-redux";
import { ContactsItem } from "components/ContactsItem/ContactsItem"; 
import { getContacts} from 'redux/ContactSlice';
import { getFilter } from "redux/FilterSlice";
import { List } from "./ContactList.styled";

export const ContactList = () => {
  
   const contacts = useSelector(getContacts);
   const filter = useSelector(getFilter);

    const findContact = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(({ name }) =>
          name.toLowerCase().includes(normalizedFilter)
        );
        }
     
    const findFilterContacts = findContact();

    return (
        <div>
            <List>
                {findFilterContacts.map(contact => 
                (<ContactsItem key ={contact.id} contact={contact}/>)
                     )}  
            </List>
        </div>
    )
}