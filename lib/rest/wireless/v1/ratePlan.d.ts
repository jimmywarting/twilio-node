/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import serialize = require('../../../base/serialize');
import { SerializableClass } from '../../../interfaces';

/**
 * Initialize the RatePlanList
 *
 * @param version - Version of the resource
 */
declare function RatePlanList(version: V1): RatePlanListInstance;

/**
 * Options to pass to update
 *
 * @property friendlyName - A user-provided string that identifies this resource.
 * @property uniqueName - A user-provided string that uniquely identifies this resource as an alternative to the Sid.
 */
interface RatePlanInstanceUpdateOptions {
  friendlyName?: string;
  uniqueName?: string;
}

interface RatePlanListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): RatePlanContext;
  /**
   * create a RatePlanInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: RatePlanListInstanceCreateOptions, callback?: (error: Error | null, item: RatePlanInstance) => any): Promise<RatePlanInstance>;
  /**
   * Streams RatePlanInstance records from the API.
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
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: RatePlanListInstanceEachOptions, callback?: (item: RatePlanInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a rate_plan
   *
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  get(sid: string): RatePlanContext;
  /**
   * Retrieve a single target page of RatePlanInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: RatePlanPage) => any): Promise<RatePlanPage>;
  /**
   * Lists RatePlanInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: RatePlanListInstanceOptions, callback?: (error: Error | null, items: RatePlanInstance[]) => any): Promise<RatePlanInstance[]>;
  /**
   * Retrieve a single page of RatePlanInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: RatePlanListInstancePageOptions, callback?: (error: Error | null, items: RatePlanPage) => any): Promise<RatePlanPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property dataEnabled - Defines whether SIMs are capable of using GPRS/3G/LTE data connectivity.
 * @property dataLimit - Network-enforced limit specifying the total Megabytes of data usage allowed during one month on the 'home' (T-Mobile USA) network.
 * @property dataMetering - The model by which to meter data usage, in accordance with the available data metering models.
 * @property friendlyName - A user-provided string that identifies this resource.
 * @property internationalRoaming - Defines whether SIMs are capable of using GPRS/3G/4G/LTE data connectivity and messaging outside of the United States.
 * @property internationalRoamingDataLimit - Network-enforced limit specifying the total Megabytes of international roaming (non-US) data usage (download and upload combined) allowed during one month.
 * @property messagingEnabled - Defines whether SIMs are capable of making and sending and receiving SMS messages via either Commands or Programmable SMS APIs.
 * @property nationalRoamingDataLimit - Network-enforced limit specifying the total Megabytes of data usage allowed during one month on networks in the United States other than the 'home' (T-Mobile USA) network.
 * @property nationalRoamingEnabled - Defines whether SIMs can roam onto networks other than the 'home' (T-Mobile USA) network in the United States.
 * @property uniqueName - A user-provided string that uniquely identifies this resource as an alternative to the Sid.
 * @property voiceEnabled - Defines whether SIMs are capable of making and receiving voice calls.
 */
interface RatePlanListInstanceCreateOptions {
  dataEnabled?: boolean;
  dataLimit?: number;
  dataMetering?: string;
  friendlyName?: string;
  internationalRoaming?: string[];
  internationalRoamingDataLimit?: number;
  messagingEnabled?: boolean;
  nationalRoamingDataLimit?: number;
  nationalRoamingEnabled?: boolean;
  uniqueName?: string;
  voiceEnabled?: boolean;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface RatePlanListInstanceEachOptions {
  callback?: (item: RatePlanInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface RatePlanListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface RatePlanListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface RatePlanPayload extends RatePlanResource, Page.TwilioResponsePayload {
}

interface RatePlanResource {
  account_sid: string;
  data_enabled: boolean;
  data_limit: number;
  data_metering: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  international_roaming: string;
  international_roaming_data_limit: number;
  messaging_enabled: boolean;
  national_roaming_data_limit: number;
  national_roaming_enabled: boolean;
  sid: string;
  unique_name: string;
  url: string;
  voice_enabled: boolean;
}

interface RatePlanSolution {
}


declare class RatePlanContext {
  /**
   * Initialize the RatePlanContext
   *
   * @param version - Version of the resource
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: RatePlanInstance) => any): Promise<RatePlanInstance>;
  /**
   * remove a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: RatePlanInstance) => any): void;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a RatePlanInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: RatePlanInstanceUpdateOptions, callback?: (error: Error | null, items: RatePlanInstance) => any): Promise<RatePlanInstance>;
}


declare class RatePlanInstance extends SerializableClass {
  /**
   * Initialize the RatePlanContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: V1, payload: RatePlanPayload, sid: string);

  private _proxy: RatePlanContext;
  accountSid: string;
  dataEnabled: boolean;
  dataLimit: number;
  dataMetering: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: RatePlanInstance) => any): void;
  friendlyName: string;
  internationalRoaming: string;
  internationalRoamingDataLimit: number;
  messagingEnabled: boolean;
  nationalRoamingDataLimit: number;
  nationalRoamingEnabled: boolean;
  /**
   * remove a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: RatePlanInstance) => any): void;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  uniqueName: string;
  /**
   * update a RatePlanInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: RatePlanInstanceUpdateOptions, callback?: (error: Error | null, items: RatePlanInstance) => any): void;
  url: string;
  voiceEnabled: boolean;
}


declare class RatePlanPage extends Page<V1, RatePlanPayload, RatePlanResource, RatePlanInstance> {
  /**
   * Initialize the RatePlanPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: RatePlanSolution);

  /**
   * Build an instance of RatePlanInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: RatePlanPayload): RatePlanInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { RatePlanContext, RatePlanInstance, RatePlanList, RatePlanListInstance, RatePlanListInstanceCreateOptions, RatePlanListInstanceEachOptions, RatePlanListInstanceOptions, RatePlanListInstancePageOptions, RatePlanPage, RatePlanPayload, RatePlanResource, RatePlanSolution }
