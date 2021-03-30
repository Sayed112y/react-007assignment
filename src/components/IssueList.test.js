import React from "react";
import { mount, shallow } from "enzyme";
import toJson from 'enzyme-to-json';
import Issue from "./Issue";
import IssueList from "./IssueList";
import renderer from 'react-test-renderer'
describe("When valid array props passed to Prodcut List component", () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      issues: [
        {
            id: 1,
            issue_description: "On clicking Delete,the applicationcrashes",
            severity: "Critical",
            status: "Open",
          },        
        {
          id: 2,
          issue_description: "The heading Add is wrongly displayed as edit",
          severity: "Minor",
          status: "Closed",
        },
        {
          id: 3,
          issue_description: "The payment functionality is missing",
          severity: "Major",
          status: "missing",
        }
      ],
    };
    wrapper = shallow(<IssueList {...props} />);
  });

  it('renders "Issue Description" as heading in second column ', () => {
    let head = wrapper.find('th').map(col=>col.text());
    expect(head[1]).toContain('Issue Name');
  });

  it('renders "status" as heading in fourth column ', () => {
    let head = wrapper.find('th').map(col=>col.text());
    expect(head[3]).toContain('Status');
  });

  it("passes the 2nd Issue's description as props to second Component", () => {
    let data =  (wrapper.find(Issue));
    expect(toJson(data)[1].node.props.issue_description).toEqual('The employee number 20189999 wrongly displayed as 20183949');
  });

  it("passes the 2nd Issue's status as props to second Component", () => {
    let data =  (wrapper.find(Issue));
    expect(toJson(data)[1].node.props.status).toEqual("Closed");
  });

});

describe("When issues array props passed to Issue List component is null", () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = { issues: null };
    wrapper = shallow(<IssueList {...props} />);
  });

  it("should not crash and no Issue Componet is rendered", () => {
    let head = wrapper.find('th').map(col=>col.text());
    expect(head).toEqual([ 'ID', 'Issue Description', 'Severity', 'Status' ]);

    let body = wrapper.find('tbody');
    expect(body.find('tr').length).toEqual(0);
  });
});
