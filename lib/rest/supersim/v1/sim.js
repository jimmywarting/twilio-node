'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var BillingPeriodList = require('./sim/billingPeriod').BillingPeriodList;
var Page = require('../../../base/Page');  /* jshint ignore:line */
var SimIpAddressList = require('./sim/simIpAddress').SimIpAddressList;
var deserialize = require(
    '../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../base/values');  /* jshint ignore:line */

var SimList;
var SimPage;
var SimInstance;
var SimContext;

/* jshint ignore:start */
/**
 * Initialize the SimList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Supersim.V1.SimList
 *
 * @param {Twilio.Supersim.V1} version - Version of the resource
 */
/* jshint ignore:end */
SimList = function SimList(version) {
  /* jshint ignore:start */
  /**
   * @function sims
   * @memberof Twilio.Supersim.V1#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Supersim.V1.SimContext}
   */
  /* jshint ignore:end */
  function SimListInstance(sid) {
    return SimListInstance.get(sid);
  }

  SimListInstance._version = version;
  // Path Solution
  SimListInstance._solution = {};
  SimListInstance._uri = `/Sims`;
  /* jshint ignore:start */
  /**
   * create a SimInstance
   *
   * @function create
   * @memberof Twilio.Supersim.V1.SimList#
   *
   * @param {object} opts - Options for request
   * @param {string} opts.iccid -
   *          The {@link https://en.wikipedia.org/wiki/Subscriber_identity_module#ICCID|ICCID} of the Super SIM to be added to your Account
   * @param {string} opts.registrationCode -
   *          The 10-digit code required to claim the Super SIM for your Account
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed SimInstance
   */
  /* jshint ignore:end */
  SimListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts['iccid'])) {
      throw new Error('Required parameter "opts[\'iccid\']" missing.');
    }
    if (_.isUndefined(opts['registrationCode'])) {
      throw new Error('Required parameter "opts[\'registrationCode\']" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'Iccid': _.get(opts, 'iccid'),
      'RegistrationCode': _.get(opts, 'registrationCode')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new SimInstance(this._version, payload, this._solution.sid));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Streams SimInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function each
   * @memberof Twilio.Supersim.V1.SimList#
   *
   * @param {object} [opts] - Options for request
   * @param {sim.status} [opts.status] - The status of the Sim resources to read
   * @param {string} [opts.fleet] -
   *          The SID or unique name of the Fleet to which a list of Sims are assigned
   * @param {string} [opts.iccid] -
   *          The ICCID associated with a Super SIM to filter the list by
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   *         callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
  SimListInstance.each = function each(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    if (opts.callback) {
      callback = opts.callback;
    }
    if (_.isUndefined(callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var currentResource = 0;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done || (!_.isUndefined(opts.limit) && currentResource >= opts.limit)) {
            done = true;
            return false;
          }

          currentResource++;
          callback(instance, onComplete);
        });

        if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        } else {
          onComplete();
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
  };

  /* jshint ignore:start */
  /**
   * Lists SimInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function list
   * @memberof Twilio.Supersim.V1.SimList#
   *
   * @param {object} [opts] - Options for request
   * @param {sim.status} [opts.status] - The status of the Sim resources to read
   * @param {string} [opts.fleet] -
   *          The SID or unique name of the Fleet to which a list of Sims are assigned
   * @param {string} [opts.iccid] -
   *          The ICCID associated with a Super SIM to filter the list by
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  SimListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource, done) {
      allResources.push(resource);

      if (!_.isUndefined(opts.limit) && allResources.length === opts.limit) {
        done();
      }
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single page of SimInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function page
   * @memberof Twilio.Supersim.V1.SimList#
   *
   * @param {object} [opts] - Options for request
   * @param {sim.status} [opts.status] - The status of the Sim resources to read
   * @param {string} [opts.fleet] -
   *          The SID or unique name of the Fleet to which a list of Sims are assigned
   * @param {string} [opts.iccid] -
   *          The ICCID associated with a Super SIM to filter the list by
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  SimListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Status': _.get(opts, 'status'),
      'Fleet': _.get(opts, 'fleet'),
      'Iccid': _.get(opts, 'iccid'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new SimPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single target page of SimInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function getPage
   * @memberof Twilio.Supersim.V1.SimList#
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  SimListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new SimPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Constructs a sim
   *
   * @function get
   * @memberof Twilio.Supersim.V1.SimList#
   *
   * @param {string} sid - The SID that identifies the resource to fetch
   *
   * @returns {Twilio.Supersim.V1.SimContext}
   */
  /* jshint ignore:end */
  SimListInstance.get = function get(sid) {
    return new SimContext(this._version, sid);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Supersim.V1.SimList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  SimListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  SimListInstance[util.inspect.custom] = function inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return SimListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the SimPage
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Supersim.V1.SimPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {SimSolution} solution - Path solution
 *
 * @returns SimPage
 */
/* jshint ignore:end */
SimPage = function SimPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(SimPage.prototype, Page.prototype);
SimPage.prototype.constructor = SimPage;

/* jshint ignore:start */
/**
 * Build an instance of SimInstance
 *
 * @function getInstance
 * @memberof Twilio.Supersim.V1.SimPage#
 *
 * @param {SimPayload} payload - Payload response from the API
 *
 * @returns SimInstance
 */
/* jshint ignore:end */
SimPage.prototype.getInstance = function getInstance(payload) {
  return new SimInstance(this._version, payload);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Supersim.V1.SimPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
SimPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

SimPage.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the SimContext
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Supersim.V1.SimInstance
 *
 * @property {string} sid - The unique string that identifies the resource
 * @property {string} uniqueName -
 *          An application-defined string that uniquely identifies the resource
 * @property {string} accountSid -
 *          The SID of the Account that the Super SIM belongs to
 * @property {string} iccid - The ICCID associated with the SIM
 * @property {sim.status} status - The status of the Super SIM
 * @property {string} fleetSid - The unique ID of the Fleet configured for this SIM
 * @property {Date} dateCreated -
 *          The ISO 8601 date and time in GMT when the resource was created
 * @property {Date} dateUpdated -
 *          The ISO 8601 date and time in GMT when the resource was last updated
 * @property {string} url - The absolute URL of the Sim Resource
 * @property {string} links - The links
 *
 * @param {V1} version - Version of the resource
 * @param {SimPayload} payload - The instance payload
 * @param {sid_like} sid - The SID that identifies the resource to fetch
 */
/* jshint ignore:end */
SimInstance = function SimInstance(version, payload, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.uniqueName = payload.unique_name; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.iccid = payload.iccid; // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.fleetSid = payload.fleet_sid; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {sid: sid || this.sid, };
};

Object.defineProperty(SimInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new SimContext(this._version, this._solution.sid);
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * fetch a SimInstance
 *
 * @function fetch
 * @memberof Twilio.Supersim.V1.SimInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SimInstance
 */
/* jshint ignore:end */
SimInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a SimInstance
 *
 * @function update
 * @memberof Twilio.Supersim.V1.SimInstance#
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.uniqueName] -
 *          An application-defined string that uniquely identifies the resource
 * @param {sim.status_update} [opts.status] - The new status of the Super SIM
 * @param {string} [opts.fleet] -
 *          The SID or unique name of the Fleet to which the SIM resource should be assigned
 * @param {string} [opts.callbackUrl] -
 *          The URL we should call after the update has finished
 * @param {string} [opts.callbackMethod] -
 *          The HTTP method we should use to call callback_url
 * @param {string} [opts.accountSid] -
 *          The SID of the Account to which the Sim resource should belong
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SimInstance
 */
/* jshint ignore:end */
SimInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * Access the billingPeriods
 *
 * @function billingPeriods
 * @memberof Twilio.Supersim.V1.SimInstance#
 *
 * @returns {Twilio.Supersim.V1.SimContext.BillingPeriodList}
 */
/* jshint ignore:end */
SimInstance.prototype.billingPeriods = function billingPeriods() {
  return this._proxy.billingPeriods;
};

/* jshint ignore:start */
/**
 * Access the simIpAddresses
 *
 * @function simIpAddresses
 * @memberof Twilio.Supersim.V1.SimInstance#
 *
 * @returns {Twilio.Supersim.V1.SimContext.SimIpAddressList}
 */
/* jshint ignore:end */
SimInstance.prototype.simIpAddresses = function simIpAddresses() {
  return this._proxy.simIpAddresses;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Supersim.V1.SimInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
SimInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

SimInstance.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the SimContext
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Supersim.V1.SimContext
 *
 * @property {Twilio.Supersim.V1.SimContext.BillingPeriodList} billingPeriods -
 *          billingPeriods resource
 * @property {Twilio.Supersim.V1.SimContext.SimIpAddressList} simIpAddresses -
 *          simIpAddresses resource
 *
 * @param {V1} version - Version of the resource
 * @param {sid_like} sid - The SID that identifies the resource to fetch
 */
/* jshint ignore:end */
SimContext = function SimContext(version, sid) {
  this._version = version;

  // Path Solution
  this._solution = {sid: sid, };
  this._uri = `/Sims/${sid}`;

  // Dependents
  this._billingPeriods = undefined;
  this._simIpAddresses = undefined;
};

/* jshint ignore:start */
/**
 * fetch a SimInstance
 *
 * @function fetch
 * @memberof Twilio.Supersim.V1.SimContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SimInstance
 */
/* jshint ignore:end */
SimContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new SimInstance(this._version, payload, this._solution.sid));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * update a SimInstance
 *
 * @function update
 * @memberof Twilio.Supersim.V1.SimContext#
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.uniqueName] -
 *          An application-defined string that uniquely identifies the resource
 * @param {sim.status_update} [opts.status] - The new status of the Super SIM
 * @param {string} [opts.fleet] -
 *          The SID or unique name of the Fleet to which the SIM resource should be assigned
 * @param {string} [opts.callbackUrl] -
 *          The URL we should call after the update has finished
 * @param {string} [opts.callbackMethod] -
 *          The HTTP method we should use to call callback_url
 * @param {string} [opts.accountSid] -
 *          The SID of the Account to which the Sim resource should belong
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SimInstance
 */
/* jshint ignore:end */
SimContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'UniqueName': _.get(opts, 'uniqueName'),
    'Status': _.get(opts, 'status'),
    'Fleet': _.get(opts, 'fleet'),
    'CallbackUrl': _.get(opts, 'callbackUrl'),
    'CallbackMethod': _.get(opts, 'callbackMethod'),
    'AccountSid': _.get(opts, 'accountSid')
  });

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new SimInstance(this._version, payload, this._solution.sid));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

Object.defineProperty(SimContext.prototype,
  'billingPeriods', {
    get: function() {
      if (!this._billingPeriods) {
        this._billingPeriods = new BillingPeriodList(this._version, this._solution.sid);
      }
      return this._billingPeriods;
    }
});

Object.defineProperty(SimContext.prototype,
  'simIpAddresses', {
    get: function() {
      if (!this._simIpAddresses) {
        this._simIpAddresses = new SimIpAddressList(this._version, this._solution.sid);
      }
      return this._simIpAddresses;
    }
});

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Supersim.V1.SimContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
SimContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

SimContext.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  SimList: SimList,
  SimPage: SimPage,
  SimInstance: SimInstance,
  SimContext: SimContext
};
