import PropTypes from "prop-types";

export const headerBoxProps = {
    type: PropTypes.oneOf(['title', 'subtitle']),
    title: PropTypes.string.isRequired,
    subtext: PropTypes.string,
    user: PropTypes.object.isRequired,
  };



  export const totalBalanceBoxProps = {
    accounts: PropTypes.arrayOf(PropTypes.string), // Array of strings for account names
    totalBanks: PropTypes.number.isRequired,      // Total number of banks (number)
    totalCurrentBalance: PropTypes.number.isRequired, // Total balance in numbers
};

export const animatedCounter ={
    amount: PropTypes.number.isRequired,
}

export const doughnutChart = {
    accounts: PropTypes.arrayOf(PropTypes.number).isRequired,  // Ensures that `accounts` is an array of numbers and is required
  };


  export const User ={
    $id:PropTypes.string,
    email: PropTypes.string,
    userId: PropTypes.string,
    dwollaCustomerUrl: PropTypes.string,
    dwollaCustomerId: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    address1:PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    postalCode: PropTypes.string,
    dateOfBirth: PropTypes.string,
    ssn: PropTypes.string,
  }

  export const mobileNavProps={
    user: User
  }

  export const rightSidebarProps={
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
    transactions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
    banks: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          balance: PropTypes.number.isRequired,
        }),
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          accountNumber: PropTypes.string.isRequired,
        }),
      ])
    ).isRequired,
  }

  export const bankCardProps={
    account: PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }).isRequired,
    userName: PropTypes.string.isRequired,
    showBalance: PropTypes.bool,
  };