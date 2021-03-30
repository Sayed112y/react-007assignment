import React from 'react';
import Issue from './Issue';

export default class IssueList extends React.Component {
  render () {

    let issueNodes = this.props.issues && this.props.issues.map(issue => (
        <Issue key={issue.id} id={issue.id} issue_description={issue.issue_description} 
        severity={issue.severity} status={issue.status}/>
    ));

    return (
      <>
        <table border="2">
          <thead>
            <tr className="heading">
              <th>ID</th>
              <th>IssueDescription</th>
              <th>Severity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {issueNodes}
          </tbody>
        </table>
      </>
    );
  }
}
