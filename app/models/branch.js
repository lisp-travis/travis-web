import Ember from 'ember';
import Model from 'travis/models/model';
import DS from 'ember-data';

export default Model.extend({
  name: DS.attr('string'),
  defaultBranch: DS.attr('boolean'),
  lastBuild: DS.belongsTo('build'),

  builds: DS.hasMany('builds', { inverse: 'branch' }),
  repo: DS.belongsTo('repo', { inverse: 'defaultBranch' })
});
