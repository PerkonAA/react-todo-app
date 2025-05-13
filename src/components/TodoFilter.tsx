import type {TFilter} from "../types";
import {FILTERS} from "../consts";

interface IFilterProps {
    currentFilter: TFilter;
    onChange: (filter: TFilter) => void;
}

const TodoFilter: React.FC<IFilterProps> = ({ currentFilter, onChange }) => {
    return (
        <div style={{ margin: '1rem 0' }}>
            {Object.values(FILTERS).map((filter) => (
                <button
                    key={filter}
                    onClick={() => onChange(filter)}
                    style={{
                        marginRight: '8px',
                        fontWeight: currentFilter === filter ? 'bold' : 'normal'
                    }}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}

export default TodoFilter;