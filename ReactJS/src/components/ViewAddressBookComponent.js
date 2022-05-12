import React from 'react'
import delete1 from '../assets/icons/delete-black-18dp.svg'
import update1 from '../assets/icons/create-black-18dp.svg'
import img1 from '../assets/profile-images/Ellipse -1.png'
import { Link } from "react-router-dom";
const ViewAddressBookComponent = () => {
  return (
    <div>
         <div class="form-content">
        
            <div class="header-content2">
                <div class="emp-detail-text">
                    Person Details <div class="emp-count">0</div>
                </div>
                <Link to="/" className="btn btn-info" > ADD CONTACT </Link>
            </div>
        </div>
        <div class="form-content">
    
            <table id="display" class="table">
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone</th>
            <th>Actions</th>
            
            <tr>
            <td>Sanjana</td>
            <td>Shahada</td>
            <td>Shahada</td>
            <td>Maharashtra</td>
            <td>425409</td>
            <td>7030820545</td>
            <td>
                    <img src={delete1} alt="delete" />
                    <img src={update1} alt="edit" />
            </td>
            </tr>
            
            </table>

        </div>
    </div>
  )
}

export default ViewAddressBookComponent