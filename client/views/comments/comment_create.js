/**
 * Created by Matthias on 01/08/14.
 */
Template.commentCreate.events({
    'submit form': function(e, template) {
        e.preventDefault();
        var $body = $(e.target).find('[name=body]');
        var comment = {
            body: $body.val(),
            newsItemId: template.data._id
        };
        Meteor.call('comment', comment, function(error) {
            if (error){
                throwError(error.reason);
            } else {
                $body.val('');
            }
        });
    }
});