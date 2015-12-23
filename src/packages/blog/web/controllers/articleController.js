import blogModule from '../../blogModule';

class ArticleController {

    /*ngInject*/
    constructor($state, $stateParams, ArticleResource, toastr) {
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.articleResource = ArticleResource;
        this.toastr = toastr;
    }

    create() {
        var article = new this.articleResource(this.article);
        //console.log("article", article);
        // Redirect after save
        article.$save((response) => {
            this.$state.transitionTo('article-list');
            this.toastr.success("Article saved.");
        }, function (errorResponse) {
            console.log("errorResponse", errorResponse);
            this.toastr.error(errorResponse.message.message);
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
        this.article.$update(() => {
            this.$state.transitionTo('article-list');
            this.toastr.success("Article saved.");
        }, (errorResponse) => {
            console.log("errorResponse", errorResponse);
            this.toastr.error(errorResponse.message.message);
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
