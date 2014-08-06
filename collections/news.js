/**
 * Created by Matthias on 01/08/14.
 */
News = new Meteor.Collection('news');

News.allow({
    insert: function(userId) {
        return !! userId; // ensure the user is logged in
    },
    update: ownsDocument,
    remove: ownsDocument
});

Meteor.methods({
    newsItem: function(newsItemAttributes) {
        var user = Meteor.user();

        if (!user) {
            throw new Meteor.Error(401, "You need to login to post news");
        }
        if (!newsItemAttributes.title) {
            throw new Meteor.Error(422, 'Please fill in a headline');
        }
        // details: http://underscorejs.org/#extend and http://underscorejs.org/#pick
        var newsItem = _.extend(_.pick(newsItemAttributes, 'title', 'message'), {
            userId: user._id,
            author: user.username,
            submitted: new Date().getTime()
        });
        var newsItemId = News.insert(newsItem);
        return newsItemId;
    }
});