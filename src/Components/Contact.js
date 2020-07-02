import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {
   constructor() {
      super()

      this.state = {
         name: '',
         email: '',
         message: ''
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
   }
   handleChange = e => {
      this.setState({ [e.target.name]: e.target.value })
   }
   async handleSubmit(e) {
      e.preventDefault()

      const {name, email, message} = this.state
      // eslint-disable-next-line
      const form = await axios.post('/api/form',{
         name,
         email,
         message
      })
   }

  render() {

    if(this.props.data){
      var name = this.props.data.name
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
                  <p className="lead">{message}</p>
                  <br/>
                  <p className="lead warning">Warning: Contact form not yet configured, please contact me via normal email for now</p>
            </div>
         </div>
         <div className="row">
            <div className="eight columns">
               <form action="" id="contactForm" name="contactForm" method="POST" onSubmit={this.handleSubmit}>
					<fieldset>
                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" value={this.state.name} onChange={this.handleChange}/>
                  </div>
                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" value={this.state.email} onChange={this.handleChange}/>
                  </div>
                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                  </div>
                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" value={this.state.message} onChange={this.handleChange}></textarea>
                  </div>
                  <div>
                     <button type="submit" className="submit">Submit</button>
                     {/* <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span> */}
                  </div>
					</fieldset>
				   </form>
           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>
            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">
					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {city} <br />
						   {state}, {zip}<br />
						   <span><a href="tel://9561362885">{phone}</a></span><br />
                     <span><a href="mailto:patilashishdx@gmail.com">{email}</a></span>
					   </p>
				   </div>
            </aside>
      </div>
   </section>
    );
  }

}

export default Contact;
