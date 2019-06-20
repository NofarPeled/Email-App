'use strict'

import homepage from './pages/homepage.cmp.js'
import emailApp from './pages/email-app.cmp.js'
import noteApp from './pages/note-app.cmp.js'
import about from './pages/about.cmp.js'

export default [
    {path: '/', component: homepage},
    {path: '/emails', component: emailApp},
    {path: '/notes',component: noteApp},
    {path: '/about',component:about}
]