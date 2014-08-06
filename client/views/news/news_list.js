/**
 * Created by Matthias on 01/08/14.
 */
Template.newsList.helpers({
    news: function() {
        return News.find({}, {sort: {submitted: -1}}); // sort news items in descending order
    }
});