import React, { Fragment } from 'react';
import { Heading } from './Heading';
import { Employeelist } from './Employeelist';

export const Home = () => {
    return (
        <Fragment>
            <div className="App">
                <div className="container-xl">
                <nav class="flex items-center bg-gray-900 p-3 flex-wrap justify-center">
                    <a class="p-2 mr-4 inline-flex items-center">
                        <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        class="fill-current text-white h-8 w-8 mr-2">
                        <path
                            d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
                        </svg>
                        <span class="text-xl text-white font-bold uppercase tracking-wide">Pegaway</span>
                    </a>
                    </nav>
                    <Heading />
                    <Employeelist />
                </div>
            </div>
        </Fragment>
    )
}