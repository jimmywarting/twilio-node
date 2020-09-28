/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { NotificationListInstance } from './configuration/notification';
import { SerializableClass } from '../../../../interfaces';

/**
 * Initialize the ConfigurationList
 *
 * @param version - Version of the resource
 * @param chatServiceSid - The unique string that identifies the resource
 */
declare function ConfigurationList(version: V1, chatServiceSid: string): ConfigurationListInstance;

/**
 * Options to pass to update
 *
 * @property defaultChatServiceRoleSid - The service role assigned to users when they are added to the service
 * @property defaultConversationCreatorRoleSid - The role assigned to a conversation creator when they join a new conversation
 * @property defaultConversationRoleSid - The role assigned to users when they are added to a conversation
 */
interface ConfigurationInstanceUpdateOptions {
  defaultChatServiceRoleSid?: string;
  defaultConversationCreatorRoleSid?: string;
  defaultConversationRoleSid?: string;
}

interface ConfigurationListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ConfigurationContext;
  /**
   * Constructs a configuration
   */
  get(): ConfigurationContext;
  notifications?: NotificationListInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface ConfigurationPayload extends ConfigurationResource, Page.TwilioResponsePayload {
}

interface ConfigurationResource {
  chat_service_sid: string;
  default_chat_service_role_sid: string;
  default_conversation_creator_role_sid: string;
  default_conversation_role_sid: string;
  links: string;
  url: string;
}

interface ConfigurationSolution {
  chatServiceSid?: string;
}


declare class ConfigurationContext {
  /**
   * Initialize the ConfigurationContext
   *
   * @param version - Version of the resource
   * @param chatServiceSid - The SID of the Service configuration resource to fetch
   */
  constructor(version: V1, chatServiceSid: string);

  /**
   * fetch a ConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a ConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
  /**
   * update a ConfigurationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ConfigurationInstanceUpdateOptions, callback?: (error: Error | null, items: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
}


declare class ConfigurationInstance extends SerializableClass {
  /**
   * Initialize the ConfigurationContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param chatServiceSid - The unique string that identifies the resource
   */
  constructor(version: V1, payload: ConfigurationPayload, chatServiceSid: string);

  private _proxy: ConfigurationContext;
  chatServiceSid: string;
  defaultChatServiceRoleSid: string;
  defaultConversationCreatorRoleSid: string;
  defaultConversationRoleSid: string;
  /**
   * fetch a ConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
  links: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a ConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
  /**
   * update a ConfigurationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ConfigurationInstanceUpdateOptions, callback?: (error: Error | null, items: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
  url: string;
}


declare class ConfigurationPage extends Page<V1, ConfigurationPayload, ConfigurationResource, ConfigurationInstance> {
  /**
   * Initialize the ConfigurationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: ConfigurationSolution);

  /**
   * Build an instance of ConfigurationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ConfigurationPayload): ConfigurationInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { ConfigurationContext, ConfigurationInstance, ConfigurationInstanceUpdateOptions, ConfigurationList, ConfigurationListInstance, ConfigurationPage, ConfigurationPayload, ConfigurationResource, ConfigurationSolution }
