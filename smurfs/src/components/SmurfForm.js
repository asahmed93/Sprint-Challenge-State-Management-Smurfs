import React, {useState} from 'react';
import {addSmurf, fetchSmurf} from '../actions';
import {connect} from 'react-redux';

const SmurfForm = props => {
    const [smurfs, setSmurfs] = useState([{
        name: '',
        age: '',
        height: '',
        id: Date.now()
    }]);

   const handleChanges = e => {
        e.preventDefault();
        setSmurfs({...smurfs, [e.target.name]: e.target.value})
   }

    const handleAdd = e => {
        e.preventDefault();
        props.addSmurf({...smurfs})
        setSmurfs({ name: '', age: '', height: ''})
    }

    return (
        <div>
            <form>
                <input 
                    name="name"
                    value={smurfs.name}
                    onChange={handleChanges}
                    placeholder="Enter Name"
                />
                <input
                    name="age"
                    value={smurfs.age}
                    onChange={handleChanges}
                    placeholder="Enter Age" 
                />
                <input
                    name="height"
                    value={smurfs.height}
                    onChange={handleChanges}
                    placeholder="Enter Height" 
                />
               <button onClick={handleAdd}>Add Smurf to list!</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {state}
}

export default connect(mapStateToProps, {addSmurf, fetchSmurf})(SmurfForm);