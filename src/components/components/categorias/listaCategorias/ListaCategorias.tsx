import React, { useEffect, useState } from 'react';
import Categorias from '../../../../models/Categoria';
import { buscar } from '../../../../service/Service';
import CardCategorias from '../../categorias/cardCategorias/CardCategorias';
import { useNavigate } from 'react-router-dom';

function ListaCategorias() {
    const [categorias, setCategorias] = useState<Categorias[]>([]);
  
    let navigate = useNavigate();

    async function buscarCategorias() {
    await buscar(`/categorias`, setCategorias);
  }

    useEffect(() => {
      buscarCategorias();
    }, [categorias.length]);
    return (
      <>
        <div className="flex justify-center w-full my-4">
          <div className="container flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categorias.map((categorias) => (
                <>
                  <CardCategorias key={categorias.id} categorias={categorias} />
                </>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default ListaCategorias;