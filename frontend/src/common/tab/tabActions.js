// Evolui o estado do componente da aba selecionada
export function selectTab(tabID) {
    return {
        type: 'TAB_SELECTED',
        payload: tabID
    }
}