
import React from "react";
import { connect } from "react-redux";
import GiftBodyInfoReceiver from "../../components/body/GiftBodyInfoReceiver";
import { updateName, updateContact } from "../modules/receiver";

const ReceiverContainer = ({ name, updateName, contact, updateContact }) => {
  return (
    <GiftBodyInfoReceiver name={name} updateName={updateName} contact={contact} updateContact={updateContact} />
  );
};

export default connect(
  state => ({
    name: state.receiver.name,
    contact: state.receiver.contact,
  }),
  {
    updateName,
    updateContact,
  },
  )(ReceiverContainer);