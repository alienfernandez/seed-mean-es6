import blogModule from '../../blogModule';

class ArticleController {

    /*ngInject*/
    constructor($state, $stateParams, ArticleResource) {
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.articleResource = ArticleResource;
    }

    create() {
        this.error = null;
        var article = new this.articleResource(this.article);
        console.log("article", article)
        // Redirect after save
        article.$save((response) => {
            console.log(response);
            this.$state.transitionTo('article-list');
        }, function (errorResponse) {
            console.log("errorResponse", errorResponse);
            //this.error = errorResponse.data.message;
        });
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

    edit(article) {
        this.$state.transitionTo('edit-article', article);
    }

    update() {
        this.error = null;

        this.article.$update(() => {
            this.$state.transitionTo('article-list');
        }, (errorResponse) => {
            //this.error = errorResponse.data.message;
            this.error = errorResponse.data;
            console.log("errorResponse", errorResponse);
        });
    }

    remove(article) {
        if (confirm('Are you sure you want to delete this article?')) {
            if (article) {
                article.$remove();

                this.articles.splice(this.articles.indexOf(article), 1);
            } else {
                this.article.$remove(() => {
                    this.$state.transitionTo('article-list');
                });
            }
        }
    }


}

blogModule.controller('ArticleController', ArticleController);

export default blogModule;
