module.exports = {
  appName: 'We blog',

  passport: {
    cookieDomain : null
  },

  acl: {
    disabled: false
  },

  auth: {
    allowUserSignup: false
  },

  //environment: 'production',

  email: {
    // fromName: 'Deployer!',
    // siteEmail: 'contato@wejs.org',
    // defaultService: 'Mandrill',
    // services: {
    //   Mandrill: {
        service: 'Mandrill',
        type: 'SMTP',
        host: 'smtp.mandrillapp.com',
        port: 587,
        debug: true,
        auth: {
          user: 'alberto.souza.99@gmail.com',
          pass: 'fNrEff0JhCv5mD9Xk3Ukmg'
      //   }
      // },
      // gmail: {
      //   service: 'gmail',
      //   type: 'SMTP',
      //   auth: {
      //     user: 'email',
      //     pass: 'password'
      //   }
      // }
    }
  },

  database: {
    dev: {
      // by default log to info
      //logging: false
    }
  }
};