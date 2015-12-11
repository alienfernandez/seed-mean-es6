import blogModule from '../../blogModule';

class BlogController {

    /*ngInject*/
    constructor($state, $stateParams, ArticleResource) {
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.articleResource = ArticleResource;
    }

    find() {
        this.articles = this.articleResource.query();
    }

    // Find existing Article
    findOne() {
        this.article = this.articleResource.get({
            articleId: this.$stateParams.articleId
        });
    }

}

blogModule.controller('BlogController', BlogController);

export default blogModule;
