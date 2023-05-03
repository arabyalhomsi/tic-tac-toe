import Route from '@ember/routing/route';

type Resolved<P> = P extends Promise<infer T> ? T : P;
export type GameRouteModel = Resolved<ReturnType<GameRoute['model']>>;

export default class GameRoute extends Route {
  controllerName = 'game';

  model(): void {
    //
  }
}
