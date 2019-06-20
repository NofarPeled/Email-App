'use strict'

import homepage from './pages/homepage.cmp.js'
import emailApp from './cmp/email-app.cmp.js'

export default [
    {path: '/', component: homepage},
    {path: '/emails', component: emailApp}
]