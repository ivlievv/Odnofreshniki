const { RefreshToken } = require( '../models' );
const Controller = require( '../utils/controller' );

class RefreshTokenController {

  constructor () {
    this._controller = new Controller( RefreshToken );
  }

  saveRefreshToken = async (req, res, next) => {
    try {

      await this._controller.create( {

                                     } );
    } catch (e) {
      next( e );
    }
  };

}

module.exports = new RefreshTokenController();