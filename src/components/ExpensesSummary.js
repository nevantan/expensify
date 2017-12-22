import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal}) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div>
      <p>
        Viewing { expenseCount } { expenseWord } totalling { formattedExpensesTotal }
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  const filtered = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: filtered.length,
    expensesTotal: selectExpensesTotal(filtered)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);