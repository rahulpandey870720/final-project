import React from 'react'

export default function Checkout() {
  return (
    <>
    <section clasName="banner_area">
      <div clasName="banner_inner d-flex align-items-center">
        <div clasName="container">
          <div
            clasName="banner_content d-md-flex justify-content-between align-items-center"
          >
            <div clasName="mb-3 mb-md-0">
              <h2>Product Checkout</h2>
              <p>Very us move be blessed multiply night</p>
            </div>
            <div clasName="page_link">
              <a href="index.html">Home</a>
              <a href="checkout.html">Product Checkout</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section clasName="checkout_area section_gap">
      <div clasName="container">
        <div clasName="returning_customer">
          <div clasName="check_title">
            <h2>
              Returning Customer?
              <a href="#">Click here to login</a>
            </h2>
          </div>
          <p>
            If you have shopped with us before, please enter your details in the
            boxes below. If you are a new customer, please proceed to the
            Billing & Shipping section.
          </p>
          <form
            clasName="row contact_form"
            action="#"
            method="post"
            novalidate="novalidate"
          >
            <div clasName="col-md-6 form-group p_star">
              <input
                type="text"
                clasName="form-control"
                id="name"
                name="name"
                value=" "
              />
              <span
                clasName="placeholder"
                data-placeholder="Username or Email"
              ></span>
            </div>
            <div clasName="col-md-6 form-group p_star">
              <input
                type="password"
                clasName="form-control"
                id="password"
                name="password"
                value=""
              />
              <span clasName="placeholder" data-placeholder="Password"></span>
            </div>
            <div clasName="col-md-12 form-group">
              <button type="submit" value="submit" clasName="btn submit_btn">
                Send Message
              </button>
              <div clasName="creat_account">
                <input type="checkbox" id="f-option" name="selector" />
                <label for="f-option">Remember me</label>
              </div>
              <a clasName="lost_pass" href="#">Lost your password?</a>
            </div>
          </form>
        </div>
        <div clasName="cupon_area">
          <div clasName="check_title">
            <h2>
              Have a coupon?
              <a href="#">Click here to enter your code</a>
            </h2>
          </div>
          <input type="text" placeholder="Enter coupon code" />
          <a clasName="tp_btn" href="#">Apply Coupon</a>
        </div>
        <div clasName="billing_details">
          <div clasName="row">
            <div clasName="col-lg-8">
              <h3>Billing Details</h3>
              <form
                clasName="row contact_form"
                action="#"
                method="post"
                novalidate="novalidate"
              >
                <div clasName="col-md-6 form-group p_star">
                  <input
                    type="text"
                    clasName="form-control"
                    id="first"
                    name="name"
                  />
                  <span
                    clasName="placeholder"
                    data-placeholder="First name"
                  ></span>
                </div>
                <div clasName="col-md-6 form-group p_star">
                  <input
                    type="text"
                    clasName="form-control"
                    id="last"
                    name="name"
                  />
                  <span clasName="placeholder" data-placeholder="Last name"></span>
                </div>
                <div clasName="col-md-12 form-group">
                  <input
                    type="text"
                    clasName="form-control"
                    id="company"
                    name="company"
                    placeholder="Company name"
                  />
                </div>
                <div clasName="col-md-6 form-group p_star">
                  <input
                    type="text"
                    clasName="form-control"
                    id="number"
                    name="number"
                  />
                  <span
                    clasName="placeholder"
                    data-placeholder="Phone number"
                  ></span>
                </div>
                <div clasName="col-md-6 form-group p_star">
                  <input
                    type="text"
                    clasName="form-control"
                    id="email"
                    name="compemailany"
                  />
                  <span
                    clasName="placeholder"
                    data-placeholder="Email Address"
                  ></span>
                </div>
                <div clasName="col-md-12 form-group p_star">
                  <select clasName="country_select">
                    <option value="1">Country</option>
                    <option value="2">Country</option>
                    <option value="4">Country</option>
                  </select>
                </div>
                <div clasName="col-md-12 form-group p_star">
                  <input
                    type="text"
                    clasName="form-control"
                    id="add1"
                    name="add1"
                  />
                  <span
                    clasName="placeholder"
                    data-placeholder="Address line 01"
                  ></span>
                </div>
                <div clasName="col-md-12 form-group p_star">
                  <input
                    type="text"
                    clasName="form-control"
                    id="add2"
                    name="add2"
                  />
                  <span
                    clasName="placeholder"
                    data-placeholder="Address line 02"
                  ></span>
                </div>
                <div clasName="col-md-12 form-group p_star">
                  <input
                    type="text"
                    clasName="form-control"
                    id="city"
                    name="city"
                  />
                  <span clasName="placeholder" data-placeholder="Town/City"></span>
                </div>
                <div clasName="col-md-12 form-group p_star">
                  <select clasName="country_select">
                    <option value="1">District</option>
                    <option value="2">District</option>
                    <option value="4">District</option>
                  </select>
                </div>
                <div clasName="col-md-12 form-group">
                  <input
                    type="text"
                    clasName="form-control"
                    id="zip"
                    name="zip"
                    placeholder="Postcode/ZIP"
                  />
                </div>
                <div clasName="col-md-12 form-group">
                  <div clasName="creat_account">
                    <input type="checkbox" id="f-option2" name="selector" />
                    <label for="f-option2">Create an account?</label>
                  </div>
                </div>
                <div clasName="col-md-12 form-group">
                  <div clasName="creat_account">
                    <h3>Shipping Details</h3>
                    <input type="checkbox" id="f-option3" name="selector" />
                    <label for="f-option3">Ship to a different address?</label>
                  </div>
                  <textarea
                    clasName="form-control"
                    name="message"
                    id="message"
                    rows="1"
                    placeholder="Order Notes"
                  ></textarea>
                </div>
              </form>
            </div>
            <div clasName="col-lg-4">
              <div clasName="order_box">
                <h2>Your Order</h2>
                <ul clasName="list">
                  <li>
                    <a href="#"
                      >Product
                      <span>Total</span>
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      >Fresh Blackberry
                      <span clasName="middle">x 02</span>
                      <span clasName="last">$720.00</span>
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      >Fresh Tomatoes
                      <span clasName="middle">x 02</span>
                      <span clasName="last">$720.00</span>
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      >Fresh Brocoli
                      <span clasName="middle">x 02</span>
                      <span clasName="last">$720.00</span>
                    </a>
                  </li>
                </ul>
                <ul clasName="list list_2">
                  <li>
                    <a href="#"
                      >Subtotal
                      <span>$2160.00</span>
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      >Shipping
                      <span>Flat rate: $50.00</span>
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      >Total
                      <span>$2210.00</span>
                    </a>
                  </li>
                </ul>
                <div clasName="payment_item">
                  <div clasName="radion_btn">
                    <input type="radio" id="f-option5" name="selector" />
                    <label for="f-option5">Check payments</label>
                    <div clasName="check"></div>
                  </div>
                  <p>
                    Please send a check to Store Name, Store Street, Store Town,
                    Store State / County, Store Postcode.
                  </p>
                </div>
                <div clasName="payment_item active">
                  <div clasName="radion_btn">
                    <input type="radio" id="f-option6" name="selector" />
                    <label for="f-option6">Paypal </label>
                    <img src="img/product/single-product/card.jpg" alt="" />
                    <div clasName="check"></div>
                  </div>
                  <p>
                    Please send a check to Store Name, Store Street, Store Town,
                    Store State / County, Store Postcode.
                  </p>
                </div>
                <div clasName="creat_account">
                  <input type="checkbox" id="f-option4" name="selector" />
                  <label for="f-option4">I’ve read and accept the </label>
                  <a href="#">terms & conditions*</a>
                </div>
                <a clasName="main_btn" href="#">Proceed to Paypal</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
