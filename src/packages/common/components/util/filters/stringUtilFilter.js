import commonModule from '../../../commonModule';

/**
 * @ngdoc filter
 * @name StringFilter
 * @author Alien Fernandez Fuentes <alienfernandez85@gmail.com>
 * @version 1.0.0
 *
 * @description Filter to trusted url sources
 *
 */
commonModule.filter('stripSpecialChars', ["StringUtil", function (StringUtil) {
    return function (str) {
        return StringUtil.stripSpecialChars(str);
    };
}]);

export default commonModule;