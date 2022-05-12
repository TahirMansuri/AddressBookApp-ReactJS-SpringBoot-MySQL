package com.infogalaxy.addressbookapp.controller;

import com.infogalaxy.addressbookapp.dto.ContactDTO;
import com.infogalaxy.addressbookapp.model.ContactData;
import com.infogalaxy.addressbookapp.service.AddressBookServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/addressbook")
@CrossOrigin("*")
public class AddressBookController {

    @Autowired
    AddressBookServiceImpl addressBookService;

    @RequestMapping(value = {"","/","/api"})
    public String home() {
        return "<h1>Welcome to AddressBook App</h1>";
    }

    /***
     *
     * @param contactDTO
     * @return
     */
    @PostMapping("/addContact")
    public ResponseEntity<ContactData> addContact(@RequestBody  ContactDTO contactDTO) {

        return new ResponseEntity<>(addressBookService.addContact(contactDTO), HttpStatus.OK);
    }

    /***
     *
     * @return
     */
    @GetMapping("/getAllContacts")
    public ResponseEntity<List<ContactData>> getAllContacts() {
        return new ResponseEntity<List<ContactData>>(addressBookService.getAllContacts(),HttpStatus.OK);
    }

    /***
     *
     * @param id
     */
    @PutMapping("/deleteContactById/{id}")
    public void deleteContactById(@PathVariable int id){
        addressBookService.deleteContactById(id);
    }

    @GetMapping("/getContactById/{id}")
    public ResponseEntity<ContactData> getContactById(@PathVariable int id) {
        ContactData contactData = addressBookService.getContactById(id);
        return new ResponseEntity<ContactData>(contactData,HttpStatus.OK);
    }
}
