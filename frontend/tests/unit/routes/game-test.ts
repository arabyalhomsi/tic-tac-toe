import { module, test } from 'qunit';
import { setupTest } from 'tic-tac-toe/tests/helpers';

module('Unit | Route | game', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:game');
    assert.ok(route);
  });
});
