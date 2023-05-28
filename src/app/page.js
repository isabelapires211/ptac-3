import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';


export default async function Home() {
  const req = await fetch("http://localhost:3003/alunos",
  {cache: "no-cache"} 
  
  );
  const alunos = await req.json();
  return (
    <main className={styles.main}>
       <Image 
      src="/azul.png"
      width={1280}
      height={600}
      alt="Picture of the author"
    />
     <ul className={styles.ul}> 
        <li className={styles.li}> <a href="/">Home</a></li>
        <li className={styles.li}> <a href="/cadastro">Cadastro</a></li>
        <li className={styles.li}> <a href="/">Sobre</a></li>
      </ul>

      <h2 className={styles.titulo} >Lista de aluno cadastrados</h2>
     
     
      <div className={styles.tudo} >
       
            {alunos.map(aluno=>
             <div className={styles.aluno}>
                <div key= {aluno.id}>
                <h2  className={styles.h2}>{aluno.nome}</h2>
                <h3  className={styles.h3}>{aluno.num_inscricao}</h3>
                <h3  className={styles.h3}>{aluno.curso}</h3> 

              </div>
              </div>)}
              </div>
        
    </main>
  )
}
