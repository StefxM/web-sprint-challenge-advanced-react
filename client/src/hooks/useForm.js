// write your custom hook here to control your checkout form
import React, { useState } from "react";

export const useForm = initialValue => {
    const [showSuccessMessage,setShowSuccessMessage] = useState(initialValue);
    const [values, setValues] = useState(initialValue);
    const handleChanges = updatedValue => {
        setValues(updatedValue);
    };
    const handleSubmit = updatedSubmit => {
        setShowSuccessMessage(updatedSubmit);
    };

    return [showSuccessMessage,setShowSuccessMessage, values, setValues,handleChanges, handleSubmit];

};