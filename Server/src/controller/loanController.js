const Loan = require('../models/Loan'); 


const getTotalLoan = async (req, res) => {
    const loanId = req.params.id;
    try {
        const totalLoan = await Loan.findById(loanId);
        if (!totalLoan) {
            return res.status(404).json({ error: "Total loan not found" });
        }

        res.send(totalLoan);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

const fetchPastDueLoans = async () => {
  const currentDate = new Date(); 

  try {
    const pastDueLoans = await Loan.find({ maturityDate: { $lt: currentDate } });
    return pastDueLoans;
  } catch (error) {
    console.error('Error fetching past due loans:', error);
    throw error; 
  }
};

const getLoanStatus = async (req, res) => {
    const loanId = req.params.id;

    try {
        const loan = await Loan.findById(loanId);
        if (!loan) {
            return res.status(404).json({ error: "Loan not found" });
        }

        res.send({ status: loan.status });
    } catch (e) {
        res.status(500).send(e.message);
    }
};


const getUserLoans = async (req, res) => {
    const name = req.query.name; 

    try {
        const userLoans = await Loan.find({ 'applicant.name': name });
        if (userLoans.length === 0) {
            return res.status(404).json({ error: "User loans not found" });
        }

        res.send(userLoans);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

const deleteLoan = async (req, res, next) => {
    const loanId = req.body.loanid;

    try {
        const deletedLoan = await Loan.findByIdAndDelete(loanId);
        if (!deletedLoan) {
            return res.status(404).json({ error: "Loan not found" });
        }

        res.status(200).json({ message: "Loan deleted successfully" });
    } catch (e) {
        res.status(500).send(e.message);
    }
};

module.exports = {
    getTotalLoan,
    fetchPastDueLoans,
    getLoanStatus,
    getUserLoans,
    deleteLoan
};
