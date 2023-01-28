import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=317&q=60"  />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Bruna Nagahashi</strong>
                            <time title= "01 de Janeiro 2023 às 17h" dateTime='2023-01-27 17:00:00'>Cerca de 2h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={20}/>

                        </button>
                    </header>

                    <p>Muito Bom! Parabéns!!</p>
                </div>
                <footer>
                    <ThumbsUp/>
                    Apladir <span>20</span>
                </footer>
            </div>
        </div>
    )
}