import React from 'react';
import { connect } from 'react-redux';
import './email-list.css';

export function EmailList(props) {
  const emails = props.emailList.map((email, i) => (
    <li className="email-list-email" key={i}>
      <div className="email-list-email-from">{email.from}</div>
      <div className="email-list-email-title">{email.title}</div>
    </li>
  ));

  return (
    <div className="folder">
      <h2>{props.folderName}</h2>
      <ul className="email-list">{emails}</ul>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  const folder = state[props.match.params.folderId];
  return {
    folderName: folder.name,
    emailList: Object.keys(folder.emails).map(emailId => folder.emails[emailId])
  };
};

export default connect(mapStateToProps)(EmailList);
