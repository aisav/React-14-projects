var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toExist();
    });

    describe('render', () => {
        it('should render clock to output', () => {
            var clock = TestUtils.renderIntoDocument(<Clock seconds={65}/>);
            var $el = $(ReactDOM.findDOMNode(clock));
            var actualText = $el.find('.clock-text').text();

            expect(actualText).toBe('01:05');
        });
    });

});
