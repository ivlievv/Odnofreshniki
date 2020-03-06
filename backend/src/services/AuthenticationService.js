const bcrypt = require('bcrypt');
const { User } = require('../models');
const { BadRequestError } = require('../utils/application_errors');
const jwt = require('jsonwebtoken');

class AuthenticationService {

  async loginByEmail (credentials) {
    const user = await User.findOne({
                                      where: {
                                        email: credentials.email,
                                      }
                                    });
    if (user) {
      if (this.comparePassword(credentials.password, user.password)) {

        const token = {
          accessToken: this.getAccessToken(),
          refreshToken: this.getRefreshToken()
        };

        return {
          tokenPair: tokens,
          user: preparedUser,
        };
      }
    }
    throw new BadRequestError('Email or password is very bad');

  }

  async comparePassword (passwordHash, password) {
    return bcrypt.compare(password, passwordHash);
  }

  async getAccessToken (user) {

    const payload = {};

    return jwt.sign({
                      ...payload,
                    }, 'ssshhh');
  }

  async getRefreshToken (payload) {

  }

}

export default new AuthenticationService();