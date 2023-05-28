'use client'
import Link from 'next/link';
import styles from '../page.module.css'
import { useState } from 'react';
import Image from 'next/image';
import { headers } from 'next/dist/client/components/headers';

export default function Cadastro(){
    const[nome, setNome]= useState();
    const[num_inscricao, setNum_inscricao]= useState();
    const[curso, setCurso]= useState();

    const cadastro = () =>{
         const aluno = {
            nome,
            num_inscricao,
            curso
         }
         alert('foi cadastrado com sucesso')
    const alunoJson =  JSON.stringify(aluno);
    const req = fetch ("http://localhost:3003/alunos",{
        method:"POST",
        headers:{
           'Content-Type': 'application/json',
        },
        body: alunoJson
    })

    console.log(req)
}
    return(
        <main className={styles.main}>
          <Image 
      src="/cad.png"
      width={1280}
      height={600}
      alt="Picture of the author"
    />
           <h2 className={styles.titulo} >Cadastro</h2>
           <h2 className={styles.h2}>Quer ser nosso aluno? se cadastre aqui:</h2>
            
            <div className={styles.formulario}>
                <form method='submit' onSubmit={cadastro} className={styles.form}>
                  <div className={styles.campotexto}>
                        <input
                        className={styles.form}
                        name='nome' type='text'
                        placeholder='digite seu nome'
                        onChange={e=>setNome(e.target.value)}></input>


                      <input
                      className={styles.form}
                        name='num_inscricao' type='number'
                        placeholder='digite o numero de inscrição'
                        onChange={e=>setNum_inscricao(e.target.value)}></input>


                        <input
                      className={styles.form}
                        name='curso' type='text'
                        placeholder='digite o curso'
                        onChange={e=>setCurso(e.target.value)}></input> 



                     <button className={styles.botao}>cadastrar</button>
                     </div>
                </form>
            </div>
           <Link href="/">voltar</Link>
      
      
      
      </main>

    )
}