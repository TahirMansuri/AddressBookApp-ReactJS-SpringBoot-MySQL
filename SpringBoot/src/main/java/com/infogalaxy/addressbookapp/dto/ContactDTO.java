package com.infogalaxy.addressbookapp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContactDTO {
    private String name;
    private String address;
    private String city;
    private String state;
    private String zip;
    private String phone;
}
