/**
 * Created by Matthias on 01/08/14.
 */
Meteor.publish('news', function() {
    return News.find();
});

Meteor.publish('comments', function(newsItemId) {
    return Comments.find({newsItemId: newsItemId});
});