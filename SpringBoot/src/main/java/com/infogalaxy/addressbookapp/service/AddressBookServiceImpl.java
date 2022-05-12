package com.infogalaxy.addressbookapp.service;

import com.infogalaxy.addressbookapp.dto.ContactDTO;
import com.infogalaxy.addressbookapp.model.ContactData;
import com.infogalaxy.addressbookapp.repository.AddressBookRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressBookServiceImpl implements IAddressBookService{

    @Autowired
    AddressBookRepo addressBookRepo;

    @Override
    public ContactData addContact(ContactDTO contactDTO) {
        ContactData contactData = new ContactData(contactDTO);
        return addressBookRepo.save(contactData);
    }

    @Override
    public List<ContactData> getAllContacts() {
        return null;
    }
}
