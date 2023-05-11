
const Search = () => {
    return (
        <>
            <div className="flex flex-col mt-10 justify-center items-center mb-8">
                <div className="text-2xl mt-5 p-4 font-bold text-black text-center">
                    Which vehicle you are looking for?
                </div>
                <div className="flex gap-3 mt-4">
                    <div>

                        <select className="border border-slate-600 py-1 rounded-sm" name="cars" id="type">
                            <option value="">Type</option>
                            <option value="">SUV</option>
                            <option value="">Hatchback</option>
                            <option value="">Crossover</option>
                            <option value="">Convertible</option>
                        </select>
                    </div>
                    <div>
                        <select className="border border-slate-600 py-1 rounded-sm" name="cars" id="year">
                            <option value="">Year</option>
                            <option value="">2022</option>
                            <option value="">2021</option>
                            <option value="">2020</option>
                            <option value="">2019</option>
                            <option value="">2018</option>
                        </select>
                    </div>
                    <div>
                        <select className="border border-slate-600 py-1 rounded-sm" name="cars" id="model">

                            <option value="">Model</option>
                            <option value="">Ford</option>
                            <option value="">Lamborghini</option>
                            <option value="">Porsche</option>
                            <option value="">Audi</option>
                            <option value="">BMW</option>
                        </select>
                    </div>
                    <div>
                        <select className="border border-slate-600 py-1 rounded-sm" name="cars" id="price">
                            <option value="">Price</option>
                            <option value="">30000$</option>
                            <option value="">40000$</option>
                            <option value="">50000$</option>
                            <option value="">60000$</option>
                            <option value="">70000$</option>
                        </select>
                    </div>
                    <div className="" >

                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ">Search<i class="fa fa-search"></i></button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Search;