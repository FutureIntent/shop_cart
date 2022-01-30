import React, { useState, useEffect } from 'react'
import './../styles/purchaseForm.css'

function PurchaseForm() {
    const [input, setInput] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        delivery: false,
        city: "Riga",
        paymentMethod: "cash",
        cardNum: "",
        ccv: ""
    });

    useEffect(() => {
        console.log(input)
    },[input])

    function handleChange(event) {
        const { name, value, type, checked } = event.target;

        type === 'checkbox'
           ? setInput(prevState => {
               return { ...prevState, [name]: checked }
           })
            : setInput(prevState => {
                return {...prevState,[name]: value}
            })
    }

    return (
        <div>
            <fieldset>
                <legend>Purchase details: </legend>
            <p>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" value={input.name} onChange={handleChange} required />
            </p>

            <p>
                <label htmlFor="surname">Surname:</label>
                <input type="text" name="surname" id="surname" value={input.surname} onChange={handleChange} required />
            </p>

            <p>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" value={input.email} onChange={handleChange} required />
            </p>

            <p>
                <label htmlFor="phone">Phone number:</label>
                <input type="tel" name="phone" id="phone" value={input.phone} onChange={handleChange} required />
            </p>

            <p>
                <label htmlFor="delivery">Delivery:</label>
                <input type="checkbox" name="delivery" checked={input.delivery} onChange={handleChange} />
            </p>
            {input.delivery &&
                <div>
                <h3>Your city: </h3>
                         <input type="radio" name="city" onChange={handleChange} value="Riga" id="Riga" required defaultChecked/>
                         <label htmlFor='Riga'>Riga</label>
                         <input type="radio" name="city" onChange={handleChange} value="Babite" id="Babite" />
                         <label htmlFor='Riga'>Babite</label>
                         <input type="radio" name="city" onChange={handleChange} value="Liepaja" id="Liepaja" />
                         <label htmlFor='Riga'>Liepaja</label>
                </div>
            }
            <p>
            <select name="paymentMethod" id="paymentMethod" onChange={handleChange}>
                        <option value="cash" defaultValue>Cash</option>
                        <option value="card">Credit Card</option>
            </select>
                </p>
                {input.paymentMethod === "card" &&
                    <div>
                        <p>
                            <label htmlFor="cardNum">Card number:</label>
                            <input type="number" name="cardNum" id="cardNumber" value={input.cardNum} onChange={handleChange} />
                        </p>

                        <p>
                            <label htmlFor="ccv">ccv:</label>
                            <input type="password" name="ccv" id="ccv" value={input.ccv} onChange={handleChange} />
                        </p>

                    </div>
                }
            </fieldset>
        </div>
        );
}
export default PurchaseForm;