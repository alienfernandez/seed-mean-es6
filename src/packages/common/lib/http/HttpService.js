/**
 * Clase generica para la consulta de servicios
 */

const PROTOCOL = 'http';

class HttpService {

    constructor($http, lodash, responseTypeConstant) {
        this._$http = $http;
        this._ = lodash;
        this._responseTypeConstant = responseTypeConstant;
        this._config = {};
        this.onSuccessFunction = null;
        this.onErrorFunction = null;
    }

    _getUrl(partUrl = "") {
        return `${PROTOCOL}://${this._config.server}:${this._config.port}/${this._config.context}/${partUrl}`;
        //return `${PROTOCOL}:${this._config.server}:${this._config.port}/${partUrl}`;
    }

    setOnSuccessFunction(onSuccess) {
        this.onSuccessFunction = onSuccess;
    }

    setOnErrorFunction(onError) {
        this.onErrorFunction = onError;
    }

    /**
     * Metodo que permite realizar un request GET
     */
    get(partUrl = "", jsonAttributes = {}) {
        //Promesa que se ejecuta cuando se tiene respuesta del servicio
        return new Promise((resolve, reject) => {
            //Definiendo la ruta a consultar
            //let url = this._getUrl(partUrl);
            let url = partUrl;

            if (!this._.isNull(jsonAttributes) && !this._.isEmpty(jsonAttributes)) {
                //Obteniendo Parametros
                let params = Object.keys(jsonAttributes).map(k => {
                    return `${encodeURIComponent(k)}=${encodeURIComponent(jsonAttributes[k])}`;
                }).join('&');

                url += `?${params}`;
            }

            let config = {
                headers: {
                    'Accept': 'application/json; charset=utf-8'
                }
            };

            this._$http.get(url, config)
                .success(response => {
                    if (response.resTyp === this._responseTypeConstant.ERROR) {
                        this.onErrorFunction(response);
                        reject(response);
                    } else {
                        this.onSuccessFunction(response);
                        resolve(response);
                    }
                })
                .error((error, status) => {
                    this.onErrorFunction(error);

                    reject({
                        resTyp: this._responseTypeConstant.ERROR,
                        men: error,
                        dat: null
                    });
                });
        });
    }

    /**
     * Metodo que permite realizar un request JSONP
     */
    jsonp(url = "", jsonAttributes = {}) {

        //Promesa que se ejecuta cuando se tiene respuesta del servicio
        return new Promise((resolve, reject) => {
            //Definiendo la ruta a consultar
            //let url = this._getUrl(partUrl);

            jsonAttributes.callback = "JSON_CALLBACK";
            if (!this._.isNull(jsonAttributes) && !this._.isEmpty(jsonAttributes)) {
                //Obteniendo Parametros
                let params = Object.keys(jsonAttributes).map(k => {
                    return `${encodeURIComponent(k)}=${encodeURIComponent(jsonAttributes[k])}`;
                }).join('&');

                url += `?${params}`;
            }
            this._$http.jsonp(url)
                .success((response) => {
                    //this.onSuccessFunction = response;
                    resolve(response);
                })
                .error((error) => { //, status
                    reject(error);
                    //this.onErrorFunction(error);
                    //reject({
                    //    resTyp: this._responseTypeConstant.ERROR,
                    //    men: error,
                    //    dat: null
                    //});
                });
        });
    }


    /**
     * Metodo que permite realizar un request POST
     */
    post(partUrl = "", jsonBody = {}, isMultipart = false) {
        return new Promise((resolve, reject) => {
            //Definiendo la direccion a consultar
            //let url = this._getUrl(partUrl);
            let headers = {};
            if (isMultipart) {
                //multipart/form-data
                headers = {headers: {'Content-Type': undefined}}
            }
            let url = partUrl;
            this._$http.post(url, jsonBody, headers)
                .success(response => {
                    //if (response.resTyp === this._responseTypeConstant.ERROR) {
                    //    reject(response);
                    //} else {
                    resolve(response);
                    //}
                })
                .error(error => {
                    reject({
                        //resTyp: this._responseTypeConstant.ERROR,
                        men: error,
                        dat: null
                    });
                });
        });
    }
}

export default HttpService;
