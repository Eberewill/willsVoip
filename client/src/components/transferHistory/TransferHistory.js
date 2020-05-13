import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../store/actions/profile";
import { Card } from "semantic-ui-react";
import Spinner from "../layout/Spinner";
import { Message, Button, Divider, Icon , Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import TransferItem from './TransferItem'

const TransferHistory = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
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
           
            
            <div className="row">
<Table celled fixed  singleLine>
            <Table.Header>
      <Table.Row>
        <Table.HeaderCell>User</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
        <Table.HeaderCell>Type</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
      </Table.Row>
    </Table.Header></Table>
                {profile.transfers.map(trans =>(
                    <TransferItem key={trans._id} Amount={trans.amount} User={trans.t_user} Type={trans.type}
                    Status={trans.status} Date={trans.date} />
                ) )}




              <TransferItem/>


                {user && user.name}
               
                
                  


                
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};
TransferHistory.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(TransferHistory);
