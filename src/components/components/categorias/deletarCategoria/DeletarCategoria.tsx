import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Categorias from '../../../../models/Categoria'
import { buscar, deletar } from '../../../../service/Service'

function DeletarCategoria() {
    const [categorias, setCategorias] = useState<Categorias>({} as Categorias)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategorias)
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('A categoria não existe')
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categorias")
    }

    async function deletarCategoria() {
        try {
            await deletar(`/categorias/${id}`)

            alert('Categoria apagado com sucesso')

        } catch (error) {
            alert('Erro ao apagar o Categoria')
        }

        retornar()
    }
  
  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>

      <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a categoria a seguir?</p>

      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Categoria</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{categorias.nome}</p>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{categorias.descricao}</p>
      <div className="flex">
        <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' >Não</button>
        <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={deletarCategoria}>
          Sim
        </button>
      </div>
    </div>
    </div>
  )
}

export default DeletarCategoria