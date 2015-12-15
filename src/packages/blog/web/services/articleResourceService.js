import blogModule from '../../blogModule';

class ArticleResourceService {

    constructor($resource) {
        this.$resource = $resource;
        return this.$resource('api/articles/:articleId', {
            articleId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }

    /*ngInject*/
    static instance($resource) {
        return new ArticleResourceService($resource);
    }
}

blogModule.service('ArticleResource', ArticleResourceService.instance);

export default blogModule;
