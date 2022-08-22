import React, { useState } from 'react';
import { calculateWinner } from '../helper';
import Board from './Board';
import './GameStyle.css';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);
    const handleClick = (index) => {
        const newBoard = [...board];
        if(winner || newBoard[index]) return;
        newBoard[index] = xIsNext ? 'X' : 'O';
        setBoard(newBoard);
        setXIsNext(xIsNext => !xIsNext);
    };

    const handleResetGame = () => {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
    }
    return (
        <div className="container">
            <Board cells={board} onClick={handleClick}></Board>
            <div className="game-winner">
                {winner ? `Winner: ${winner}` : 'Next player: ' + (xIsNext ? 'X' : 'O')}
            </div>
            <button className="game-reset" onClick={handleResetGame}>Reset Game</button>
        </div>
    );
};

export default Game;