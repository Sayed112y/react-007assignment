import IssuesData from './IssuesData';

export default class IssueApi {
	static getAllIssues() {
	    return IssuesData.issues;
	}
}