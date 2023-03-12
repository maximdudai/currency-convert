import './CurrencyStyle.css';

export default function CurrencyList ({filterList, clickedCurrency}) {

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
                        return <li
                            id={index}
                            key={index}
                            onClick={clickedCurrency}
                            className="currencyInfo cursor-pointer w-full flex text-white justify-between bg-sl p-0.5 rounded m-2 bg-slate-500 hover:bg-slate-400"
                        >
                            <span className="currencyName text-left">{_cur.namePlural}</span>
                            <span className="currencyName">{_cur.code}</span>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}