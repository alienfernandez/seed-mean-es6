import angular from 'angular';
import commonModule from '../commonModule';

class LoadingService {

  /*@ngInject*/
  constructor($compile, $rootScope) {
    this._$compile = $compile;
    this._$rootScope = $rootScope;
  }

  show() {
    let divOld = angular.element('#loading'); //Se obtiene un div a partir de su id
    let template = `
    <div id="loadingScreen"
     style="position: absolute; top:0; left:0; width: 100vw; height: 100vh; background-color: white; z-index: 200;background-color:balck;">
      <md-progress-circular style="position: absolute; top:50vh; left:50vw;" class="md-hue-2" md-mode="indeterminate"></md-progress-circular>
    </div>`;
    let divNew = this._$compile(template)(this._$rootScope.$new());
    divOld.append(divNew);
  }

  hide() {
    angular.element('#loadingScreen').remove();
  }
}

commonModule.service('comLoadingService', LoadingService);

export default commonModule;
