import './home.html';
import './footer.js';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

Template.home.helpers({
    isLoggedIn() {
        if (Meteor.user()) {
            return '';
        }
        return 'disabled';
    },
});


Template.home.events({
    'click .js-cals-link'(event) { // eslint-disable-line no-unused-vars
        if (Meteor.user()) {
            return;
        }
        alert('Please create an account and/or login first.'); // eslint-disable-line no-alert
        return false; // eslint-disable-line consistent-return
    },
});
