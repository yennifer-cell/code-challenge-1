function estimateTransactionFee(amountToSend) {
    const feePercent = 0.015;
    const minFee = 10;
    const maxFee = 70;

    let fee = amountToSend * feePercent;
    fee = Math.max(minFee, Math.min(fee, maxFee));

    const totalDebited = amountToSend + fee;

    console.log(`For sending KES ${amountToSend}:`);
    console.log(`- Transaction fee: KES ${fee}`);
    console.log(`- Total debited: KES ${totalDebited}`);
}

// Prompt user for input
const input = prompt("Enter the amount you wish to send (KES):");
const amountToSend = Number(input);

if (!isNaN(amountToSend) && amountToSend > 0) {
    estimateTransactionFee(amountToSend);
} else 
    console.log("Please enter a valid amount.");