import React, { useState } from 'react'
import { Navbar, Footer } from '../components/Layout'

const XOGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isX, setIsX] = useState(true)
  const [winner, setWinner] = useState(null)

  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ]
    for (let line of lines) {
      const [a, b, c] = line
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  const handleClick = (index) => {
    if (winner || board[index]) return
    
    const newBoard = [...board]
    newBoard[index] = isX ? '✧' : '✦'
    setBoard(newBoard)
    
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (newBoard.every(square => square)) {
      setWinner('Draw')
    } else {
      setIsX(!isX)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setIsX(true)
    setWinner(null)
  }

  return (
    <>
      <Navbar />
      <div className="page-section" style={{ minHeight: '100vh', paddingTop: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: '900', background: 'linear-gradient(135deg, #fff 0%, #d4af37 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px' }}>
            ✦ Fragrance Tic-Tac-Toe ✦
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '30px' }}>
            {winner 
              ? winner === 'Draw' 
                ? "It's a draw! 🤝" 
                : `✨ ${winner} wins! ✨`
              : `Current turn: ${isX ? '✧' : '✦'}`
            }
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 100px)', 
            gap: '8px',
            margin: '0 auto 30px',
            justifyContent: 'center'
          }}>
            {board.map((value, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                style={{
                  width: '100px',
                  height: '100px',
                  background: '#1a1a1a',
                  border: '1px solid rgba(139,26,26,0.2)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  cursor: winner || value ? 'default' : 'pointer',
                  color: value === '✧' ? '#d4af37' : '#8B1A1A',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (!winner && !value) {
                    e.currentTarget.style.borderColor = '#8B1A1A'
                    e.currentTarget.style.transform = 'scale(1.02)'
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(139,26,26,0.2)'
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                {value}
              </div>
            ))}
          </div>
          
          <button
            onClick={resetGame}
            style={{
              padding: '12px 40px',
              background: 'linear-gradient(135deg, #8B1A1A, #A52A2A)',
              border: 'none',
              borderRadius: '40px',
              color: '#fff',
              fontSize: '0.9rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              letterSpacing: '1px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)'
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(139,26,26,0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            New Game
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default XOGame