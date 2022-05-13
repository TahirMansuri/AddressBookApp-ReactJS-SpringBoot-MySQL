package com.infogalaxy.addressbookapp.service;

import com.infogalaxy.addressbookapp.dto.ContactDTO;
import com.infogalaxy.addressbookapp.exception.ResourceNotFoundException;
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
        return addressBookRepo.findAll();
    }

    @Override
    public void deleteContactById(int id) {
        ContactData contactData = addressBookRepo.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("Contact with Given ID Not Found"));
        addressBookRepo.delete(contactData);
    }

    @Override
    public ContactData getContactById(int id) {
        ContactData contactData = addressBookRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Contact with Given ID Not Found"));
        return contactData;
    }

    @Override
    public ContactData updateContactById(ContactDTO contactDTO, int id) {
        ContactData contactData = addressBookRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("Contact with Given ID Not Found"));
        contactData.updateContact(contactDTO);
        return addressBookRepo.save(contactData);
    }
}
