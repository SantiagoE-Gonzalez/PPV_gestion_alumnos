import React, { createContext, useState, useContext } from 'react';

const GestionAlumnosContext = createContext();

export const MiProveedor = ({ children }) => {
    const [claseId, setClaseId] = useState("");
    const [hasRefreshAlumnos, setHasRefreshAlumnos] = useState(true);
    const [hasRefreshClases, setHasRefreshClases] = useState(true);
    return (
        <GestionAlumnosContext.Provider value={{ claseId, setClaseId, hasRefreshAlumnos, hasRefreshClases, setHasRefreshAlumnos, setHasRefreshClases }}>
            {children}
        </GestionAlumnosContext.Provider>
    );
};

export const useGestionDeAlumnosContext = () => useContext(GestionAlumnosContext);
