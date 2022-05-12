package com.infogalaxy.addressbookapp.controller;

import com.infogalaxy.addressbookapp.dto.ContactDTO;
import com.infogalaxy.addressbookapp.model.ContactData;
import com.infogalaxy.addressbookapp.service.AddressBookServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/addressbook")
public class AddressBookController {

    @Autowired
    AddressBookServiceImpl addressBookService;

    @RequestMapping(value = {"","/","/api"})
    public String home() {
        return "<h1>Welcome to AddressBook App</h1>";
    }

    @PostMapping("/addContact")
    public ResponseEntity<ContactData> addContact(@RequestBody  ContactDTO contactDTO) {

        return new ResponseEntity<>(addressBookService.addContact(contactDTO), HttpStatus.OK);
    }
}
