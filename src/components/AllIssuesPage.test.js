// Below test case is done with Enzyme’s Full DOM rendering.
//     1. Snapshot testing of AllProductsPage using Eznyme’s Full DOM rendering

// Below test case is done with Enzyme’s Shallow DOM rendering.
//     2. Test case to check if correct heading name is rendered 
//     3. Test case to check if one ProductList React component is rendered

import React from 'react';
import { mount, shallow } from 'enzyme';
import AllIssuesPage from './AllIssuesPage';
import IssueList from './IssueList';
import renderer from 'react-test-renderer'

describe('All Issues Page Snapshot', () => {
    let mountwrapper;
    
    beforeEach(()=>{
        mountwrapper=mount(<AllIssuesPage/>);
    })    

    afterEach(()=>{
        mountwrapper.unmount();
    })

    it('renders correctly', () => {
        expect(mountwrapper).toMatchSnapshot();
    });

});


describe('All Issues Page rendering of elements', () => {
    let wrapper;

    beforeEach(()=>{
        wrapper=shallow(<AllIssuesPage/>);
    })

    afterEach(()=>{
        wrapper.unmount();
    })

    it('renders correct heading for Issues List', () => {
        expect(wrapper.find('h1').render().text()).toEqual("Issue List");
    });

    it('renders one Issue List Component ', () => {
        expect(wrapper.find(IssueList).length).toEqual(1);
    });
});
