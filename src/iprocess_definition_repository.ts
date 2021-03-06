import {ProcessDefinitionFromRepository} from './types/index';

/**
 * The repository used to read and write ProcessDefinitions.
 */
export interface IProcessDefinitionRepository {

  /**
   * Writes a ProcessDefinition to the database.
   *
   * @async
   * @param name              The name with which to persist the
   *                          ProcessDefinition.
   * @param xml               The ProcessDefinitions raw XML code.
   * @param overwriteExisting If true, any existing ProcessDefinition with
   *                          the same name will be overwritten.
   * @throws                  409, if a ProcessDefinition with the name already
   *                          exists and 'overwriteExisting' is set to 'false'.
   */
  persistProcessDefinitions(name: string, xml: string, overwriteExisting?: boolean): Promise<void>;

  /**
   * Gets a list of all stored ProcessDefinitions.
   *
   * @async
   * @param offset   Optional: The number of records to skip.
   * @param limit    Optional: The max. number of records to get.
   * @returns        The retrieved ProcessDefinitions.
   */
  getProcessDefinitions(offset?: number, limit?: number): Promise<Array<ProcessDefinitionFromRepository>>;

  /**
   * Retrieves a ProcessDefinition by its name.
   *
   * @async
   * @param  name The name of the ProcessDefinition to get.
   * @returns     The retrieved ProcessDefinition.
   * @throws      404, if the ProcessDefinition was not found.
   */
  getProcessDefinitionByName(name: string): Promise<ProcessDefinitionFromRepository>;

  /**
   * Retrieves all ProcessDefinitions that were saved with the given name.
   *
   * @async
   * @param  name The name of the ProcessDefinition to get.
   * @returns     The retrieved ProcessDefinitions.
   * @throws      404, if the ProcessDefinition was not found.
   */
  getHistoryByName(name: string): Promise<Array<ProcessDefinitionFromRepository>>;

  /**
   * Retrieves a ProcessDefinition by its hash.
   *
   * @async
   * @param  hash The hash of the ProcessDefinition to get.
   * @returns     The retrieved ProcessDefinition.
   * @throws      404, if the ProcessDefinition was not found.
   */
  getByHash(hash: string): Promise<ProcessDefinitionFromRepository>;

  /**
   * Deletes the ProcessDefinition with a specific ProcessModelId.
   *
   * @async
   * @param  processModelId The ID of the processModel, by which correlations should be removed.
   *
   */
  deleteProcessDefinitionById(processModelId: string): Promise<void>;
}
