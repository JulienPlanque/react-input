import React, { Component } from 'react'
import Bouton from './Bouton'
import helper from '../Helper'

export default class FormInputs extends Component {
    state = {
        nom: '',
        age: '',
        ville: '',
        absentDebut: helper.dateUTCFormat(new Date()),
        absentFin: helper.dateUTCFormat(new Date()),
        items: []
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.setState({
            nom: '',
            age: '',
            ville: '',
            absent: '',
            items: [...this.state.items,
            {
                nom: this.state.nom,
                age: this.state.age,
                ville: this.state.ville,
                absentDebut: this.state.absentDebut,
                absentFin: this.state.absentFin
            }
            ],
        });
        console.log(this.state);
    }
    renderCard = () => {
        return this.state.items.map((item, index) => {
            return (
                <div className="card" key={index}>
                    <div className="card-body">
                        <h2>{item.nom}</h2>
                        <hr />
                        <p>Tu as {item.age} ans.</p>
                        <p>Tu vis à {item.ville}.</p>
                        <p>Tu es absent du {item.absentDebut} au {item.absentFin}</p>
                    </div>
                </div>
            )
        });
    }

    render() {
        return (
            <div>
                <div className="card my-3">
                    <div className="card-header">
                        Ajouter une Personne <Bouton />
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="nom">Nom</label>
                                <input type="text"
                                    className="form-control form-control-lg"
                                    name="nom"
                                    onChange={this.onChange}
                                    value={this.state.nom}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="age">Age</label>
                                <input type="text"
                                    className="form-control form-control-lg"
                                    name="age"
                                    onChange={this.onChange}
                                    value={this.state.age}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="absent[0]">Absence</label>
                                <div style={{ display: 'flex' }}>
                                    <input type="date"
                                        className="form-control form-control-lg"
                                        name="absentDebut"
                                        onChange={this.onChange}
                                        value={this.state.absentDebut}
                                    />
                                    <input type="date"
                                        className="form-control form-control-lg"
                                        name="absentFin"
                                        onChange={this.onChange}
                                        value={this.state.absentFin}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="ville">Ville</label>
                                <input type="text"
                                    className="form-control form-control-lg"
                                    name="ville"
                                    onChange={this.onChange}
                                    value={this.state.ville}
                                />
                            </div>
                            <button className="btn btn-primary btn-block">Créez votre fiche</button>
                        </form>
                    </div>
                    {this.renderCard()}
                </div>
            </div >
        )
    }
}
