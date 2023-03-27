import React, { useState } from "react";
import { currencies } from "currencies.json";
import CurrencyList from "./CurrencyList.js/CurrencyList";

import { TbTransform } from 'react-icons/tb';
import { BiErrorAlt } from 'react-icons/bi'

import './Convert.css';


// my4HEDWUXAUGeyCS5IMJfGUjmFDTvS65
export default function Convert() {

    const [convertFrom, setConvertFrom] = useState('');
    const [convertTo, setConvertTo] = useState('');
    const [convertResult, setConvertResult] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const changeFromCurrency = (e) => {
        setConvertFrom(e.target.value);
    };

    const changeToCurrency = (e) => {
        setConvertTo(e.target.value);
    };

    const toSelectedCurrency = (curr) => {
        console.log(curr.target);
    };

    const filterCurrencyFrom = currencies.filter(_cur => {
        return _cur.name.includes(convertFrom);
    });

    const filterCurrencyTo = currencies.filter(_cur => {
        return _cur.name.includes(convertTo);
    });

    const onError = (_err) => {
        setErrorMessage(_err);
    };

    const onConvertPressed = async () => {

        if(!convertTo || !convertFrom)
            return setErrorMessage('please select a currency to convert!');

        const myHeaders = new Headers();
        myHeaders.append("apikey", "my4HEDWUXAUGeyCS5IMJfGUjmFDTvS65");
        
        const requestOptions = {
          method: 'GET',
          redirect: 'follow',
          headers: myHeaders
        };
        
        const valueData = await fetch("https://api.apilayer.com/currency_data/convert?to=EUR&from=USD&amount=50", requestOptions);
        const response = await valueData.json();
        
        const result = response.result;
        setConvertResult(result);
    };

    return (
        <div className="w-full mt-12 p-2 md:w-1/2">

        {/* ${errorMessage ? '' : 'hidden'} */}
            <div className={`errorMessage flex items-center text-white p-2 text-lg`}>
                <span className="p-2 mr-3 text-red-400 border-[1px] border-gray-400 rounded-lg"><BiErrorAlt /></span>
                <p>{errorMessage || 'Currency Convert: please select a currency to convert'}</p>
            </div>

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
                            placeholder={'US Dollar - USD'}
                            onInput={changeToCurrency}

                        />
                    </div>

                    <CurrencyList filterList={filterCurrencyTo} clickedCurrency={toSelectedCurrency}/>
                </div>

            </div>

            <div className="bg-slate-700 mt-3 w-full flex items-center rounded p-2 text-white font-bold text-lg">
                <p>
                    <span className="currencyResult">{'USD:'}</span>
                    <span className="currencyAmount ml-2">
                        {
                        convertResult.toLocaleString("en-US", {
                            style: "currency", 
                            currency: "USD"
                        }) || '$0'}
                    </span>
                </p>
            </div>

            <div className="convertCurrency mt-5 w-full flex justify-center items-center">
                <button 
                    onClick={onConvertPressed}
                    className="w-full flex justify-center items-center bg-slate-600 text-center p-2 rounded-full text-lg uppercase text-white font-bold md:w-1/3 hover:bg-slate-500">
                    
                    <span className="mr-4">convert</span>
                    <TbTransform />
                </button>
            </div>
            
        </div>
    );
}
