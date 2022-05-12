import React from 'react'

const AddAddressBookComponent = () => {
  return (
    <div>
        <div class="form-content">
            <form class="form" action="#" onsubmit="save()" onreset="resetForm()">
            <div class="form-head">PERSON CONTACT FORM</div>
            <div>
                <div>
                        <p>
                            <input type="text" placeholder=" " id="fullname" name="fullname" required />
                            <label>Full Name :</label>  
                        </p>
                        <error-output class="fullname-error" for="text"></error-output>
                        <p>
                            <textarea id="address" name="address" requiredcols="10" rows="5"></textarea>
                            <label>Address :</label>
                        </p>

                    <div class='row-content'>
                            <select class='form-control' id="city" name="city">
                                <option value="None">Select City</option>
                                <option value="Shahada">Shahada</option>
                                <option value="Taloda">Taloda</option>
                                <option value="Nandurbar">Nandurbar</option>
                                <option value="Dondaicha">Dondaicha</option>
                            </select>
                            <error-output class="fullname-error" for="text"></error-output>
                            <select class="form-control"  id="state" name="state">
                                <option value="None">Select State</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="MP">MP</option>
                                <option value="Gujrat">Gujrat</option>
                                <option value="Punjab">Punjab</option>
                            </select>
                            <p>
                            <input placeholder=" " id="zip" name="zip" required />
                            <label>Enter the Zip :</label>
                            </p>  
                    </div>
                    <p>
                        <input placeholder=" " id="phone" name="phone" required />
                        <label>Phone Number :</label>
                    </p>
                    <error-output class="phone-error" for="text"></error-output>
                    <div class="buttonParent">
                        <div class="submit-reset">
                            <button type="submit" class="button submitButton" id="submitButton">Submit</button>
                            <button type="reset" class="button submitButton">Reset</button>
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