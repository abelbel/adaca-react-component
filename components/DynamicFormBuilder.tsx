import React, { useState } from 'react';

// Define types for form fields and form data
type FieldType = 'text' | 'number' | 'select';
interface Field {
  id: string;
  label: string;
  type: FieldType;
  options?: string[];
}

interface FormData {
  [key: string]: string | number;
}

// Dynamic FormField component
const FormField: React.FC<{ field: Field; value: string | number; onChange: (id: string, value: string | number) => void }> = ({ field, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onChange(field.id, e.target.value);
  };

  switch (field.type) {
    case 'text':
      return (
        <div>
          <label>{field.label}</label>
          <input type="text" value={value} onChange={handleChange} />
        </div>
      );
    case 'number':
      return (
        <div>
          <label>{field.label}</label>
          <input type="number" value={value} onChange={handleChange} />
        </div>
      );
    case 'select':
      return (
        <div>
          <label>{field.label}</label>
          <select value={value} onChange={handleChange}>
            {field.options?.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      );
    default:
      return null;
  }
};

// DynamicFormBuilder component
const DynamicFormBuilder: React.FC<{ fields: Field[]; onSubmit: (data: FormData) => void }> = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({});

  const handleChange = (id: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map(field => (
        <FormField key={field.id} field={field} value={formData[field.id] || ''} onChange={handleChange} />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicFormBuilder;