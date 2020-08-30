import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as restetForm } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'

// retorna uma lista de ciclos de pagamento
export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

// persiste os valores do form no banco tratando eventuais erros
export function create(values) {
    return dispatch => {
        const request = axios.post(`${BASE_URL}/billingCycles`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso!')
                dispatch([
                    restetForm('billingCycleForm'),
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ])
            })
            .catch(err => {
                err.response.data.errors.forEach(error => {
                    toastr.error('Erro', error)
                });
            })
    }
}