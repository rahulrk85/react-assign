const Card =(props)=>{
    return(
        <div className="bg-gray-200 hover:cursor-pointer hover:bg-gray-300 ">
            <h1 className="p-4 m-2 text-3xl font-semibold">customer {props.num}</h1>
            <p className="p-4 m-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
    );
}

export default Card;