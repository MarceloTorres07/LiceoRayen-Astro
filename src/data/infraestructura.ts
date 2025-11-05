// src/data/infraestructura.ts

import infraestructura from '../data/Infraestructura.json';

export interface InfraestructuraInterface {
  id: string;
  titulo: string;
  categoria: string;
  descripcion: string;
  imagen: string;
  link: string;
  capacidad: number;
  estado: string;
  equipamiento: string[];
}

export const getInfraestructura = async (): Promise<InfraestructuraInterface[]> => {
  return infraestructura;
};

export const getInfraestructuraById = async (id: string): Promise<InfraestructuraInterface | undefined> => {
  const data = await getInfraestructura();
  return data.find((item) => item.id === id);
};