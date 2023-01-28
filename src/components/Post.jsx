import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" />
                    <div className={styles.authorInfo}>
                        <strong>Bruna Yumi</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title= "01 de Janeiro 2023 às 17h" dateTime='2023-01-27 17:00:00'>Publicado há 1h </time>
            </header>

            <div className={styles.content}>
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p><a href=''>jane.design/doctorcare</a></p>

            <p>
                <a href=''>#novoprojeto</a> {' '}
                <a href=''>#nlw</a> {' '}
                <a href=''>#rocketseat</a>
            </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentário'></textarea>

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}