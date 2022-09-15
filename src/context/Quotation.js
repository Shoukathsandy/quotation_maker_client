import { useState, createContext } from "react";

export const QuotationContext = createContext();

export const QuotationProvider = (props) => {
    const [quotations, setQuotations] = useState([]);
    return (
        <QuotationContext.Provider value={{ quotations, setQuotations }}>
            {props.children}
        </QuotationContext.Provider>
    )
}