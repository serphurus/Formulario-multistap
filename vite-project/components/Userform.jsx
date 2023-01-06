import React from 'react'

const userform = ({data, updateFieldHandler}) => {
  return (
    <div>
        <div className="form-control">
          <label htmlFor="Nome">Nome:</label>
          <input 
          type="text" 
          name='name' 
          id='name' 
          placeholder='Digite seu Nome' 
          required
          value={data.name || ""} 
          onChange={(e) => updateFieldHandler("name", e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail:</label>
          <input 
          type="email" 
          name='email' 
          id='email' 
          placeholder='Digite seu E-mail' 
          required
          value={data.email || ""} 
          onChange={(e) => updateFieldHandler("email", e.target.value)}
          />
        </div>
    </div>
  )
}

export default userform