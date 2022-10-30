import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './Reservation.css';

function Reservation() {

    // Parte do código que alimenta os campos de país e cidade no formulário
    const [ countrys, setCountrys ] = useState([]);
    const [ cities, setCities ] = useState([]);
    const [ selectedCountry, setSelectedCountry ] = useState();
    const [ selectedCity, setSelectedCity ] = useState();

    useEffect(() => {
        axios.get("https://amazon-api.sellead.com/country")
            .then(response => {
                setCountrys(response.data);
            })
    }, [])

    useEffect(() => {
        axios.get("https://amazon-api.sellead.com/city")
            .then(response => {
                setCities(response.data);
            })
    }, [])

    function handleSelectedCountry(e){
        const country = e.target.value;
        setSelectedCountry(country);
    }

    function handleSelectedCity(e){
        const city = e.target.value;
        setSelectedCity(city);
    }

    // Constantes que serão utilizadas para enviar os dados do formulário
    const { register, handleSubmit } = useForm();

    function onSubmit(userData){
        console.log(userData)
    }

    return (
        <section id="sectionForm">
            <div className="containerReservation" id="containerReservation">
                <div className="titulo">
                    <h1>Destinos de Interesse</h1>
                    <h2>Bora viajar!</h2>
                </div>
                
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div id="formPessoal">
                        <h2>Dados pessoais</h2>
                        <input type="text" id="formName" name="formName"  placeholder='Nome' {...register("formName", { required: true })} />
                        <br />
                        <input type="email" id="formEmail" name="formEmail"  placeholder='E-mail' {...register("formEmail", { required: true })} />
                        <br />
                        <input type="text" id="formTelefone" name="formTelefone"  placeholder='Telefone' {...register("formTelefone", { required: true })} />
                        <br />
                        <input type="text" id="formCPF" name="formCPF"  placeholder='CPF' {...register("formCPF", { required: true })} />
                    </div>

                    <div id="formDestinos">
                        <h2>Escolha seus destinos!</h2>
                        <label htmlFor="formCountry">País:</label>
                        <br />

                        <select 
                            multiple
                            id="formCountry" 
                            name="formCountry" 
                            value={selectedCountry} 
                            onChange={handleSelectedCountry}
                            {...register("formCountry", { required: true })}
                        >
                            <option selected disabled>Selecione o país</option>
                            {countrys.map(countrys => (
                                <option key={countrys.id} value={countrys.name}>
                                    {countrys.name_ptbr}
                                </option>
                            ))}
                        </select>
                        <br />

                        <label htmlFor="formCity">Cidade:</label>
                        <br />
                        <select 
                            multiple
                            id="formCity" 
                            name="formCity" 
                            value={selectedCity} 
                            onChange={handleSelectedCity}
                            {...register("formCity", { required: true })}
                        >
                            <option selected disabled>Selecione a cidade</option>
                            {cities.map(cities => (
                                <option className="optionsNames" key={cities.id} value={cities.name}>
                                    {cities.name}
                                </option>
                            ))}
                        </select>
                        <br />
                        <span>
                            Para selecionar mais de uma cidade ou país, <br />
                            segure a tecla CTRL.
                        </span>
                        <br />
                    </div>

                    <button id="btnSend" type="submit">Enviar</button>
                </form>
            </div>
        </section>
    );
}

export default Reservation;