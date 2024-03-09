
const CustomFilter = (props: any) => {
    return (
        <div className='home__filter'>
        <h3 className='text-lg font-bold'>{props.title}</h3>
        <div className='home__filter-options'>
            {/* {props.options.map((option: string) => (
            <button className='home__filter-option'>{option}</button>
            ))} */}
        </div>
        </div>
    );
};

export default CustomFilter;


