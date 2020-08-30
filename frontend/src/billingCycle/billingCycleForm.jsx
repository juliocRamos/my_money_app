import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends Component {

    toCssClasses(btnType) {
        const type = btnType ? `btn btn-${btnType}` : 'primary'
        return type
    }

    render() {
        const btnClass = this.toCssClasses(this.props.buttonType)
        const { handleSubmit } = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={labelAndInput}
                        label='Nome' cols='12 4' placeholder='Nome' />
                    <Field name='month' component={labelAndInput}
                        type='number' label='Mês' cols='12 4' placeholder='Mês' />
                    <Field name='year' component={labelAndInput}
                        type='number' label='Ano' cols='12 4' placeholder='Ano' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={btnClass}>
                        Submit
                    </button>
                </div>
            </form>
        )
    }
}

export default reduxForm({ form: 'billingCycleForm' })(BillingCycleForm)