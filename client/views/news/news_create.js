/**
 * Created by Matthias on 01/08/14.
 */
Template.newsCreate.events({
    'submit form': function(e) {
        e.preventDefault();
        var newsItem = {
            title: $(e.target).find('[name=title]').val(),
            message: $(e.target).find('[name=message]').val()
        }
        Meteor.call('newsItem', newsItem, function(error, id) {
            if (error) {
                return alert(error.reason);
            }
            Router.go('newsPage', {_id: id});
        });
    }
});

Template.newsCreate.rendered = function(){
    $('#newsinput').wysihtml5();
};