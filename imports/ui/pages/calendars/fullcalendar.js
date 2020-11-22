import './fullcalendar.html';
import { Template } from 'meteor/templating';
import fullCalendar from 'fullcalendar'; // eslint-disable-line no-unused-vars

Template.fullcalendar.onRendered(function renderCalendar() {
    const instance = this; // template instance
    const div = instance.$(instance.firstNode);
    if (instance.data != null) {
        // jquery takes care of undefined values, no need to check here
        // console.log(instance);
        div.attr('id', instance.data.id);
        div.addClass(instance.data.class);
    }
    div.fullCalendar(instance.data);
});
