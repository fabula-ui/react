import React from 'react';

import {
    FabulaProvider,
    ToastProvider,
    Toast,
    FabulaUtils,
} from '../lib';

import { ToastExamples } from '../examples/Toast/Toast';

export default {
    title: 'Toast',
    component: Toast,
};

export const Clear = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <div col="4">
                    <Toast clear={true} closeButton={{ label: 'Close' }} icon={{ color: 'primary', name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>

                <div col="4">
                    <Toast clear={true} closeButton={{ color: 'primary', label: 'Close', invert: true }} color="primary" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>

                <div col="4">
                    <Toast clear={true} closeButton={{ color: 'secondary', label: 'Close', invert: true }} color="secondary" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>
            </div>

            <div mb="1" row>
                <div col="4">
                    <Toast clear={true} closeButton={{ color: 'success', label: 'Close', invert: true }} color="success" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>

                <div col="4">
                    <Toast clear={true} closeButton={{ color: 'danger', label: 'Close', invert: true }} color="danger" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>

                <div col="4">
                    <Toast clear={true} closeButton={{ color: 'warning', label: 'Close', invert: true }} color="warning" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>
            </div>

            <div mb="1" row>
                <div col="4">
                    <Toast clear={true} closeButton={{ color: 'hot', label: 'Close', invert: true }} color="hot" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>

                <div col="4">
                    <Toast clear={true} closeButton={{ color: 'cold', label: 'Close', invert: true }} color="cold" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>

                <div col="4">
                    <Toast clear={true} closeButton={{ color: 'dark', label: 'Close', invert: true }} color="dark" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>
            </div>

            <div mb="1" row>
                <div col="4">
                    <Toast clear={true} closeButton={{ color: 'light', label: 'Close', invert: true }} color="light" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>

                <div col="4">
                    <Toast clear={true} closeButton={{ color: 'aux', label: 'Close', invert: true }} color="aux" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Color = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <div col="4">
                    <Toast closeButton={{ label: 'Close' }} icon={{ color: 'primary', name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>

                <div col="4">
                    <Toast closeButton={{ color: 'primary', label: 'Close', invert: true }} color="primary" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>

                <div col="4">
                    <Toast closeButton={{ color: 'secondary', label: 'Close', invert: true }} color="secondary" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>
            </div>

            <div mb="1" row>
                <div col="4">
                    <Toast closeButton={{ color: 'success', label: 'Close', invert: true }} color="success" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>

                <div col="4">
                    <Toast closeButton={{ color: 'danger', label: 'Close', invert: true }} color="danger" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>

                <div col="4">
                    <Toast closeButton={{ color: 'warning', label: 'Close', invert: true }} color="warning" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>
            </div>

            <div mb="1" row>
                <div col="4">
                    <Toast closeButton={{ color: 'hot', label: 'Close', invert: true }} color="hot" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>

                <div col="4">
                    <Toast closeButton={{ color: 'cold', label: 'Close', invert: true }} color="cold" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>

                <div col="4">
                    <Toast closeButton={{ color: 'dark', label: 'Close', invert: true }} color="dark" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>
            </div>

            <div mb="1" row>
                <div col="4">
                    <Toast closeButton={{ color: 'light', label: 'Close', invert: true }} color="light" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>

                <div col="4">
                    <Toast closeButton={{ color: 'aux', label: 'Close', invert: true }} color="aux" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Faded = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <div col="4">
                    <Toast closeButton={{ label: 'Close' }} faded={true} icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>

                <div col="4">
                    <Toast closeButton={{ color: 'primary', label: 'Close', invert: true }} color="primary" faded={true} icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>

                <div col="4">
                    <Toast closeButton={{ color: 'secondary', label: 'Close', invert: true }} color="secondary" faded={true} icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>
            </div>

            <div mb="1" row>
                <div col="4">
                    <Toast closeButton={{ color: 'success', label: 'Close', invert: true }} color="success" faded={true} icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>

                <div col="4">
                    <Toast closeButton={{ color: 'danger', label: 'Close', invert: true }} color="danger" faded={true} icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>

                <div col="4">
                    <Toast closeButton={{ color: 'warning', label: 'Close', invert: true }} color="warning" faded={true} icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>
            </div>

            <div mb="1" row>
                <div col="4">
                    <Toast closeButton={{ color: 'hot', label: 'Close', invert: true }} color="hot" faded={true} icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>

                <div col="4">
                    <Toast closeButton={{ color: 'cold', label: 'Close', invert: true }} color="cold" faded={true} icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>

                <div col="4">
                    <Toast closeButton={{ color: 'dark', label: 'Close', invert: true }} color="dark" faded={true} icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>
            </div>

            <div mb="1" row>
                <div col="4">
                    <Toast closeButton={{ color: 'light', label: 'Close', invert: true }} color="light" faded={true} icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>

                <div col="4">
                    <Toast closeButton={{ color: 'aux', label: 'Close', invert: true }} color="aux" faded={true} icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>
            </div>
        </FabulaUtils>

    </FabulaProvider>
)

export const Glow = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <div col="4">
                    <Toast closeButton={{ label: 'Close' }} glow={true} icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>

                <div col="4">
                    <Toast closeButton={{ color: 'primary', label: 'Close', invert: true }} color="primary" glow={true} icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>

                <div col="4">
                    <Toast closeButton={{ color: 'secondary', label: 'Close', invert: true }} color="secondary" glow={true} icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>
            </div>

            <div mb="1" row>
                <div col="4">
                    <Toast closeButton={{ color: 'success', label: 'Close', invert: true }} color="success" glow={true} icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>

                <div col="4">
                    <Toast closeButton={{ color: 'danger', label: 'Close', invert: true }} color="danger" glow={true} icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>

                <div col="4">
                    <Toast closeButton={{ color: 'warning', label: 'Close', invert: true }} color="warning" glow={true} icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>
            </div>

            <div mb="1" row>
                <div col="4">
                    <Toast closeButton={{ color: 'hot', label: 'Close', invert: true }} color="hot" glow={true} icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>

                <div col="4">
                    <Toast closeButton={{ color: 'cold', label: 'Close', invert: true }} color="cold" glow={true} icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>

                <div col="4">
                    <Toast closeButton={{ color: 'dark', label: 'Close', invert: true }} color="dark" glow={true} icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>
            </div>

            <div mb="1" row>
                <div col="4">
                    <Toast closeButton={{ color: 'light', label: 'Close', invert: true }} color="light" glow={true} icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>

                <div col="4">
                    <Toast closeButton={{ color: 'aux', label: 'Close', invert: true }} color="aux" glow={true} icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." width="100%" />
                </div>
            </div>
        </FabulaUtils>

    </FabulaProvider>

)

export const Icons = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <div col="3">
                    <Toast closeButton={{ label: 'Close' }} icon={{ name: 'compass' }} message="Here is a toast with an icon..." width="100%" />
                </div>

                <div col="3">
                    <Toast closeButton={{ color: 'primary', label: 'Close' }} icon={{ color: 'primary', name: 'battery-charging' }} message="Here is a toast with an icon..." width="100%" />
                </div>

                <div col="3">
                    <Toast closeButton={{ color: 'secondary', label: 'Close' }} icon={{ color: 'secondary', name: 'camera' }} message="Here is a toast with an icon..." width="100%" />
                </div>

                <div col="3">
                    <Toast closeButton={{ color: 'success', label: 'Close' }} icon={{ color: 'success', name: 'database' }} message="Here is a toast with an icon..." width="100%" />
                </div>
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Links = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <div col="3">
                    <Toast icon={{ color: 'primary', name: 'map-pin' }} link={{label: 'Go to Google', target: '_blank', url: 'https://www.google.com.br'}} message="Here is a toast with a link..." width="100%" />
                </div>
                <div col="3">
                    <Toast icon={{ color: 'primary', name: 'map-pin' }} link={{color: 'secondary', label: 'Go to Google', target: '_blank', url: 'https://www.google.com.br'}} message="Here is a toast with a link..." width="100%" />
                </div>
                <div col="3">
                    <Toast icon={{ color: 'primary', name: 'map-pin' }} link={{color: 'success', label: 'Go to Google', target: '_blank', url: 'https://www.google.com.br'}} message="Here is a toast with a link..." width="100%" />
                </div>
                <div col="3">
                    <Toast icon={{ color: 'primary', name: 'map-pin' }} link={{color: 'danger', label: 'Go to Google', target: '_blank', url: 'https://www.google.com.br'}} message="Here is a toast with a link..." width="100%" />
                </div>
            </div>

            <div mb="1" row>
                <div col="3">
                    <Toast icon={{ color: 'primary', name: 'map-pin' }} link={{color: 'warning', label: 'Go to Google', target: '_blank', url: 'https://www.google.com.br'}} message="Here is a toast with a link..." width="100%" />
                </div>
                <div col="3">
                    <Toast icon={{ color: 'primary', name: 'map-pin' }} link={{color: 'hot', label: 'Go to Google', target: '_blank', url: 'https://www.google.com.br'}} message="Here is a toast with a link..." width="100%" />
                </div>
                <div col="3">
                    <Toast icon={{ color: 'primary', name: 'map-pin' }} link={{color: 'cold', label: 'Go to Google', target: '_blank', url: 'https://www.google.com.br'}} message="Here is a toast with a link..." width="100%" />
                </div>
                <div col="3">
                    <Toast icon={{ color: 'primary', name: 'map-pin' }} link={{color: 'dark', label: 'Go to Google', target: '_blank', url: 'https://www.google.com.br'}} message="Here is a toast with a link..." width="100%" />
                </div>
            </div>

            <div mb="1" row>
                <div col="3">
                    <Toast icon={{ color: 'primary', name: 'map-pin' }} link={{color: 'light', label: 'Go to Google', target: '_blank', url: 'https://www.google.com.br'}} message="Here is a toast with a link..." width="100%" />
                </div>
                <div col="3">
                    <Toast icon={{ color: 'primary', name: 'map-pin' }} link={{color: 'aux', label: 'Go to Google', target: '_blank', url: 'https://www.google.com.br'}} message="Here is a toast with a link..." width="100%" />
                </div>
            </div>

            

            <div mb="1" row>
                <div col="3">
                    <Toast icon={{ color: 'primary', name: 'map-pin' }} link={{label: 'Go to Google', target: '_blank', underline: false, url: 'https://www.google.com.br'}} message="Here is a toast with a link..." width="100%" />
                </div>
                <div col="3">
                    <Toast icon={{ color: 'primary', name: 'map-pin' }} link={{color: 'secondary', label: 'Go to Google', target: '_blank', underline: false, url: 'https://www.google.com.br'}} message="Here is a toast with a link..." width="100%" />
                </div>
                <div col="3">
                    <Toast icon={{ color: 'primary', name: 'map-pin' }} link={{color: 'success', label: 'Go to Google', target: '_blank', underline: false, url: 'https://www.google.com.br'}} message="Here is a toast with a link..." width="100%" />
                </div>
                <div col="3">
                    <Toast icon={{ color: 'primary', name: 'map-pin' }} link={{color: 'danger', label: 'Go to Google', target: '_blank', underline: false, url: 'https://www.google.com.br'}} message="Here is a toast with a link..." width="100%" />
                </div>
            </div>

            <div mb="1" row>
                <div col="3">
                    <Toast icon={{ color: 'primary', name: 'map-pin' }} link={{color: 'warning', label: 'Go to Google', target: '_blank', underline: false, url: 'https://www.google.com.br'}} message="Here is a toast with a link..." width="100%" />
                </div>
                <div col="3">
                    <Toast icon={{ color: 'primary', name: 'map-pin' }} link={{color: 'hot', label: 'Go to Google', target: '_blank', underline: false, url: 'https://www.google.com.br'}} message="Here is a toast with a link..." width="100%" />
                </div>
                <div col="3">
                    <Toast icon={{ color: 'primary', name: 'map-pin' }} link={{color: 'cold', label: 'Go to Google', target: '_blank', underline: false, url: 'https://www.google.com.br'}} message="Here is a toast with a link..." width="100%" />
                </div>
                <div col="3">
                    <Toast icon={{ color: 'primary', name: 'map-pin' }} link={{color: 'dark', label: 'Go to Google', target: '_blank', underline: false, url: 'https://www.google.com.br'}} message="Here is a toast with a link..." width="100%" />
                </div>
            </div>

            <div mb="1" row>
                <div col="3">
                    <Toast icon={{ color: 'primary', name: 'map-pin' }} link={{color: 'light', label: 'Go to Google', target: '_blank', underline: false, url: 'https://www.google.com.br'}} message="Here is a toast with a link..." width="100%" />
                </div>
                <div col="3">
                    <Toast icon={{ color: 'primary', name: 'map-pin' }} link={{color: 'aux', label: 'Go to Google', target: '_blank', underline: false, url: 'https://www.google.com.br'}} message="Here is a toast with a link..." width="100%" />
                </div>
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Outline = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <div col="4">
                    <Toast closeButton={{ label: 'Close', outline: true }} icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." outline={true} width="100%" />
                </div>

                <div col="4">
                    <Toast closeButton={{ color: 'primary', label: 'Close', outline: true }} color="primary" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." outline={true} width="100%" />
                </div>

                <div col="4">
                    <Toast closeButton={{ color: 'secondary', label: 'Close', outline: true }} color="secondary" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." outline={true} width="100%" />
                </div>
            </div>

            <div mb="1" row>
                <div col="4">
                    <Toast closeButton={{ color: 'success', label: 'Close', outline: true }} color="success" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." outline={true} width="100%" />
                </div>

                <div col="4">
                    <Toast closeButton={{ color: 'danger', label: 'Close', outline: true }} color="danger" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." outline={true} width="100%" />
                </div>

                <div col="4">
                    <Toast closeButton={{ color: 'warning', label: 'Close', outline: true }} color="warning" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." outline={true} width="100%" />
                </div>
            </div>

            <div mb="1" row>
                <div col="4">
                    <Toast closeButton={{ color: 'hot', label: 'Close', outline: true }} color="hot" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." outline={true} width="100%" />
                </div>

                <div col="4">
                    <Toast closeButton={{ color: 'cold', label: 'Close', outline: true }} color="cold" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." outline={true} width="100%" />
                </div>

                <div col="4">
                    <Toast closeButton={{ color: 'dark', label: 'Close', outline: true }} color="dark" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." outline={true} width="100%" />
                </div>
            </div>

            <div mb="1" row>
                <div col="4">
                    <Toast closeButton={{ color: 'light', label: 'Close', outline: true }} color="light" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." outline={true} width="100%" />
                </div>

                <div col="4">
                    <Toast closeButton={{ color: 'aux', label: 'Close', outline: true }} color="aux" icon={{ name: 'hard-drive' }} message="Here is an example of a toast component working..." outline={true} width="100%" />
                </div>
            </div>
        </FabulaUtils>

    </FabulaProvider>
)

export const Stacks = () => {
    return (
        <FabulaProvider>
            <ToastProvider>
                <ToastExamples />
            </ToastProvider>
        </FabulaProvider>
    )
}