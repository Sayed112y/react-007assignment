import React from "react";
import IssueList from "./IssueList";
import IssueApi from "../data/IssueApi";

export default class AllIssuesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: []
        };
    }
    componentDidMount() {
        this.setState({ issues: IssueApi.getAllIssues() });
    }
    render() {
        return (
            <>
                <h1>Issue List</h1>
                <IssueList issues={this.state.issues} />
            </>
        );
    }
}
