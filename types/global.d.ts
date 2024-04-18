// Types for compiled templates
declare module 'ember-nrg-file-handler/templates/*' {
  import { TemplateFactory } from 'ember-cli-htmlbars';

  const tmpl: TemplateFactory;
  export default tmpl;
}
