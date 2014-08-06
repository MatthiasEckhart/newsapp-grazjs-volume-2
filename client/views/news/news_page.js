/**
 * Created by Matthias on 01/08/14.
 */
Template.newsPage.helpers({
    comments: function() {
        return Comments.find({newsItemId: this._id});
    }
});