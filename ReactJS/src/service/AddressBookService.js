import axios from "axios"

const BASE_API_URL = "http://localhost:8080/addressbook";

class AddressBookService {
    
    addContact(contact) {
        return axios.post(BASE_API_URL + "/addContact", contact);
    }

    getAllContacts() {
        return axios.get(BASE_API_URL + "/getAllContacts");
    }

    deleteContactById(id) {
        return axios.put(BASE_API_URL + "/deleteContactById/" + id);
    }

    getContactById(id) {
        return axios.get(BASE_API_URL + "/getContactById/" + id);
    }

    updateContactById(contact,id){
        return axios.put(BASE_API_URL + "/updateContactById/" + id, contact);
    }
}
export default new AddressBookService();