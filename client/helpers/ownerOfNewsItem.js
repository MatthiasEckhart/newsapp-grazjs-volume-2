/**
 * Created by Matthias on 01/08/14.
 */
UI.registerHelper('ownerOfNewsItem', function () {
    return this.userId == Meteor.userId();
});