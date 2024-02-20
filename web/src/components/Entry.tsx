import { FC, useState } from "react";
import { FaYarn } from "react-icons/fa";
import { fetchNui } from "../utils/fetchNui";

const Entry: FC<{ name: string, event: string, entity: number }> = ({ name, event, entity }) => 
{

    const handleClickEvent = () =>
    {
        fetchNui('triggerEvent', JSON.stringify({event: event, entity: entity}));
    }

    return (
        <div className="peek-option" onClick={() => handleClickEvent()}>
            <FaYarn /><span>{name}</span>
        </div>
    )
}

export default Entry;