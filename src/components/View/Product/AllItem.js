import CardItem1 from "./CardItem1"
import CardItem2 from "./CardItem2";
import CardItem4 from "./CardItem4";
const AllItem = () => {
    return (
        <div className="w-full mb-20">
            <div className="relative   ">
                <div className="flex flex-wrap gap-6 justify-center items-center">
                    <CardItem1 />
                    <CardItem2 />
                    <CardItem4 />
                </div>
            </div>
        </div>
    )
}

export default AllItem;