"use client";
import React, { useState } from "react";
import Card from "@/components/molecules/card/card";
import Pagination from "@/components/molecules/paginaton/pagination";
import styles from "./cardscompany.module.scss";


interface ICompany {
    id: string;
    tittle: string;
    description: string;
    contact: string;
}

const CardsCompanyTemplate: React.FC = () => {
  

    const companies: ICompany[] = [
        { id: "1", tittle: "Tech Innovations", description: "Barcelona", contact: "Contacto: 612-345-678" },
        { id: "2", tittle: "Creative Solutions", description: "Madrid", contact: "Contacto: 612-987-654" },
        { id: "3", tittle: "Global Tech", description: "Valencia", contact: "Contacto: 612-123-456" },
        { id: "4", tittle: "NextGen Industries", description: "Sevilla", contact: "Contacto: 612-234-567" },
        { id: "5", tittle: "Future Enterprises", description: "Bilbao", contact: "Contacto: 612-345-678" },
        { id: "6", tittle: "Innovation Hub", description: "Malaga", contact: "Contacto: 612-456-789" },
        { id: "7", tittle: "Synergy Group", description: "Zaragoza", contact: "Contacto: 612-567-890" },
        { id: "8", tittle: "Tech Partners", description: "Alicante", contact: "Contacto: 612-678-901" },
        { id: "9", tittle: "Smart Solutions", description: "Granada", contact: "Contacto: 612-789-012" },
        { id: "10", tittle: "Digital Creators", description: "Córdoba", contact: "Contacto: 612-890-123" },
        { id: "11", tittle: "Ecom Solutions", description: "Toledo", contact: "Contacto: 612-901-234" },
        { id: "12", tittle: "Dynamic Group", description: "Murcia", contact: "Contacto: 612-012-345" }
    ];
    

    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastCompany = currentPage * itemsPerPage;
    const indexOfFirstCompany = indexOfLastCompany - itemsPerPage;
    const currentCompanies = companies.slice(indexOfFirstCompany, indexOfLastCompany);
    const totalPages = Math.ceil(companies.length / itemsPerPage);

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

export default CardsCompanyTemplate;
