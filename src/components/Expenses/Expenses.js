import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

function Expenses(props) {
    return (
        <Card className="expenses">
            {props.items.map((data, i) => {
                return <ExpenseItem key={i}
                    title={data.title}
                    amount={data.amount}
                    date={data.date}
                ></ExpenseItem>;
            })}
        </Card >
    );
}

export default Expenses;
