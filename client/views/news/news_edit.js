/**
 * Created by Matthias on 01/08/14.
 */
Template.newsEdit.events({
    'submit form': function(e) {
        e.preventDefault();
        var currentNewsItemId = this._id;
        var newsItemProperties = {
            title: $(e.target).find('[name=title]').val(),
            message: $(e.target).find('[name=message]').val()
        }
        News.update(currentNewsItemId, {$set: newsItemProperties}, function(error) {
            if (error) {
                alert(error.reason);
            } else {
                Router.go('newsPage', {_id: currentNewsItemId});
            }
        });
    },
    'click .delete': function(e) {
        e.preventDefault();
        if (confirm("Delete this news item?")) {
            var currentNewsItemId = this._id;
            News.remove(currentNewsItemId);
            Router.go('newsList');
        }
    }
});

Template.newsEdit.rendered = function(){
    $('#newsinput').wysihtml5();
};