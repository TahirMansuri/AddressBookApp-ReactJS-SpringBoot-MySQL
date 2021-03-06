import React, {useState, useEffect} from 'react'

import AddressBookService from '../service/AddressBookService'
import { useNavigate, useParams } from 'react-router-dom';
const AddAddressBookComponent = () => {

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [phone, setPhone] = useState('')

    const getCity = (e) => setCity(e.target.value);
    const getState = (e) => setState(e.target.value);

    const navigate = useNavigate();

    const saveOrUpdateBook = (e) => {
        e.preventDefault();
        console.log(name+"\n"+address+"\n"+city+"\n"+state+"\n"+zip+"\n"+phone);

        const contact = {name,address,city,state,zip,phone};

        if(id){
            AddressBookService.updateContactById(contact,id).then((response)=>{
                console.log(response.data);
                navigate("/getAllContacts");
            }).catch(error=>{
                console.log(error);
            });
        } else {
            AddressBookService.addContact(contact).then((response)=>{
                console.log(response.data);
                navigate("/getAllContacts");
            }).catch(error=>{
                console.log(error);
            });    
        }
    }
    
    const {id} = useParams();
    console.log(id);
    
    useEffect(() => {
      AddressBookService.getContactById(id).then((response)=>{
        setName(response.data.name);
        setAddress(response.data.address);
        setCity(response.data.city);
        setState(response.data.state);
        setZip(response.data.zip);
        setPhone(response.data.phone);
      }).catch(error=>{
          console.log(error);
      });
    }, [])
    
    
  return (
    <div>
        <div class="form-content">
            <form class="form" action="#" onsubmit="save()" onreset="resetForm()">
            <div class="form-head">PERSON CONTACT FORM</div>
            <div>
                <div>
                        <p>
                            <input type="text" placeholder=" " id="fullname" name="fullname" required
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                            <label>Full Name :</label>  
                        </p>
                        <error-output class="fullname-error" for="text"></error-output>
                        <p>
                            <textarea id="address" name="address" requiredcols="10" rows="5"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}></textarea>
                            <label>Address :</label>
                        </p>

                    <div class='row-content' >
                            <select class='form-control' id="city" name="city" onChange={(e) => getCity(e)} value={city}>
                                <option value="None">Select City</option>
                                <option value="Shahada">Shahada</option>
                                <option value="Taloda">Taloda</option>
                                <option value="Nandurbar">Nandurbar</option>
                                <option value="Dondaicha">Dondaicha</option>
                            </select>
                            <error-output class="fullname-error" for="text"></error-output>
                            <select class="form-control"  id="state" name="state" onChange={(e) => getState(e)} value={state}>
                                <option value="None">Select State</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="MP">MP</option>
                                <option value="Gujrat">Gujrat</option>
                                <option value="Punjab">Punjab</option>
                            </select>
                            <p>
                            <input placeholder=" " id="zip" name="zip" required 
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}/>
                            <label>Enter the Zip :</label>
                            </p>  
                    </div>
                    <p>
                        <input placeholder=" " id="phone" name="phone" required 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}/>
                        <label>Phone Number :</label>
                    </p>
                    <error-output class="phone-error" for="text"></error-output>
                    <div class="buttonParent">
                        <div class="submit-reset">
                            <button className='btn btn-info' onClick={(e) => saveOrUpdateBook(e)}>Submit</button>
                            <button type="reset" className='btn btn-info' style={{marginLeft: "20px"}}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default AddAddressBookComponent