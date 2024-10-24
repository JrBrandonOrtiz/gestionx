"use client";
import React, { useState } from "react";
import Card from "@/components/molecules/card/card";
import Pagination from "@/components/molecules/paginaton/pagination";
import styles from "./cardsvacancies.module.scss";

interface IVacancies {
    id: string;
    tittle: string;
    description: string;
    contact: string;
}

const CardsVacanciesTemplate: React.FC = () => {

    const vacancie: IVacancies[] = [
        { id: "1", tittle: "Desarrollador Full Stack", description: "Tech Innovators, NY", contact: "555-123-4567" },
        { id: "2", tittle: "Diseñador Gráfico", description: "Creative Minds, LA", contact: "555-234-5678" },
        { id: "3", tittle: "Gerente de Proyectos", description: "Future Solutions, CHI", contact: "555-345-6789" },
        { id: "4", tittle: "Analista de Datos", description: "Digital Pioneers, HOU", contact: "555-456-7890" },
        { id: "5", tittle: "Desarrollador de Software", description: "NextGen, PHX", contact: "555-567-8901" },
        { id: "6", tittle: "Marketing Digital", description: "Global Ventures, PHI", contact: "555-678-9012" },
        { id: "7", tittle: "Ingeniero de Sistemas", description: "Innovative Systems, SA", contact: "555-789-0123" },
        { id: "8", tittle: "Consultor de IT", description: "Synergy Solutions, SD", contact: "555-890-1234" },
        { id: "9", tittle: "Desarrollador Móvil", description: "Smart Tech, DAL", contact: "555-901-2345" },
        { id: "10", tittle: "Creativo Publicitario", description: "Dynamic Creators, SJ", contact: "555-012-3456" },
        { id: "11", tittle: "Gerente de Ventas", description: "Ecom Enterprises, AUS", contact: "555-135-2468" },
        { id: "12", tittle: "Soporte Técnico", description: "Tech Solutions, FW", contact: "555-246-3579" }
    ];
      


    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastCompany = currentPage * itemsPerPage;
    const indexOfFirstCompany = indexOfLastCompany - itemsPerPage;
    const currentCompanies = vacancie.slice(indexOfFirstCompany, indexOfLastCompany);
    const totalPages = Math.ceil(vacancie.length / itemsPerPage);

    return (
        <div className={styles.container}>
            <div className={styles.cardsGrid}>
                {currentCompanies.map((company) => (
                    <Card
                        key={company.id}
                        id={company.id}
                        tittle={company.tittle}
                        description={company.description}
                        contact={company.contact}
                    />
                ))}
            </div>
      
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                paginate={setCurrentPage}
            />
        </div>
    );
};

export default CardsVacanciesTemplate;
