/**
 * Created by Matthias on 01/08/14.
 */
Template.comment.helpers({
    submittedText: function() {
        var dateCommentCreated = new Date(this.submitted);
        var day = dateCommentCreated.getDate();
        var month = dateCommentCreated.getMonth() + 1;
        var year = dateCommentCreated.getFullYear();
        var actualDate = (day <= 9 ? '0' + day : day) + "." + (month<=9 ? '0' + month : month) + "." + year + " - " + (dateCommentCreated.getHours() <= 9 ? '0' + dateCommentCreated.getHours() : dateCommentCreated.getHours()) + ":" + (dateCommentCreated.getMinutes() <= 9 ? '0' + dateCommentCreated.getMinutes() : dateCommentCreated.getMinutes());
        return actualDate;
    },
    ownerOfComment: function() {
        return this.userId == Meteor.userId();
    }
});

Template.comment.events({
    'click .deleteComment': function(e) {
        e.preventDefault();
        Comments.remove(this._id);
    }
});