import Ember from 'ember';
import Model from 'travis/models/model';
import DS from 'ember-data';

export default Model.extend({
  created_at: DS.attr(),
  event_type: DS.attr(),
  result: DS.attr(),
  message: DS.attr(),
  headCommit: DS.attr(),
  baseCommit: DS.attr(),
  branchName: DS.attr(),
  tagName: DS.attr(),
  pullRequest: DS.attr('boolean'),
  pullRequestTitle: DS.attr(),
  pullRequestNumber: DS.attr('number'),
  repo: DS.belongsTo('repo', { async: true }),
  commit: DS.belongsTo('commit', { async: true }),
  build: DS.belongsTo('build', { async: true }),

  isAccepted: function() {
    // For some reason some of the requests have a null result beside the fact that
    // the build was created. We need to look into it, but for now we can just assume
    // that if build was created, the request was accepted
    return this.get('result') === 'accepted' || this.get('build.id');
  }.property('result'),

  isPullRequest: function() {
    return this.get('event_type') === 'pull_request';
  }.property('event_type')
});
