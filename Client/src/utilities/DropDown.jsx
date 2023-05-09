import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCaretDown } from 'react-icons/ai'
const options = ['Free', 'Premium', 'Pro'];

export default function DropDown({ dropdown , defaultValue }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value) => () => {
        setSelectedOption(value);
        setIsOpen(false);
        dropdown(value)

    };

    return (
        <div className="inline-flex w-full">
            <div className="relative inline-flex w-full rounded-md border bg-white">
                <a
                    onClick={toggling}
                    className="w-[100%] rounded-l-md px-4 py-3 text-base text-gray-600 no-underline hover:bg-gray-50 hover:text-gray-700"
                >
                    {selectedOption || defaultValue ? defaultValue : 'Category'}
                </a>
                <div className="relative">
                    <button
                        type="button"
                        // eslint-disable-next-line react/jsx-no-duplicate-props
                        className={`button-${isOpen ? 'danger' : 'success'}
               hover:text-gray-700' inline-flex h-full items-center justify-center rounded-r-md border-l border-gray-100 px-2 text-gray-600 hover:bg-gray-50`}
                        onClick={toggling}
                    >
                        {/* <i className="fa-solid fa-chevron-down"></i> */}
                        <AiOutlineCaretDown />
                    </button>
                </div>
                {isOpen && (
                    <div className="absolute top-6 right-0 z-10 mt-4 w-full origin-top-right rounded-md border border-gray-100 bg-white shadow-lg">
                        {options.map((option, i) => (
                            <div key={i}>
                                <Link
                                    onClick={onOptionClicked(option)}
                                    key={Math.random()}
                                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 no-underline hover:bg-gray-50 hover:text-gray-700"
                                >
                                    {option}
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}