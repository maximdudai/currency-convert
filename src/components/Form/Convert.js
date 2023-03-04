import React, { useState } from "react";
import { currencies } from "currencies.json";

import './Convert.css';

import CurrencyList from "./CurrencyList.js/CurrencyList";

export default function Convert() {

    const [convertFrom, setConvertFrom] = useState('');
    const [convertTo, setConvertTo] = useState('');

    const changeFromCurrency = (e) => {
        setConvertFrom(e.target.value);
    };

    const changeToCurrency = (e) => {
        setConvertTo(e.target.value);
    };

    const filterCurrencyFrom = currencies.filter(_cur => {
        return _cur.namePlural.includes(convertFrom);
    });

    const filterCurrencyTo = currencies.filter(_cur => {
        return _cur.namePlural.includes(convertTo);
    });

    return (
        <div className="w-full mt-24 p-2 md:w-1/2">

            <div className="convertForm w-full flex flex-col md:flex-row">

                <div className="convertAmount p-2">
                    <div className="amountContent rounded flex bg-slate-900 text-white p-3 focus:border-2 border-sky-400">

                        <label htmlFor="currencyamount">
                            Amount:
                        </label>

                        <input 
                            className="bg-transparent w-full focus:outline-none pl-2 font-bold"
                            id="currencyamount"
                            type={'number'}
                            min={0}
                            placeholder={'100'}
                        />

                    </div>
                </div>

                <div className="convertFrom p-2">
                    <div className="fromContent rounded flex bg-slate-900 text-white p-3 focus:border-2 border-sky-400">

                        <label
                            htmlFor="convertfrom">
                            From:
                        </label>

                        <input 
                            className="bg-transparent w-full focus:outline-none pl-2 font-bold"
                            type={'text'}
                            min={0}
                            id={'convertfrom'}
                            placeholder={'EUR - Euro'}
                            onInput={changeFromCurrency}
                        />

                    </div>

                    <CurrencyList filterList={filterCurrencyFrom}/>
                </div>

                <div className="convertTo p-2">
                    <div className="toContent rounded flex bg-slate-900 text-white p-3 focus:border-2 border-sky-400">
                        <label htmlFor="tocurrency">
                            To:
                        </label>

                        <input 
                            className="bg-transparent w-full focus:outline-none pl-2 font-bold"
                            id="tocurrency"
                            type={'text'}
                            min={0}
                            placeholder={'EUR - Euro'}
                            onInput={changeToCurrency}

                        />
                    </div>

                    <CurrencyList filterList={filterCurrencyTo}/>
                </div>

            </div>
        
        </div>
    );
}
