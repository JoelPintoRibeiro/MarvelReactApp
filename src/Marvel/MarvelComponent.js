import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import MarvelItem from './MarvelItem'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


class MarvelComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { term: "", isLoading: true, characters: [] }

    }
    componentWillUnmount() {
        this.mounted = false
    }
    componentDidMount() {

        this.mounted = true
        let url = new URL("http://gateway.marvel.com/v1/public/characters")
        url.search = new URLSearchParams({ apikey: process.env.REACT_APP_WEATHER_API_KEY, limit: 100 })

        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    if (this.mounted) {
                        this.setState({
                            characters: result.data.results.map((item, index) => {
                                return { id: item.id, name: item.name }

                            }),
                            isLoading: false
                        })
                    }
                },
                (error) => {
                    console.log("error while fetching data")
                }

            )
    }

    onTermAdded = (event) => {
        if (event.keyCode !== 13) {
            return;
        }

        event.preventDefault();

        var val = this.state.term.trim()
        this.setState({isLoading:true})
        if (val) {
        
            let url = new URL("http://gateway.marvel.com/v1/public/characters")
            url.search = new URLSearchParams({ apikey: process.env.REACT_APP_WEATHER_API_KEY, limit: 100, nameStartsWith: val })

            fetch(url)
                .then(res => res.json())
                .then(
                    (result) => {
                        if (this.mounted) {
                            this.setState({
                                characters: result.data.results.map((item, index) => {
                                    return { id: item.id, name: item.name }

                                }),
                                isLoading: false
                            })
                        }
                    },
                    (error) => {
                        console.log("error while fetching data")
                    }

                )

        }
    }

    onChangeTerm = (event) => {
        this.setState({ term: event.target.value });
    }

    render() {
        return (

            <div>


                <input type="text" placeholder="search" onKeyDown={this.onTermAdded} value={this.state.term} onChange={this.onChangeTerm} ></input>

                {
                    this.state.isLoading ? (
                        <div>
                            <span>loading...</span>
                        </div>
                    ) :

                        (

                            this.state.characters.map((item, index) => {
                                return <div key={item.id}><Link to={{ pathname: `/marvels/${item.id}`, testvalue: item.name }}>{item.name}</Link> </div>
                            })

                        )

                }
            </div>
        )
    }


}

export default MarvelComponent;