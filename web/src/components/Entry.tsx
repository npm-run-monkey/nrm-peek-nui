import { FC, useState } from "react";
import { FaYarn } from "react-icons/fa";
import { fetchNui } from "../utils/fetchNui";

const Entry: FC<{ name: string, event: string }> = ({ name, event }) => 
{
    const [ index, setIndex ] = useState<number>(0);

    const handleClickEvent = () =>
    {
        fetchNui('triggerEvent', event);
    }

    return (
        <div className="peek-option" onClick={() => handleClickEvent()}>
            <FaYarn /><span>{name}</span>
        </div>
    )
}

export default Entry;