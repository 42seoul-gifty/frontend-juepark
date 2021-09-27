
import React from "react";
import { connect } from "react-redux";
import GiftBodyInfoSender from "../../components/body/GiftBodyInfoSender";
import { updateName } from "../modules/sender";

const SenderContainer = ({ name, updateName }) => {
  return (
    <GiftBodyInfoSender name={name} updateName={updateName} />
  );
};

const mapStateToProps = (state) => ({
  name: state.sender.name,
});
                                                                      
const mapDispatchToProps = (dispatch, state) => ({
  updateName: (name) => {
    console.log("name:" + name);
    dispatch(updateName(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SenderContainer);
