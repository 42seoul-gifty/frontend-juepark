
import React from "react";
import { connect } from "react-redux";
import GiftBodyInfoSender from "../../components/body/GiftBodyInfoSender";
import { updateName, updateContact } from "../modules/sender";

const SenderContainer = ({ name, updateName, contact, updateContact }) => {
  return (
    <GiftBodyInfoSender name={name} updateName={updateName} contact={contact} updateContact={updateContact} />
  );
};

export default connect(
  state => ({
    name: state.sender.name,
    contact: state.sender.contact,
  }),
  {
    updateName,
    updateContact,
  },
  )(SenderContainer);