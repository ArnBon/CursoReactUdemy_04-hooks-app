export interface User {
    id: number;
    name: string;
    location: string;
    role: string;
}

export const getUserAction = async (id: number) => {
    console.log('Función llamada');
    await new Promise((res) => setTimeout(res, 2000));

    console.log('Función resolvió');

    return {
        id: id,
        name: 'Arnaldo J. Bonillo B.',
        location: 'Caracas, Venezuela',
        role: 'Ingeniero en Informática',
    };
};
