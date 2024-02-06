
// eslint-disable-next-line react/prop-types
const List = ({job_Catagory}) => {
    // eslint-disable-next-line react/prop-types
    const {category_name,availability} = job_Catagory;
    return (
        <div>
            <div className="w-[200px] h-[200px] bg-slate-100 p-[20px] ">
                <img className="p-[20px]" src="..\src\assets\icons\accounts.png" alt="" />
                <h2 className="text-[15px] font-bold">{category_name}</h2>
                <h2 className="text-[15px] py-[10px] text-[#A3A3A3] font-medium">{availability}</h2>



            </div>
        </div>
    );
};

export default List;