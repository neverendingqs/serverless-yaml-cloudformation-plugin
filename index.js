'use strict';

class YamlCloudFormation {
  constructor(serverless) {
    this.provider = serverless.getProvider('aws');
    this.hooks = {
      'before:package:initialize': this.changeNaming.bind(this)
    };
  }

  changeNaming() {
    Object.assign(this.provider.naming, {
      // https://github.com/serverless/serverless/blob/master/lib/plugins/aws/lib/naming.js
      getServiceStateFileName: () => 'serverless-state.yaml',
      getCoreTemplateFileName: () => 'cloudformation-template-create-stack.yaml',
      getCompiledTemplateFileName: () => 'cloudformation-template-update-stack.yaml'
    });
  }
}

module.exports = YamlCloudFormation;
