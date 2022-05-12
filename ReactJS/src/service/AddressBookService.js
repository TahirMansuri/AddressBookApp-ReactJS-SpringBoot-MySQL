import axios from "axios"

const BASE_API_URL = "http://localhost:8080/addressbook";

class AddressBookService {
    
    addContact(contact) {
        return axios.post(BASE_API_URL + "/addContact", contact);
    }

    getAllContacts() {
        return axios.get(BASE_API_URL + "/getAllContacts");
    }
}
export default new AddressBookService();