import React, { useState, useEffect } from 'react'
import delete1 from '../assets/icons/delete-black-18dp.svg'
import update1 from '../assets/icons/create-black-18dp.svg'
import img1 from '../assets/profile-images/Ellipse -1.png'
import { Link } from "react-router-dom";
import AddressBookService from '../service/AddressBookService';

const ViewAddressBookComponent = () => {

  const [contacts, setContacts] = useState([])
  const [size, setSize] = useState(0)

  useEffect(() => {
    getAllContacts();
  }, [])
  
  const getAllContacts = () => {
    AddressBookService.getAllContacts().then((response)=>{
        setContacts(response.data);
        console.log(response.data);
        setSize(Object.keys(contacts).length);
    }).catch(error=>{
        console.log(error);
    });
  }

  return (
    <div>
         <div class="form-content">
        
            <div class="header-content2">
                <div class="emp-detail-text">
                    Person Details <div class="emp-count">{size}</div>
                </div>
                <Link to="/" className="btn btn-info" > ADD CONTACT </Link>
            </div>
        </div>
        <div class="form-content">
    
            <table id="display" class="table">
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip</th>
                <th>Phone</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    contacts.map(
                        contact => 
                        <tr key = {contact.id}>
                        <td> {contact.id} </td>
                        <td> {contact.name} </td>
                        <td> {contact.address} </td>
                        <td> {contact.city} </td>
                        <td> {contact.state} </td>
                        <td> {contact.zip} </td>
                        <td> {contact.phone} </td>
                        <td>
                                <img src={delete1} alt="delete" />
                                <img src={update1} alt="edit" />
                        </td>
                        </tr>        
                    )
                }
            </tbody>
            </table>

        </div>
    </div>
  )
}

export default ViewAddressBookComponent