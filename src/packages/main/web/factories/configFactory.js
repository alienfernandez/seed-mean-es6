import mainModule from '../../mainModule';
import '../services/configService';
import PouchDB from 'pouchdb';
import debug from 'debug';

class ConfigFactory {
    constructor($appConstants, corConService) {
        this._db = new PouchDB($appConstants.DB.CONFIG.NAME);
        this._$appConstants = $appConstants;
        this._corConService = corConService;
        this._log = debug(`cor:${this.constructor.name}`);
    }

    /**
     * Get of configuration of service remote
     */
    loadConfigHost() {
        return new Promise((resolve, reject) => {
            this.getConfigHost()
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    this._corConService.getConfigHost()
                        .then(res => {
                            res.dat._id = this._$appConstants.ID_HOST;
                            this._db.put(res.dat)
                                .then(response => {
                                    resolve();
                                })
                                .catch(error => {
                                    this._log(error);
                                    reject();
                                });
                        })
                        .catch(error => {
                            this._log(error.men);
                            reject(error);
                        });
                });
        });
    }

    getConfigHost() {
        return new Promise((resolve, reject) => {
            this._db.get(this._$appConstants.ID_HOST)
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    this._log('No existe la configuracion');
                    reject(error);
                });
        });
    }

    /*ngInject*/
    static instance($appConstants, corConService) {
        return new ConfigFactory($appConstants, corConService);
    }
}

mainModule.factory('configFactory', ConfigFactory.instance);

export default ConfigFactory;
