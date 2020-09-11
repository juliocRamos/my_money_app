import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as restetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {credits: [{}], debts: [{}]}

// retorna uma lista de ciclos de pagamento
export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

// persiste os valores do form no banco
export function create(values) {
    return submit(values, 'post')
}

// atualiza os valores do form no banco
export function update(values) {
    return submit(values, 'put')
}

// remove um ciclo de pagamento
export function remove(values) {
    return submit(values, 'delete')
}

// Método genérico para fazer submissões de alterações, criações e deleções
function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        const request = axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso!')
                dispatch(init())
            })
            .catch(err => {
                err.response.data.errors.forEach(error => {
                    toastr.error('Erro', error)
                });
            })
    }
}

// faz a chamada de todos os métodos para atualizar a tela
export function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

// faz a chamada de todos os métodos para deletar um registro
export function showDelete(billingCycle) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}


// cancela as alterações feitas no cadastro/alterações
export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}