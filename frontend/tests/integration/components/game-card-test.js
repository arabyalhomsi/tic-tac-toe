import { module, test } from 'qunit';
import { setupRenderingTest } from 'tic-tac-toe/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | game-card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('playerx', 'Player X');
    this.set('playero', 'Player O');
    this.set('winner', 'X');
    this.set('date', new Date('2014'));

    // Template block usage:
    await render(hbs`
      <GameCard
        @playerx={{this.playerx}}
        @playero={{this.playero}}
        winner={{this.winner}}
        @date={{this.date}}
      />
    `);

    assert
      .dom(this.element)
      .hasText('Player X vs Player O Jan 1, 2014, 01:00 AM');
  });
});
