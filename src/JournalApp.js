import React from 'react'
import { Provider } from 'react-redux'
import { AppRouters } from './Routers/AppRouters'
import { store } from './store/Store'


export const JournalApp = () => {
    return (
        <div>
            <Provider store={store}>
                <AppRouters />
            </Provider>
        </div>
    )
}
