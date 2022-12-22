import React from "react";
import '../App.css'
 
function Donate(){
 
    return (
        <div id="donate">
            <div className='page-content'>
            <div class="container">
            <div class="panel pricing-table">
                
                <div class="pricing-plan">
                <img src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png" alt="" class="pricing-img"></img>
                <h2 class="pricing-header">Make a Black Man Happy</h2>
                <ul class="pricing-features">
                    <li class="pricing-features-item">Make lives easier</li>
                    <li class="pricing-features-item">Help our comunity</li>
                </ul>
                <span class="pricing-price">5 $</span>
                <a href="#/" class="pricing-button">Donate</a>
                </div>
                <div class="pricing-plan">
                <img src="https://s28.postimg.cc/ju5bnc3x9/plane.png" alt="" class="pricing-img"></img>
                <h2 class="pricing-header">Make a Black Man The Happiest</h2>
                <ul class="pricing-features">
                    <li class="pricing-features-item">Make lives easier</li>
                    <li class="pricing-features-item">Help our comunity</li>
                </ul>
                <span class="pricing-price">50 $</span>
                <a href="#/" class="pricing-button is-featured">Donate</a>
                </div>  
                <div class="pricing-plan">
                <img src="https://s21.postimg.cc/tpm0cge4n/space-ship.png" alt="" class="pricing-img"></img>
                <h2 class="pricing-header">Make a Black Man Happier</h2>
                <ul class="pricing-features">
                    <li class="pricing-features-item">Make lives easier</li>
                    <li class="pricing-features-item">Help our comunity</li>                
                </ul>
                <span class="pricing-price">10 $</span>
                <a href="#/" class="pricing-button">Donate</a>
                </div>
            </div>  
            </div>
            </div>
        </div>
    );
}
 
export default Donate;
