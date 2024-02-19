import { FC, useState } from "react";
import { useNuiEvent } from "../hooks/useNuiEvent";

import { FaEye, FaYarn } from "react-icons/fa";

import './peek.css';
import { fetchNui } from "../utils/fetchNui";
import Entry from "./Entry";

const Peek: FC = () =>
{
    const [ peekState, setPeekState ] = useState<boolean>(false);
    const [ entries, setEntries ] = useState<{ name: string, event: string }[]>([]);

    useNuiEvent<string>('openPeek', (data) =>
    {
        const _data = JSON.parse(data);
        setPeekState(_data.bool);

        if (!_data.bool)
        {
            setEntries([]);
        }

        const keyHandler = (e: KeyboardEvent) => {
            if (["Backspace", "Escape"].includes(e.code)) {
                setEntries([]);
                setPeekState(false);
                fetchNui('hidePeek');
            }
          };
      
          window.addEventListener("keydown", keyHandler);
    });

    useNuiEvent<string>('entryData', (data) =>
    {
        const _data = JSON.parse(data);
        console.log(_data.entry.event);

        const eye =  document.getElementById("#target-eye")
        
        if (eye?.style)
        {
            eye.style.color = "yellow"
        }

        setEntries(prev => [ ...prev, { name: _data.entry.name, event: _data.entry.event }])
    });

    return (
        <div style={{ visibility: peekState ? 'visible' : 'hidden', height: '100%' }} id="target-wrapper">
            <i id="target-eye"><FaEye /></i>
            <div id="target-label-wrapper">
                <div id="target-label">
                    {
                        entries.map((entry) =>
                        {
                            return <Entry { ... entry} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Peek;