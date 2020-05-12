import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../store/actions/profile";
import ContactItem from './ContactItem'

import { Button, Header, Image, Modal } from 'semantic-ui-react'

import Spinner from "../layout/Spinner";
import ContactForm from './ContactForm'


const Contacts = ({
  getCurrentProfile,
  auth: { user },
  profile: {profile, loading},
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);


  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div>
        <section
          className="kindergarten-features"
          style={{ padding_top: "20px" }} >
          <div className="container">
         <div>  
  <Modal trigger={<Button>Add New</Button>}>
    <Modal.Header>Add Contact</Modal.Header>
    <Modal.Content >
    <ContactForm/>
    </Modal.Content>
  </Modal></div> 
  <div>

      { profile.contacts.map(contact =>(
          <ContactItem key={contact._id}  name={contact.name} phone={contact.phone
        }/>
      )) }
  </div>       
          </div>
        </section>
      </div>
    </Fragment>
  );
};
Contacts.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Contacts);
