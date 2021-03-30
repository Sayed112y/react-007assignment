import React from 'react'
import App from './App';
import {shallow} from 'enzyme';
import AllIssuesPage from './components/AllIssuesPage';

let wrapper;

beforeEach(()=>{
    wrapper = shallow(<App/>);
});

it('displays All Issues Page',()=>{
    expect(wrapper.find(AllIssuesPage).length).toEqual(1);
})
