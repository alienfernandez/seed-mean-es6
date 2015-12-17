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
}]).filter('capitalize', function () {
    return function (input, all) {
        var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
        return (!!input) ? input.replace(reg, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }) : '';
    }
});

export default commonModule;