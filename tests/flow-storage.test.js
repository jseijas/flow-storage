import { expect } from 'chai';
import FlowStorage from '../src/flow-storage';

describe('Flow Storage', () => {

  describe('Constructor', () => {
    it('Should construct an instance', () => {
      let instance = new FlowStorage();
      expect(instance).to.exist;
      expect(instance.getCollection('user')).to.exist;
      expect(instance.getCollection('channel')).to.exist;
    });
  });

});