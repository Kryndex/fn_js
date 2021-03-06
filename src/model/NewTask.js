/**
 * IronFunctions
 * The open source serverless platform.
 *
 * OpenAPI spec version: 0.1.29
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.FnJs) {
      root.FnJs = {};
    }
    root.FnJs.NewTask = factory(root.FnJs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NewTask model module.
   * @module model/NewTask
   * @version 0.1.29
   */

  /**
   * Constructs a new <code>NewTask</code>.
   * @alias module:model/NewTask
   * @class
   * @param image {String} Name of Docker image to use. This is optional and can be used to override the image defined at the group level.
   */
  var exports = function(image) {
    var _this = this;

    _this['image'] = image;

  };

  /**
   * Constructs a <code>NewTask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewTask} obj Optional instance to populate.
   * @return {module:model/NewTask} The populated <code>NewTask</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
      if (data.hasOwnProperty('payload')) {
        obj['payload'] = ApiClient.convertToType(data['payload'], 'String');
      }
    }
    return obj;
  }

  /**
   * Name of Docker image to use. This is optional and can be used to override the image defined at the group level.
   * @member {String} image
   */
  exports.prototype['image'] = undefined;
  /**
   * Payload for the task. This is what you pass into each task to make it do something.
   * @member {String} payload
   */
  exports.prototype['payload'] = undefined;



  return exports;
}));


