import chai from 'chai'
import sinon from 'sinon'
import alert from '../src/scripts/alert'

chai.should()

describe('scripts/alert.js', () => {
  it('should be a function', () => {
    alert.should.be.a('function')
  })
  it('should reset the console at the beginning', () => {
    //sinon.stub(process.stdout, 'write').callsFake(string => process.stdout.write(string))
    alert().should.have.been.calledWidth('\x1bc')
    //process.stdout.write.restore()
  })
  it('should print two line breaks at the end')
})
