package com.infogalaxy.addressbookapp.repository;

import com.infogalaxy.addressbookapp.model.ContactData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressBookRepo extends JpaRepository<ContactData, Integer> {
}
