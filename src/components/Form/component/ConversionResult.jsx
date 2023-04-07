const ConversionResult = ({ convertToCode, convertResult }) => {
    return (
        <p>
            <span className="currencyResult">{convertToCode}:</span>
            <span className="currencyAmount ml-2">
                {
                    convertResult.toLocaleString('en-US')
                }
            </span>
        </p>
    )
};
export default ConversionResult;