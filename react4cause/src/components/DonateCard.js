import React from "react";
 
function DonateCard(props){
    const amount=props.amount;
    const title=props.title;

    return (
        <div id="donate">
        <div className="header">
            <h2 className="header__title">Make a black man happy</h2>
        </div>

    <div className="donation-box">
        <input type="radio" name="radio" id="option1" checked="checked">
            <label htmlFor="option1" className="donation_button">
                <span className="DonationTitle">{title}</span>
                <span className="DonationAmount">{amount}  '$'</span>
            </label>
        </input>
    </div>
        </div>
    )
}
 
export default DonateCard;