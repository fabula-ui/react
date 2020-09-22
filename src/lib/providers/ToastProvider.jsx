import React, { useCallback, useReducer } from 'react';

// Controller
import ToastController from '../controllers/ToastController';

// Portals
import ToastPortal from '../portals/ToastPortal';

const reducer = (state, action) => {
    let targetStack;
    let tempStacks;

    switch (action.type) {
        case 'CREATE_STACK':
            tempStacks = { ...state };

            tempStacks[action.name] = {
                elements: [],
                placement: action.placement
            };

            return tempStacks;
        case 'SHOW_STACK':
            tempStacks = { ...state };
            targetStack = tempStacks[action.stack] || tempStacks.default;

            targetStack.elements.push(action.toast);

            return tempStacks;
        default:
            return state;
    }
}

const ToastProvider = props => {
    const { children } = props;
    const [stacks, dispatch] = useReducer(reducer, {
        default: {
            elements: [],
            placement: {
                x: 'right',
                y: 'bottom'
            }
        }
    });

    const createStack = useCallback(params => {
        dispatch({
            type: 'CREATE_STACK',
            ...params
        })
    }, []);

    const showToast = useCallback(params => {
        const { stack, ...rest } = params;
        dispatch({
            type: 'SHOW_STACK',
            stack,
            toast: { ...rest }
        });
    }, []);

    const initialState = {
        createStack,
        showToast,
        stacks
    };

    return (
        <ToastController.Provider value={initialState}>
            {children}
            <ToastPortal />
        </ToastController.Provider>
    )
}

export default ToastProvider;