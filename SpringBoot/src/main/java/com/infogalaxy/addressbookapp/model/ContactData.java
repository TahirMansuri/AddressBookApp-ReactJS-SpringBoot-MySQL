package com.infogalaxy.addressbookapp.model;

import com.infogalaxy.addressbookapp.dto.ContactDTO;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GeneratorType;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
@Table(name = "ContactData")
public class ContactData {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;
    private String name;
    private String address;
    private String city;
    private String state;
    private String zip;
    private String phone;

    public ContactData(ContactDTO contactDTO) {
        this.name = contactDTO.getName();
        this.address = contactDTO.getAddress();
        this.city = contactDTO.getCity();
        this.state = contactDTO.getState();
        this.zip = contactDTO.getZip();
        this.phone = contactDTO.getPhone();
    }
}
