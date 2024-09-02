import React from 'react';
import DynamicFormBuilder from './components/DynamicFormBuilder';

const App: React.FC = () => {
  const fields = [
    { id: 'name', label: 'Name', type: 'text' },
    { id: 'age', label: 'Age', type: 'number' },
    { id: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female', 'Other'] },
  ];

  const handleSubmit = (data: { [key: string]: string | number }) => {
    console.log('Form Data:', data);
  };

  return (
    <div>
      <h1>Dynamic Form Builder</h1>
      <DynamicFormBuilder fields={fields} onSubmit={handleSubmit} />
    </div>
  );
};

export default App;