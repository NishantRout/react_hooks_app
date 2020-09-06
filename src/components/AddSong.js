import React, { useState } from 'react';

const AddSong = ({ addSong }) => {
    const [title, setTitle] = useState(['']);
    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(title);
        setTitle('');
    }
    const handleChange = (e) => {
        setTitle(e.target.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Song name:</label>
            <input type="text" value={title} required onChange={handleChange} />
            <input type="submit" value="Add Song" />
        </form>
    );
}

export default AddSong;