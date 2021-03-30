import React from 'react';

export default class Issue extends React.Component {
  render() {
    return (
        <tr>
          <td>{this.props.id}</td>
          <td>{this.props.issue_description}</td>
          <td>{this.props.severity}</td>
          <td>{this.props.status}</td>
        </tr>
    );
  }
}
