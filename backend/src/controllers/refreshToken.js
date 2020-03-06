const { Task } = require( '../models' );
const Controller = require( '../utils/controller' );

class RefreshTokenController {

  constructor () {
    this._controller = new Controller( Task );
  }


}

module.exports = new RefreshTokenController();