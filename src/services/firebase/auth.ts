import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const app = initializeApp({
  apiKey: 'AIzaSyBsykbgBF86M_tEjTDz4P3VlSJL2yHPYAU',
  authDomain: 'scrum-board-vue.firebaseapp.com',
  projectId: 'scrum-board-vue',
  storageBucket: 'scrum-board-vue.appspot.com',
  messagingSenderId: '164457409672',
  appId: '1:164457409672:web:5621b164f82e3bfd4d033d',
  measurementId: 'G-NYPXPVZ2KZ'
})

export const auth = getAuth(app)
