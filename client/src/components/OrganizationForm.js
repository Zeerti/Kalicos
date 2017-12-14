import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

let OrganizationForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>Organization</label>
          <Field 
            name="name" 
            component="input" 
            type="text" 
            placeholder="Organization Name"
          />
          <label>Address</label>
          <Field 
            name="address" 
            component="input" 
            type="text"
            placeholder="Organization Address"
          />
          <br/>
          <label>Description</label>
          <Field 
            name="description" 
            component="input" 
            type="text"
            placeholder="Organization Description"
          />
          <label>Category</label>
          <Field 
            name="category" 
            component="input" 
            type="text"
            placeholder="Museum/NonProfit/etc"
          />
          <button type="submit">Submit Organization</button>
      </form>
      <br/>
      <p>Addresses:</p>
      <li>1600 Range St #101, Boulder, CO 80301</li>
      <p>Code Craft</p>
      <li>1678 30th St, Boulder, CO 80301</li>
      <p>Haoway</p>
      <li>1777 Broadway, Boulder, CO 80302</li>
      <p>Courthouse</p>
    </div>
  )
}

OrganizationForm = reduxForm({
  form: 'organizationForm'
})(OrganizationForm)

OrganizationForm = connect(
  ( state, props ) => {
    return {
      initialValues: props.organization
    }
  }
)(OrganizationForm)


export default OrganizationForm