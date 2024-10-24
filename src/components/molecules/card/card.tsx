import ContentDiv from "@/components/atoms/contentdiv/contentdiv";
import Head from "@/components/atoms/head/head";
import React from "react";
import styles from "./card.module.scss";
import Text from "@/components/atoms/text/text";
import Button from "@/components/atoms/button/button";
import { GoPencil } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";

interface ICardsProps {
    id: string;
    tittle: string;
    description: string;
    contact: string;
}
const Card: React.FC<ICardsProps> = ({ id, tittle, description, contact }) => {
const currentPath = usePathname();

    return (
        <>
            <ContentDiv key={id}>
                <div className={styles.container}>
                    <Head className={styles.title}>{tittle}</Head>
                    <Text className={styles.text}>{description}</Text>
                    <Text className={styles.text}>{contact}</Text>
                </div>
                <div className={styles.actions}>
                <Button className={`${currentPath === "/company"?styles.buttonEdit:styles.buttonEditVacancies}`}><GoPencil/></Button>
                    <Button className={styles.buttonDelete}><FaRegTrashAlt/></Button>

                </div>

            </ContentDiv>
        </>
    )
}

export default Card;