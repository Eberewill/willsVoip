import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../store/actions/profile";
import { Card, Message, Icon } from "semantic-ui-react";
import Spinner from "../layout/Spinner";


import {
    FacebookShareCount,
  
    FacebookShareButton,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
   
    EmailShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
   
    TelegramIcon,
    WhatsappIcon,
    
    EmailIcon,
   
  } from "react-share"

const FriendInviter = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const shareUrl = 'http://github.com';
  const title = 'GitHub';


  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div>
        <section
          className="kindergarten-features"
          style={{ padding_top: "20px" }} >
          <div className="container">
           
            
            <div className="row">
              <div className="col-sm-12 features-boxes">
                <div className="row">

                <Message icon>
    <Icon name='circle notched' loading />
    <Message.Content>
  <Message.Header>Hello {user.name}</Message.Header>
      Click On the Button to invite your friends, Thanks
    </Message.Content>
  </Message>

                <Card.Group itemsPerRow={3}>
                    <Card>
                        <div className="Demo__some-network">
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            
          >
            <FacebookIcon size={40} round />
          </FacebookShareButton>

          
        </div>
                    </Card>
                    <Card><div className="Demo__some-network">
          <FacebookMessengerShareButton
            url={shareUrl}
            appId="521270401588372"
            
          >
            <FacebookMessengerIcon size={40} round />
          </FacebookMessengerShareButton>
        </div></Card>
                    <Card><div className="Demo__some-network">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            
          >
            <TwitterIcon size={40} round />
          </TwitterShareButton>

          <div className="Demo__some-network__share-count">&nbsp;</div>
        </div></Card>
                    <Card><div className="Demo__some-network">
          <TelegramShareButton
            url={shareUrl}
            title={title}
            
          >
            <TelegramIcon size={40} round />
          </TelegramShareButton>

          <div className="Demo__some-network__share-count">&nbsp;</div>
        </div></Card>
                    <Card><div className="Demo__some-network">
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            separator=":: "
            
          >
            <WhatsappIcon size={40} round />
          </WhatsappShareButton>

          <div className="Demo__some-network__share-count"></div>
        </div></Card>

                    <Card><div className="Demo__some-network">
          <LinkedinShareButton url={shareUrl} >
            <LinkedinIcon size={40} round />
          </LinkedinShareButton>
        </div></Card>
                    <Card><div className="Demo__some-network">
          <EmailShareButton
            url={shareUrl}
            subject={title}
            body="body"
            
          >
            <EmailIcon size={40} round />
          </EmailShareButton>
        </div></Card>
                    </Card.Group>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};
FriendInviter.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(FriendInviter);
