/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { MessageList } from './conversation/message';
import { MessageListInstance } from './conversation/message';
import { ParticipantList } from './conversation/participant';
import { ParticipantListInstance } from './conversation/participant';
import { SerializableClass } from '../../../interfaces';
import { WebhookList } from './conversation/webhook';
import { WebhookListInstance } from './conversation/webhook';

type ConversationState = 'inactive'|'active'|'closed';

type ConversationWebhookEnabledType = 'true'|'false';

/**
 * Initialize the ConversationList
 *
 * @param version - Version of the resource
 */
declare function ConversationList(version: V1): ConversationListInstance;

/**
 * Options to pass to remove
 *
 * @property xTwilioWebhookEnabled - The X-Twilio-Webhook-Enabled HTTP request header
 */
interface ConversationInstanceRemoveOptions {
  xTwilioWebhookEnabled?: ConversationWebhookEnabledType;
}

/**
 * Options to pass to update
 *
 * @property attributes - An optional string metadata field you can use to store any data you wish.
 * @property dateCreated - The date that this resource was created.
 * @property dateUpdated - The date that this resource was last updated.
 * @property friendlyName - The human-readable name of this conversation.
 * @property messagingServiceSid - The unique ID of the Messaging Service this conversation belongs to.
 * @property state - Current state of this conversation.
 * @property timers.closed - ISO8601 duration when conversation will be switched to `closed` state.
 * @property timers.inactive - ISO8601 duration when conversation will be switched to `inactive` state.
 * @property xTwilioWebhookEnabled - The X-Twilio-Webhook-Enabled HTTP request header
 */
interface ConversationInstanceUpdateOptions {
  attributes?: string;
  dateCreated?: Date;
  dateUpdated?: Date;
  friendlyName?: string;
  messagingServiceSid?: string;
  state?: ConversationState;
  timers?: {
    inactive?: string;
    closed?: string;
  };
  xTwilioWebhookEnabled?: ConversationWebhookEnabledType;
}

