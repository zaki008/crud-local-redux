import {useState} from 'react';

const useForm = initialValues => {
  const [form, setForm] = useState(initialValues);
  const handleChange = updates => {
    setForm(prev => ({
      ...prev,
      ...(typeof updates === 'function' ? updates(prev) : updates),
    }));
  };

  const resetForm = () => {
    setForm(initialValues);
  };

  return {
    form,
    handleChange,
    resetForm,
  };
};

export default useForm;
