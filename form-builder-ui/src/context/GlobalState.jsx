import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import AppReducer from "./AppReducer";

const initialState = [];

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:5000/api/forms');
      dispatch({ type: 'SET_FORMS', payload: result.data });
    };
    fetchData();
  }, []);

  const removeForm = async (id) => {
    await axios.delete(`http://localhost:5000/api/forms/${id}`);
    dispatch({ type: "REMOVE_FORM", payload: id });
  };

  const addForm = async (form) => {
    const result = await axios.post('http://localhost:5000/api/forms', form);
    dispatch({ type: "ADD_FORM", payload: result.data });
  };

  const editForm = async (form) => {
    const result = await axios.put(`http://localhost:5000/api/forms/${form.id}`, form);
    dispatch({ type: "EDIT_FORM", payload: result.data });
  };

  return (
    <GlobalContext.Provider value={{ state, removeForm, addForm, editForm }}>
      {children}
    </GlobalContext.Provider>
  );
};