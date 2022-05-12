package com.infogalaxy.addressbookapp.service;

import com.infogalaxy.addressbookapp.dto.ContactDTO;
import com.infogalaxy.addressbookapp.model.ContactData;

import java.util.List;

public interface IAddressBookService {

    ContactData addContact(ContactDTO contactDTO);

    List<ContactData> getAllContacts();

}
