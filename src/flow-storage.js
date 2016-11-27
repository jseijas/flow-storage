import MemoryCollection from './memory-collection';

/**
 * Class for a set of collections. Each collection can be added
 * separately and can be a different data source than the other
 * ones.
 * 
 * By default, memory collections are created, but a collectionClass
 * can be passed in the settings, being the class that must be instantiated
 * for creating each collection. Also, a default collection settings can
 * be passed, as well as a list of collection names.
 */
class FlowStorage {

  /**
   * Constructor of the class.
   * 
   * @constructor
   * @param { Object } settings Settings for constructing the instance.
   */
  constructor(settings) {
    this.settings = settings || {};
    this.collections = {};
    this.createCollections();
  }

  /**
   * Add a collection to the storage.
   * 
   * @param { Object } collection Collection to be added to the storage.
   */
  addCollection(collection) {
    this.collections[collection.name] = collection;
  }

  /**
   * Get a collection given its name.
   * 
   * @param { String } name Name of the collection.
   * @returns { Object } Collection given its name, undefined if not found.
   */
  getCollection(name) {
    return this.collections[name];
  }

  /**
   * Create the collections defined at the settings when constructing 
   * the instance.
   */
  createCollections() {
    let collectionClass = this.settings.collectionClass || MemoryCollection;
    let collectionNames = this.settings.collectionNames || ['user', 'channel'];
    let collectionSettings = this.settings.collectionSettings || {};
    collectionNames.forEach((name) => {
      collectionSettings.name = name;
      let collection = new collectionClass(collectionSettings);
      this.addCollection(collection);
    });
  }
}

export default FlowStorage;