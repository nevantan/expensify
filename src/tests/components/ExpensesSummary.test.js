import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should properly render summary for single expense', () => {
  let wrapper = shallow(
    <ExpensesSummary
      expenseCount={1}
      expensesTotal={9434}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should properly render summary for multiple expenses', () => {
  let wrapper = shallow(
    <ExpensesSummary
      expenseCount={2}
      expensesTotal={9434}
    />
  );
  expect(wrapper).toMatchSnapshot();
});