import { useState } from 'react';
import './CurrencyStyle.css';

export default function CurrencyList ({filterList, clickedCurrency, forwardedRef}) {

    const [selectedList, setSelectedList] = useState(null);

    const onListClicked = (e) => {
        const id = parseInt(e.target.id);
        setSelectedList(id);

        clickedCurrency(e);
    };

    return (
        <div style={{
            marginTop: '5px',
            overflowX: 'hidden',
            overflowY: 'auto',
            maxHeight: '12rem',
            background: 'rgb(15, 23, 42)'
        }}>
        <ul className="w-[95%]">
        {
            filterList.map((_cur, index) => {
            return (
                <li
                    id={index}
                    key={index}
                    onClick={onListClicked}
                    ref={forwardedRef}
                    data-currency-plural={_cur.namePlural}
                    data-currency-code={_cur.code}
                    className={`currencyInfo ${selectedList === index ? 'bg-slate-700' : ''} w-full flex justify-between cursor-pointer text-white p-0.5 rounded m-2 bg-slate-500 hover:bg-slate-400`}
                >
                {_cur.namePlural} - ({_cur.code})
                </li>
            )})
        }
        </ul>
    </div>
    )
}