import './Person.css';

interface Props {
    number: number;
}

const Person: React.FC<Props> = ({number}) => {
    return (
        <div className="person">
            <h1 className="text">{number}</h1>
        </div>
    );
};

export default Person;