import { ReactElement } from "react";
// import Card from "@components/CardList/Card/Card";

function CardList(): ReactElement {
    return (
        <div style={{backgroundColor: 'lightblue'}}>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', padding: '10px'}}>
                {/* {mockData.results.map((item, index) => {
                    return (
                        <div key={index}>
                            <Card
                                src = {item.image}
                                name = {item.name}
                                species = {item.species}
                                gender = {item.gender}
                                status = {item.status}
                            />
                        </div>
                    )
                })} */}
            </div>
        </div>
    )
}

export default CardList;