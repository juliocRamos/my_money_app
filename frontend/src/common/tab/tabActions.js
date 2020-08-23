// Evolui o estado do componente da aba selecionada
export function selectTab(tabID) {
    return {
        type: 'TAB_SELECTED',
        payload: tabID
    }
}

// Controla as abas a serem exibidas, criando um novo obj
// como no seguinte padrão obj = {tabEdit: true, tabCreate: true, tabDelete: false}
export function showTabs(...tabIDs) {
    const tabsToShow = {}
    tabIDs.forEach(e => tabsToShow[e] = true)
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}