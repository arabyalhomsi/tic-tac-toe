import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import RouterService from '@ember/routing/router-service';
import { action } from '@ember/object';

export default class GameController extends Controller {
  @tracked playerxName = '';
  @tracked playeroName = '';
  @service declare router: RouterService;

  @action
  async goToGame(): Promise<void> {
    if (this.playerxName === '' || this.playeroName === '') {
      return;
    }

    await this.router.transitionTo('game', {
      queryParams: {
        playerx: this.playerxName,
        playero: this.playeroName,
      },
    });

    this.reset();
  }

  reset(): void {
    this.playerxName = '';
    this.playeroName = '';
  }
}
