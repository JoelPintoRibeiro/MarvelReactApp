import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class MarvelItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marvelItem: { id: 0, name: "", imrSrc: "",apparenceCount:0 },
            marvelId: this.props.match.params.id,
        }

    }
    componentWillUnmount() {

        this.mounted = false;

    }
    componentDidMount() {
        this.mounted = true;
        let url = new URL("http://gateway.marvel.com/v1/public/characters/" + this.state.marvelId)
        url.search = new URLSearchParams({ apikey: process.env.REACT_APP_WEATHER_API_KEY })

        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    if (this.mounted) {
                        this.setState({
                            marvelItem: result.data.results.map((item, index) => {
                                return { id: item.id, name: item.name, imgSrc: item.thumbnail.path + '.' + item.thumbnail.extension,apparenceCount:item.comics.available }

                            })[0],
                            isLoading: false
                        })
                    }
                },
                (error) => {
                    console.log("error while fetching data")
                }

            )
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <span>Hello {this.state.marvelItem.name}</span>
                    <div className="row">
                        <div className="col-md-12">
                            <img src={this.state.marvelItem.imgSrc} alt={this.state.marvelItem.name} width="250" height="250"></img>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        You have appared in <span>{this.state.marvelItem.apparenceCount}</span> comics
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MarvelItem;