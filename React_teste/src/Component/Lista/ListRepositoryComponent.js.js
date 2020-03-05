import React, { useState, useEffect } from 'react';
import { Button } from 'react-uikit/lib/components';
import '../Style.css'

function ListRepositories() {
    const [ repositories, setRepositories] = useState([]);

    useEffect(async () => {
        const response = await fetch("http://api.github.com/users/alexbbianchi/repos");
        const data = await response.json();

        setRepositories(data);
    }, []);

    useEffect(() => {
        const filtered = repositories.filter(repo => repo.favorite);

        document.title = `Você possui ${filtered.length} favoritos`;
    }, [repositories]);

    function handleFavorite(id){
        const newRepositories = repositories.map(repo => {
            return repo.id === id ? { ...repo, favorite: !repo.favorite} : repo
        });

        setRepositories(newRepositories);
    }

    return (
        <ul>
            {repositories.map(repo => (
            <li key={repo.id}>
                {repo.name}
                {repo.favorite && <span> (Favorito) </span>}
                <Button className="buttonStyle" onClick={()=> handleFavorite(repo.id)}>Favorito</Button>
            </li>
            ))}
        </ul>
    );
}

export default ListRepositories