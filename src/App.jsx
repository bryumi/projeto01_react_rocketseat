import { useState } from 'react'
import { Header } from './components/Header'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60' ,
      name: 'Bruna Yumi',
      role: 'estudante',
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋" },
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-01-29 21:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl:'https://images.unsplash.com/photo-1517101724602-c257fe568157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=412&q=60' ,
      name: 'Rafael',
      role: 'Analista',
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋" },
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-01-30 10:00:00'),
  },
]
export function App() {

  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>

        <Sidebar/>
      
        <main>
          {posts.map (post => {
            return (
            <Post 
              key={post.id}
              author= {post.author}
              content = {post.content}
              publishedAt = {post.publishedAt}
            />
            )
          })}
        </main>
      </div>
      
    </div>
  )
}



export default App
