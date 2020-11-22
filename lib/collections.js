/* global Meals:true */
/* global Calendars:true */
/* global SimpleSchema:true */

//import { Mongo } from 'meteor/mongo';

Meals = new Mongo.Collection('meals');
Calendars = new Mongo.Collection('calendars');


// calendar schema
Calendars.attachSchema(new SimpleSchema({
    name: {
        type: String,
        max: 300,
        label: 'Certificate Name',
    },
    description: {
        type: Date,
        label: 'Achieved on ',
        max: 1000,
        autoform: {
            rows: 4,
        },
    },
    owner: {
        type: String,
        optional: true,
        autoform: {
            omit: true,
        },
    },
}));

// meals schema
Meals.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: 'Your Name:-(You may add some basic details about yourself)',
        max: 1000,
        autoform: {
            rows: 4,
        }
    },
    owner: {
        type: String,
        optional: true,
        autoform: {
            omit: true,
        },
    },
}));
