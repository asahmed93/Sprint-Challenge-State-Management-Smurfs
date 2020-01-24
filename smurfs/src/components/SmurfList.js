import React, {useEffect} from 'react';
import {fetchSmurf} from '../actions';
import {connect} from 'react-redux';
import SmurfCard from './SmurfCard';

const SmurfList = (props) => {

    useEffect(()=> {
        props.fetchSmurf();
    }, []);

    return (
        <div>
            {props.state.smurfs.map(smurf => {
                return <SmurfCard key={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height}/>
            })}
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return { state }
}

export default connect(mapStateToProps, {fetchSmurf})(SmurfList)

