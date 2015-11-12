import commonModule from '../commonModule';
import Constant from '../lib/core/Constant';

const mimeTypeConstant = new Constant({
  JPG: 'image/jpeg',
  PNG: 'image/png',
  PDF: 'application/pdf'
});

commonModule.constant('comMimeTypeConstant', mimeTypeConstant);
export default commonModule;
