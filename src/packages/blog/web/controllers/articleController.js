import blogModule from '../../blogModule';

class ArticleController {

    /*ngInject*/
    constructor($state, ArticleResource) {
        this.$state = $state;
        this.articleResource = ArticleResource;
    }

    create(isValid) {
        this.error = null;
        //if (!isValid) {
        //    return false;
        //}
        var article = new this.articleResource(this.article);
        // Redirect after save
        article.$save((response) => {
            console.log(response);
            //this.$state.transitionTo('articlelist');
        }, function (errorResponse) {
            console.log("errorResponse", errorResponse);
            //this.error = errorResponse.data.message;
        });
    }

}

blogModule.controller('ArticleController', ArticleController);

export default blogModule;
