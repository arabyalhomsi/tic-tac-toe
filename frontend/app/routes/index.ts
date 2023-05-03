import Route from '@ember/routing/route';
import { Game } from 'tic-tac-toe/types/game';
import { getData } from 'tic-tac-toe/utils/fetch';

export default class IndexRoute extends Route {
  async model(): Promise<Game[]> {
    const response = await getData('/games');
    const data = (await response.json()) as Game[];

    return data;
  }
}
