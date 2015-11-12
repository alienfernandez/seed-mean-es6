import angular from 'angular';
import commonModule from '../../../commonModule';
import AlertMessageTemplate from '../views/alertMessage.tpl';

const OPTIONS_TEMPLATE = {
  interpolate: /{{([\s\S]+?)}}/g
};

const TYPE_ERROR = Object.freeze({
  ERROR: 0,
  WARNING: 1,
  INFO: 2,
  SUCCESS: 3
});

class AlertMessageFactory {

  constructor(lodash, $templateCache, $compile, $rootScope) {
    this._ = lodash;
    this._$templateCache = $templateCache;
    this._$compile = $compile;
    this._$rootScope = $rootScope;
    this._isShow = false;;

    /*Model*/
    this._messageDefinitions = {};
    this._messages = [];
    this._messageType = null;
    this._styleClass = '';
    this._idMessage = "idConAlert";
  }

  /*ngInject*/
  static instance(lodash, $templateCache, $compile, $rootScope) {
    return new AlertMessageFactory(lodash, $templateCache, $compile, $rootScope);
  }

  static get TYPE_ERROR() {
    return TYPE_ERROR;
  }

  get idMessage() {
    return this._idMessage;
  }

  get styleClass() {
    return this._styleClass;
  }

  get messages() {
    return this._messages;
  }

  /**
  * Add message definition
  */
  registryDefinitionMessage(jsonMessage) {
    this._messageDefinitions = this._.merge(this._messageDefinitions,jsonMessage);
  }

  add(key, objectParams) {
    if(this._isShow) {
      this.close();
    }

    if(key.split(' ').length > 1) {
        this._messages.push(key);
    } else {
      let message = this.renderMessage(key, objectParams);
      if(!this._.isEmpty(this._.trim(message))) {
        this._messages.push(message);
      }
    }
  }

  setMessages(dataMessage) {
    dataMessage = dataMessage || {};
    if(!this._.isUndefined(dataMessage) && !this._.isNull(dataMessage) && !this._.isEmpty(dataMessage))
    {
      this.cleanMessages();
      if(!this._.isArray(dataMessage)) {
        this._.forEach(dataMessage, (value, key) => {
          this.add(key, value);
        });
      }

      if(this._.isArray(dataMessage) && dataMessage.length > 0) {
        this._.forEach(dataMessage, (value, key) => {
          if(this._.isObject(value) && !this._.isEmpty(value)) {
            let keys = this._.keys(value);
            this.add(keys[0], value[keys[0]]);
          } else {
            this.add(value);
          }
        });
      }
    }
  }

  show(dataMessage, messageType) {
    this.setMessages(dataMessage);
    this._messageType = messageType;
    this._updateStyleClass();
    this._showMessageScreen();
  }

  showError(dataMessage) {
    this.show(dataMessage, TYPE_ERROR.ERROR);
  }

  showWarning(dataMessage) {
    this.show(dataMessage, TYPE_ERROR.WARNING);
  }

  showInfo(dataMessage) {
    this.show(dataMessage, TYPE_ERROR.INFO);
  }

  /**
  * Close of alert message
  */
  close() {
    this.cleanMessages();
    this._hideMessageScreen();
  }

  /**
  * Clean list of message
  */
  cleanMessages() {
    this._messages = [];
  }

  /**
  * Show alert message
  */
  _showMessageScreen() {
    let body = angular.element(document).find('body');
    let template = this._$templateCache.get(AlertMessageTemplate.name);
    let scope = this._$rootScope.$new();
    let divNew = this._$compile(template)(scope);
    body.append(divNew);
    this._isShow = true;
    scope.$digest();
  }

  /**
  * Hidden the alert message
  */
  _hideMessageScreen() {
    let messageScreen = angular.element(`#${this._idMessage}`);
    messageScreen.remove();
    this._isShow = false;
  }

  /**
  * Verifica si existe el mensage
  */
  _existMessage(key) {
    if(this._.isUndefined(this._messageDefinitions[key])) {
      return false;
    }
    return true;
  }

  /**
  * Get message compile
  */
  renderMessage(key, objectParams) {
    if(!this._existMessage(key)) {
      return '';
    }

    let compile = this._.template(this._messageDefinitions[key], OPTIONS_TEMPLATE);
    if(this._.isUndefined(objectParams) || this._.isNull(objectParams) || this._.isEmpty(objectParams)) {
      return compile();
    } else {
      return compile(objectParams);
    }
  }

  /**
  * Update the style for type alert
  */
  _updateStyleClass() {
     switch(this._messageType) {
       case TYPE_ERROR.ERROR: this._styleClass = "error"; break;
       case TYPE_ERROR.INFO: this._styleClass = "info"; break;
       case TYPE_ERROR.WARNING: this._styleClass = "warning"; break;
     }
  }
}

commonModule.requires.push(AlertMessageTemplate.name);
commonModule.factory('comAlertMessageFactory', AlertMessageFactory.instance);

export default commonModule;