interface ConversationListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ConversationContext;
  /**
   * create a ConversationInstance
   *
   * @param callback - Callback to handle processed record
   */
  create(callback?: (error: Error | null, item: ConversationInstance) => any): Promise<ConversationInstance>;
  /**
   * create a ConversationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: ConversationListInstanceCreateOptions, callback?: (error: Error | null, item: ConversationInstance) => any): Promise<ConversationInstance>;
  /**
   * Streams ConversationInstance records from the API.
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
   * @param callback - Function to process each record
   */
  each(callback?: (item: ConversationInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams ConversationInstance records from the API.
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
  each(opts?: ConversationListInstanceEachOptions, callback?: (item: ConversationInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a conversation
   *
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  get(sid: string): ConversationContext;
  /**
   * Retrieve a single target page of ConversationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: ConversationPage) => any): Promise<ConversationPage>;
  /**
   * Retrieve a single target page of ConversationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ConversationPage) => any): Promise<ConversationPage>;
  /**
   * Lists ConversationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: ConversationInstance[]) => any): Promise<ConversationInstance[]>;
  /**
   * Lists ConversationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ConversationListInstanceOptions, callback?: (error: Error | null, items: ConversationInstance[]) => any): Promise<ConversationInstance[]>;
  /**
   * Retrieve a single page of ConversationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: ConversationPage) => any): Promise<ConversationPage>;
  /**
   * Retrieve a single page of ConversationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ConversationListInstancePageOptions, callback?: (error: Error | null, items: ConversationPage) => any): Promise<ConversationPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property attributes - An optional string metadata field you can use to store any data you wish.
 * @property dateCreated - The date that this resource was created.
 * @property dateUpdated - The date that this resource was last updated.
 * @property friendlyName - The human-readable name of this conversation.
 * @property messagingServiceSid - The unique ID of the Messaging Service this conversation belongs to.
 * @property state - Current state of this conversation.
 * @property timers.closed - ISO8601 duration when conversation will be switched to `closed` state.
 * @property timers.inactive - ISO8601 duration when conversation will be switched to `inactive` state.
 * @property uniqueName - An application-defined string that uniquely identifies the resource
 * @property xTwilioWebhookEnabled - The X-Twilio-Webhook-Enabled HTTP request header
 */
interface ConversationListInstanceCreateOptions {
  attributes?: string;
  dateCreated?: Date;
  dateUpdated?: Date;
  friendlyName?: string;
  messagingServiceSid?: string;
  state?: ConversationState;
  timers?: {
    inactive?: string;
    closed?: string;
  };
  uniqueName?: string;
  xTwilioWebhookEnabled?: ConversationWebhookEnabledType;
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
interface ConversationListInstanceEachOptions {
  callback?: (item: ConversationInstance, done: (err?: Error) => void) => void;
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
interface ConversationListInstanceOptions {
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
interface ConversationListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface ConversationPayload extends ConversationResource, Page.TwilioResponsePayload {
}

interface ConversationResource {
  account_sid: string;
  attributes: string;
  chat_service_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  links: string;
  messaging_service_sid: string;
  sid: string;
  state: ConversationState;
  timers: object;
  unique_name: string;
  url: string;
}

interface ConversationSolution {
}


declare class ConversationContext {
  /**
   * Initialize the ConversationContext
   *
   * @param version - Version of the resource
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a ConversationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ConversationInstance) => any): Promise<ConversationInstance>;
  messages: MessageListInstance;
  participants: ParticipantListInstance;
  /**
   * remove a ConversationInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ConversationInstance) => any): Promise<boolean>;
  /**
   * remove a ConversationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  remove(opts?: ConversationInstanceRemoveOptions, callback?: (error: Error | null, items: ConversationInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a ConversationInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: ConversationInstance) => any): Promise<ConversationInstance>;
  /**
   * update a ConversationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ConversationInstanceUpdateOptions, callback?: (error: Error | null, items: ConversationInstance) => any): Promise<ConversationInstance>;
  webhooks: WebhookListInstance;
}


declare class ConversationInstance extends SerializableClass {
  /**
   * Initialize the ConversationContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: V1, payload: ConversationPayload, sid: string);

  private _proxy: ConversationContext;
  accountSid: string;
  attributes: string;
  chatServiceSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a ConversationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ConversationInstance) => any): Promise<ConversationInstance>;
  friendlyName: string;
  links: string;
  /**
   * Access the messages
   */
  messages(): MessageListInstance;
  messagingServiceSid: string;
  /**
   * Access the participants
   */
  participants(): ParticipantListInstance;
  /**
   * remove a ConversationInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ConversationInstance) => any): Promise<boolean>;
  /**
   * remove a ConversationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  remove(opts?: ConversationInstanceRemoveOptions, callback?: (error: Error | null, items: ConversationInstance) => any): Promise<boolean>;
  sid: string;
  state: ConversationState;
  timers: any;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  uniqueName: string;
  /**
   * update a ConversationInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: ConversationInstance) => any): Promise<ConversationInstance>;
  /**
   * update a ConversationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ConversationInstanceUpdateOptions, callback?: (error: Error | null, items: ConversationInstance) => any): Promise<ConversationInstance>;
  url: string;
  /**
   * Access the webhooks
   */
  webhooks(): WebhookListInstance;
}


declare class ConversationPage extends Page<V1, ConversationPayload, ConversationResource, ConversationInstance> {
  /**
   * Initialize the ConversationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: ConversationSolution);

  /**
   * Build an instance of ConversationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ConversationPayload): ConversationInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { ConversationContext, ConversationInstance, ConversationInstanceRemoveOptions, ConversationInstanceUpdateOptions, ConversationList, ConversationListInstance, ConversationListInstanceCreateOptions, ConversationListInstanceEachOptions, ConversationListInstanceOptions, ConversationListInstancePageOptions, ConversationPage, ConversationPayload, ConversationResource, ConversationSolution, ConversationState, ConversationWebhookEnabledType }
