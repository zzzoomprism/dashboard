import React, {useState, useEffect} from "react";
import validation from "./validation";
import * as axios from "axios";

const useFormValidation = (initialState) => {
    const [values, setValues] = useState(initialState);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSubmit, setSubmiting] = useState(false);
    useEffect(()=>{
        if(isSubmit){
            const noError = Object.keys(errors).length === 0;
            if(noError){
                setLoading(true);
                let amount = (values.amount) ? values.amount : 1;
                axios.get(`https://api.ratesapi.io/api/latest?base=${values.from}&symbols=${values.to}`)
                    .then(response => {
                        setResult((response.data.rates[values.to] * amount).toFixed(3));
                    });
                setTimeout(()=>setLoading(false), 2000);
            }
        }
    }, [errors]);

    function handleChange(event) {
        setSubmiting(false);
        setValues({
            ...values,
            [event.target.name] : event.target.value
        })
    }

    function handleButtonClick(event) {
        setErrors(validation(values));
        setSubmiting(true);
    }


    return {handleChange, handleButtonClick, values, errors, result, loading, isSubmit}
};


export default useFormValidation;