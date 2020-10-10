import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Header from '../common/template/header'
import Sidebar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Messages from '../common/msg/messages'

import Routes from './routes'

export default (props) => {
    return (
        <HashRouter>
            <div className="wrapper">
                <Header />
                <Sidebar />
                    <Routes />
                <Footer />
                <Messages />
            </div>
        </HashRouter>
    )
}