import { expect } from "chai";
import { omitKeys } from "../../src/utils";

describe('Utils', ()=>{
  it('Omit keys', function(){
    expect(omitKeys({
      'pasaporte': 'peru',
      'nombre': 'Piero'
    }, ['pasaporte']))
      .to.be.deep.equal({nombre: 'Piero'})
  })
})
