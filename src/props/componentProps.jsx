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