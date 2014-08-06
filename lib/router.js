/**
 * Created by Matthias on 01/08/14.
 */

Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() { return [Meteor.subscribe('news')]; }
});

Router.map(function() {
    this.route('newsList', {path: '/'});
    this.route('newsPage', {
        path: '/news/:_id',
        waitOn: function() {
            return Meteor.subscribe('comments', this.params._id);
        },
        data: function() { return News.findOne(this.params._id); }
    });
    this.route('newsCreate', {path: '/create'});
    this.route('newsEdit', {
        path: '/news/:_id/edit',
        data: function() { return News.findOne(this.params._id); }
    });
});

var requireLogin = function(pause) {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
        pause();
    }
}

Router.onBeforeAction(requireLogin, {only: 'newsCreate'});