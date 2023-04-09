import { useSelector } from "react-redux";
import { ContactsItem } from "components/ContactsItem/ContactsItem"; 
import { getContacts, getFilter} from 'redux/selectors';
import { List, Container } from "./ContactList.styled";

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
        <Container>
            <List>
                {findFilterContacts.map(contact => 
                (<ContactsItem key ={contact.id} contact={contact}/>)
                     )}  
            </List>
        </Container>
    )
}