import React, { useState, useEffect } from 'react'
import '../styles/Expense.css'

function Expense(props) {
    const {name, spent, budget, backgroundColor, color} = props
    const defaultStyle = {
        padding: '3em',
        paddingTop: '1em',
        fontWeight: '500',
        backgroundColor: backgroundColor,
        color: color,
        borderRadius: '5%'
    }
    const [ expenseStyle, setExpenseStyle ] = useState(defaultStyle)
    const [ isExpanded, setIsExpanded ] = useState(false)
    const [ spentMoney, setSpentMoney ] = useState(0)
    const [ lastExpense, setLastExpense ] = useState('')
    
    // kinda workaround - I can change it, and it change when new spent arrives
    useEffect(() => {
        setSpentMoney(spent)
    }, [spent])

    const expand = () => {
        if (isExpanded) {
            setExpenseStyle({...expenseStyle,
                height: 'auto'
            })
            setIsExpanded(false)
        } else {
            setExpenseStyle({...expenseStyle,
                height: '20em'
            })
            setIsExpanded(true)
        }
    }

    const handleLastExpenseChange = event => {
        const value = event.target.value
        if (isNaN(value) || value > 99999) {
            return
        }
        setLastExpense(value)
    }

    const addExpense = event => {
        event.stopPropagation()
        event.preventDefault()
        setSpentMoney(Number(spentMoney) + Number(lastExpense))
        setLastExpense('')
        expand()
    }

    const expandableForm = () => {
        if (isExpanded) {
            return (
                <div>
                    <form id="lastExpensesForm">
                        <input
                            id="lastExpensesText"
                            value={lastExpense}
                            onClick={e => e.stopPropagation()}
                            onChange={handleLastExpenseChange}
                        />
                        <button id="lastExpensesButton" onClick={addExpense}>Add expense</button>
                    </form>
                </div>
            )
        } else {
            return null
        }
    }

    return (
        <div className="expense" onClick={expand} style={expenseStyle}>
            <h1>{name}</h1>
            <progress id="budgetBar" value={spentMoney} max={budget} />
            <div>
                <p className="alignLeft" style={{color: color}} >Total: {budget}</p>
                <p className="alignRight" style={{color: color}} >Left {budget - spentMoney}</p>
            </div>
            {expandableForm()}
        </div>        
    )
} 
export default Expense