import React, { useState } from 'react';
import { Button } from 'react-uikit';

function List() {
    const [ repositories, setRepositories] = useState([
        { id: 1, name: "repo-1"},
        { id: 2, name: "repo-2"},
        { id: 3, name: "repo-3"}
    ]);

    function handleAddRepository() {
        setRepositories([
            ...repositories,
            { id: Math.random(), name: "Novo repo" }
        ]);
    }
    return (
        <>
            <ul>
                {repositories.map(repo => (
                <li key={repo.id}>{repo.name}</li>
                ))}
            </ul>
            <Button onClick={handleAddRepository}>Adicionar</Button>
        </>
    );
}

export default List