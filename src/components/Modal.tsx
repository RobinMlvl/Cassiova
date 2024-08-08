import React, { useState } from "react";
import InputComp from "./Input";

export default function Modal(props) {

    let setShowModal = props.setShowModal;
    let showModal = props.showModal;

    let [isActiveUser, setActiveUser] = useState(false);
    let [UserValue, setUserValue] = useState("");

    let [isActiveEmail, setActiveEmail] = useState(false);
    let [emailValue, setEmailValue] = useState("");

    let [isActiveCountry, setActiveCountry] = useState(false);
    let [countryValue, setCountryValue] = useState("");

    let [isActiveCity, setActiveCity] = useState(false);
    let [cityValue, setCityValue] = useState("");

    let [isActiveCo, setActiveCo] = useState(false);
    let [coValue, setCoValue] = useState("");

    let [isActiveIn, setActiveIn] = useState(false);
    let [inValue, setInValue] = useState("");

    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-10/12 my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <div>
                                        <h3 className="text-3xl font-semibold">
                                            We are currently at full capacity for the Cassiova program.
                                        </h3>
                                        <p>Register for the waiting list for become the next one to increase your revenue.</p>
                                    </div>
                                    <button
                                        className="p-1 ml-auto bg-red border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-red opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto ">
                                    <InputComp
                                        className=''
                                        value={UserValue}
                                        type="text"
                                        setValue={setUserValue}
                                        setActiveValue={setActiveUser}
                                        activeValue={isActiveUser}
                                        placeHolder="Full Name" />

                                    <InputComp
                                        value={emailValue}
                                        type="text"
                                        setValue={setEmailValue}
                                        setActiveValue={setActiveEmail}
                                        activeValue={isActiveEmail}
                                        placeHolder="Email" />

                                    <InputComp
                                        value={countryValue}
                                        type="text"
                                        setValue={setCountryValue}
                                        setActiveValue={setActiveCountry}
                                        activeValue={isActiveCountry}
                                        placeHolder="Country" />

                                    <InputComp
                                        value={cityValue}
                                        type="text"
                                        setValue={setCityValue}
                                        setActiveValue={setActiveCity}
                                        activeValue={isActiveCity}
                                        placeHolder="City" />

                                    <InputComp
                                        value={coValue}
                                        type="text"
                                        setValue={setCoValue}
                                        setActiveValue={setActiveCo}
                                        activeValue={isActiveCo}
                                        placeHolder="Company name" />

                                    <InputComp
                                        value={inValue}
                                        type="text"
                                        setValue={setInValue}
                                        setActiveValue={setActiveIn}
                                        activeValue={isActiveIn}
                                        placeHolder="Business industries (restaurant, hotel...)" />
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-yellow-400 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}