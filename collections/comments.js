/**
 * Created by Matthias on 01/08/14.
 */
Comments = new Meteor.Collection('comments');

Comments.allow({
    insert: function(userId) {
        return !! userId; // ensure the user is logged in
    },
    remove: ownsDocument
});

Meteor.methods({
    comment: function(commentAttributes) {
        var user = Meteor.user();
        var newsItem = News.findOne(commentAttributes.newsItemId);
        if (!user) {
            throw new Meteor.Error(401, "You need to login to comment");
        }
        if (!commentAttributes.body) {
            throw new Meteor.Error(422, 'Please write some content');
        }
        if (!newsItem) {
            throw new Meteor.Error(422, 'You must comment on a news item');
        }
        // details: http://underscorejs.org/#extend and http://underscorejs.org/#pick
        comment = _.extend(_.pick(commentAttributes, 'newsItemId', 'body'), {
            userId: user._id,
            author: user.username,
            submitted: new Date().getTime()
        });
        return Comments.insert(comment);
    }
});